'use client'
import { useState, useEffect, useCallback, useTransition } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import InputField from '@/components/InputField'
import {
  Table, Dialog, AlertDialog, Select, Button, Flex,
  Skeleton, Callout, Badge, Avatar, TextField, Separator
} from '@radix-ui/themes'
import {
  Search, Plus, ChevronLeft, ChevronRight, X,
  GraduationCap, Phone, Bus, AlertCircle,
  Filter, Download, Eye, Edit, Trash2, RefreshCw, Info
} from 'lucide-react'

// ── Constants ─────────────────────────────────────────────────────────────────
const CLASSES   = ['Pre-KG','KG','1','2','3','4','5','6','7','8','9','10','11','12']
const SECTIONS  = ['A','B','C','D','E']
const GENDERS   = ['Male','Female','Other']
const BLOOD_GROUPS = ['A+','A-','B+','B-','AB+','AB-','O+','O-']
const STATUSES  = ['Active','Inactive','Transferred','Alumni']
const STATES    = [
  'Andhra Pradesh','Assam','Bihar','Chhattisgarh','Delhi','Goa','Gujarat',
  'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala',
  'Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland',
  'Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura',
  'Uttar Pradesh','Uttarakhand','West Bengal',
]

const STATUS_COLOR = {
  Active:      'green',
  Inactive:    'gray',
  Transferred: 'orange',
  Alumni:      'blue',
}

function getCurrentAcademicYear() {
  const now   = new Date()
  const month = now.getMonth() + 1
  const year  = now.getFullYear()
  return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`
}

function getInitials(first, last) {
  return `${first?.[0] ?? ''}${last?.[0] ?? ''}`.toUpperCase()
}

// ── Zod Schemas ───────────────────────────────────────────────────────────────
const personalSchema = z.object({
  firstName:    z.string().min(1, 'First name is required'),
  middleName:   z.string().optional(),
  lastName:     z.string().min(1, 'Last name is required'),
  dateOfBirth:  z.string().min(1, 'Date of birth is required'),
  gender:       z.string().min(1, 'Gender is required'),
  bloodGroup:   z.string().optional(),
  aadharNumber: z.string().optional(),
  addressLine1: z.string().min(1, 'Address is required'),
  addressLine2: z.string().optional(),
  city:         z.string().min(1, 'City is required'),
  state:        z.string().min(1, 'State is required'),
  pinCode:      z.string().min(6, 'Valid pin code required').max(6),
  country:      z.string().default('India'),
})

const academicSchema = z.object({
  academicYear:         z.string().min(1, 'Academic year is required'),
  class:                z.string().min(1, 'Class is required'),
  section:              z.string().default('A'),
  rollNumber:           z.string().optional(),
  parentPrimaryMobile:  z.string().min(10, 'Valid mobile required').max(10),
  parentAlternateMobile:z.string().optional(),
  parentEmail:          z.string().email('Invalid email').optional().or(z.literal('')),
  assignFee:            z.boolean().default(true),
})

const parentSchema = z.object({
  primaryContact:   z.enum(['Father','Mother','Guardian']).default('Father'),
  fatherName:       z.string().optional(),
  fatherMobile:     z.string().optional(),
  fatherEmail:      z.string().optional(),
  fatherOccupation: z.string().optional(),
  motherName:       z.string().optional(),
  motherMobile:     z.string().optional(),
  guardianName:     z.string().optional(),
  guardianRelation: z.string().optional(),
  guardianMobile:   z.string().optional(),
  parentAddressLine1: z.string().min(1, 'Address is required'),
  parentCity:       z.string().min(1, 'City is required'),
  parentState:      z.string().min(1, 'State is required'),
  parentPinCode:    z.string().min(6).max(6),
}).refine(d => d.fatherName || d.guardianName, {
  message: 'Father or guardian name is required',
  path: ['fatherName'],
}).refine(d => d.fatherMobile || d.guardianMobile, {
  message: 'Father or guardian mobile is required',
  path: ['fatherMobile'],
})

const transportSchema = z.object({
  usesTransport:    z.boolean().default(false),
  transportRouteId: z.string().optional(),
  pickupPoint:      z.string().optional(),
  dropPoint:        z.string().optional(),
})

const STEPS = [
  { label: 'Personal',  schema: personalSchema },
  { label: 'Academic',  schema: academicSchema },
  { label: 'Parent',    schema: parentSchema   },
  { label: 'Transport', schema: transportSchema },
]

// ── Skeleton rows ──────────────────────────────────────────────────────────────
const SkeletonRows = ({ count = 8 }) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <Table.Row key={i}>
        {Array.from({ length: 7 }).map((_, j) => (
          <Table.Cell key={j}><Skeleton width="80px" height="16px" /></Table.Cell>
        ))}
      </Table.Row>
    ))}
  </>
)

// ── Reusable styled input ─────────────────────────────────────────────────────
function StyledInput({ className = '', ...props }) {
  return (
    <input
      {...props}
      className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm ${className}`}
    />
  )
}

// ── Add Student Drawer ────────────────────────────────────────────────────────
function AddStudentDrawer({ open, onClose, onSuccess }) {
  const [step, setStep]       = useState(0)
  const [allData, setAllData] = useState({})
  const [loading, setLoading] = useState(false)
  const { username }          = useParams()

  const { register, handleSubmit, control, watch, formState: { errors }, reset } = useForm({
    resolver: zodResolver(STEPS[step].schema),
    mode: 'onSubmit',
  })

  useEffect(() => {
    if (!open) { setStep(0); setAllData({}); reset() }
  }, [open])

  useEffect(() => { reset() }, [step])

  const usesTransport = watch('usesTransport')

  const onNext = handleSubmit((data) => {
    const merged = { ...allData, ...data }
    setAllData(merged)
    if (step < STEPS.length - 1) {
      setStep(s => s + 1)
    } else {
      submitForm(merged)
    }
  })

  async function submitForm(data) {
    setLoading(true)
    const payload = {
      firstName: data.firstName, middleName: data.middleName, lastName: data.lastName,
      dateOfBirth: data.dateOfBirth, gender: data.gender, bloodGroup: data.bloodGroup,
      aadharNumber: data.aadharNumber,
      addressLine1: data.addressLine1, addressLine2: data.addressLine2,
      city: data.city, state: data.state, pinCode: data.pinCode, country: data.country || 'India',
      parentPrimaryMobile: data.parentPrimaryMobile,
      parentAlternateMobile: data.parentAlternateMobile,
      parentEmail: data.parentEmail,
      academicYear: data.academicYear, class: data.class, section: data.section,
      rollNumber: data.rollNumber, assignFee: data.assignFee,
      parent: {
        primaryContact: data.primaryContact,
        fatherName: data.fatherName, fatherMobile: data.fatherMobile,
        fatherEmail: data.fatherEmail, fatherOccupation: data.fatherOccupation,
        motherName: data.motherName, motherMobile: data.motherMobile,
        guardianName: data.guardianName, guardianRelation: data.guardianRelation,
        guardianMobile: data.guardianMobile,
        addressLine1: data.parentAddressLine1, city: data.parentCity,
        state: data.parentState, pinCode: data.parentPinCode, country: 'India',
      },
      usesTransport: data.usesTransport,
      transportRouteId: data.transportRouteId,
      pickupPoint: data.pickupPoint, dropPoint: data.dropPoint,
    }

    const promise = fetch(`/api/students`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).then(async (res) => {
      const result = await res.json()
      if (!res.ok) throw new Error(result.error || 'Failed to add student')
      return result
    })

    toast.promise(promise, {
      loading: 'Adding student...',
      success: 'Student added successfully!',
      error: (err) => `Error: ${err.message}`,
    }).then((data) => {
      onSuccess(data)
      onClose()
    }).catch(() => {}).finally(() => setLoading(false))
  }

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-xl bg-white z-50 flex flex-col shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-base font-semibold text-gray-900">Add New Student</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Step {step + 1} of {STEPS.length} — {STEPS[step].label}
            </p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        {/* Step progress */}
        <div className="flex items-center gap-0 px-6 py-3 border-b border-gray-50">
          {STEPS.map((s, i) => (
            <div key={s.label} className="flex items-center flex-1 last:flex-none">
              <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold transition-all shrink-0 ${
                i < step  ? 'bg-blue-500 text-white' :
                i === step ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-500 ring-offset-1' :
                             'bg-gray-100 text-gray-400'
              }`}>
                {i < step ? '✓' : i + 1}
              </div>
              <span className={`ml-1.5 text-xs hidden sm:inline ${i === step ? 'text-blue-700 font-medium' : 'text-gray-400'}`}>
                {s.label}
              </span>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 rounded-full ${i < step ? 'bg-blue-400' : 'bg-gray-150'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">

          {/* ── Step 0: Personal ── */}
          {step === 0 && (
            <>
              <div className="grid grid-cols-3 gap-3">
                <InputField label="First Name" required error={errors.firstName}>
                  <StyledInput placeholder="Rahul" {...register('firstName')} />
                </InputField>
                <InputField label="Middle Name" error={errors.middleName}>
                  <StyledInput placeholder="Kumar" {...register('middleName')} />
                </InputField>
                <InputField label="Last Name" required error={errors.lastName}>
                  <StyledInput placeholder="Sharma" {...register('lastName')} />
                </InputField>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <InputField label="Date of Birth" required error={errors.dateOfBirth}>
                  <StyledInput type="date" {...register('dateOfBirth')} />
                </InputField>
                <InputField label="Gender" required error={errors.gender}>
                  <Controller name="gender" control={control} render={({ field }) => (
                    <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                      <Select.Trigger className="w-full" placeholder="Select gender" />
                      <Select.Content>
                        {GENDERS.map(g => <Select.Item key={g} value={g}>{g}</Select.Item>)}
                      </Select.Content>
                    </Select.Root>
                  )} />
                </InputField>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <InputField label="Blood Group" error={errors.bloodGroup}>
                  <Controller name="bloodGroup" control={control} render={({ field }) => (
                    <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                      <Select.Trigger className="w-full" placeholder="Select" />
                      <Select.Content>
                        {BLOOD_GROUPS.map(b => <Select.Item key={b} value={b}>{b}</Select.Item>)}
                      </Select.Content>
                    </Select.Root>
                  )} />
                </InputField>
                <InputField label="Aadhar Number" error={errors.aadharNumber}>
                  <StyledInput placeholder="1234 5678 9012" maxLength={14} {...register('aadharNumber')} />
                </InputField>
              </div>

              <Separator size="4" />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Residential Address</p>

              <InputField label="Address Line 1" required error={errors.addressLine1}>
                <StyledInput placeholder="House/Flat No., Street" {...register('addressLine1')} />
              </InputField>
              <InputField label="Address Line 2" error={errors.addressLine2}>
                <StyledInput placeholder="Area, Landmark" {...register('addressLine2')} />
              </InputField>
              <div className="grid grid-cols-2 gap-3">
                <InputField label="City" required error={errors.city}>
                  <StyledInput placeholder="Delhi" {...register('city')} />
                </InputField>
                <InputField label="Pin Code" required error={errors.pinCode}>
                  <StyledInput placeholder="110001" maxLength={6} {...register('pinCode')} />
                </InputField>
              </div>
              <InputField label="State" required error={errors.state}>
                <Controller name="state" control={control} render={({ field }) => (
                  <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                    <Select.Trigger className="w-full" placeholder="Select State" />
                    <Select.Content>
                      {STATES.map(s => <Select.Item key={s} value={s}>{s}</Select.Item>)}
                    </Select.Content>
                  </Select.Root>
                )} />
              </InputField>
            </>
          )}

          {/* ── Step 1: Academic ── */}
          {step === 1 && (
            <>
              <div className="grid grid-cols-3 gap-3">
                <InputField label="Class" required error={errors.class}>
                  <Controller name="class" control={control} render={({ field }) => (
                    <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                      <Select.Trigger className="w-full" placeholder="Select" />
                      <Select.Content>
                        {CLASSES.map(c => <Select.Item key={c} value={c}>{c}</Select.Item>)}
                      </Select.Content>
                    </Select.Root>
                  )} />
                </InputField>
                <InputField label="Section" error={errors.section}>
                  <Controller name="section" control={control} defaultValue="A" render={({ field }) => (
                    <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                      <Select.Trigger className="w-full" />
                      <Select.Content>
                        {SECTIONS.map(s => <Select.Item key={s} value={s}>{s}</Select.Item>)}
                      </Select.Content>
                    </Select.Root>
                  )} />
                </InputField>
                <InputField label="Roll No." error={errors.rollNumber}>
                  <StyledInput type="number" placeholder="01" {...register('rollNumber')} />
                </InputField>
              </div>
              <InputField label="Academic Year" required error={errors.academicYear}>
                <StyledInput placeholder="2025-2026" defaultValue={getCurrentAcademicYear()} {...register('academicYear')} />
              </InputField>

              <Separator size="4" />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Contact Info</p>

              <InputField label="Parent Primary Mobile" required error={errors.parentPrimaryMobile}>
                <StyledInput placeholder="9876543210" maxLength={10} {...register('parentPrimaryMobile')} />
              </InputField>
              <div className="grid grid-cols-2 gap-3">
                <InputField label="Alternate Mobile" error={errors.parentAlternateMobile}>
                  <StyledInput placeholder="Optional" maxLength={10} {...register('parentAlternateMobile')} />
                </InputField>
                <InputField label="Parent Email" error={errors.parentEmail}>
                  <StyledInput type="email" placeholder="Optional" {...register('parentEmail')} />
                </InputField>
              </div>

              <Callout.Root color="blue" size="1">
                <Callout.Icon><Info size={14} /></Callout.Icon>
                <Callout.Text>
                  <Controller name="assignFee" control={control} defaultValue={true} render={({ field }) => (
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={field.value} onChange={e => field.onChange(e.target.checked)}
                        className="w-4 h-4 accent-blue-600 rounded" />
                      Auto-assign fee structure for selected class &amp; year
                    </label>
                  )} />
                </Callout.Text>
              </Callout.Root>
            </>
          )}

          {/* ── Step 2: Parent ── */}
          {step === 2 && (
            <>
              <InputField label="Primary Contact" error={errors.primaryContact}>
                <Controller name="primaryContact" control={control} defaultValue="Father" render={({ field }) => (
                  <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                    <Select.Trigger className="w-full" />
                    <Select.Content>
                      {['Father','Mother','Guardian'].map(p => <Select.Item key={p} value={p}>{p}</Select.Item>)}
                    </Select.Content>
                  </Select.Root>
                )} />
              </InputField>

              <Separator size="4" />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Father Details</p>
              <div className="grid grid-cols-2 gap-3">
                <InputField label="Father Name" error={errors.fatherName}>
                  <StyledInput placeholder="Ramesh Sharma" {...register('fatherName')} />
                </InputField>
                <InputField label="Father Mobile" error={errors.fatherMobile}>
                  <StyledInput placeholder="9876543210" maxLength={10} {...register('fatherMobile')} />
                </InputField>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <InputField label="Occupation" error={errors.fatherOccupation}>
                  <StyledInput placeholder="Business" {...register('fatherOccupation')} />
                </InputField>
                <InputField label="Email" error={errors.fatherEmail}>
                  <StyledInput type="email" placeholder="Optional" {...register('fatherEmail')} />
                </InputField>
              </div>

              <Separator size="4" />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Mother Details</p>
              <div className="grid grid-cols-2 gap-3">
                <InputField label="Mother Name" error={errors.motherName}>
                  <StyledInput placeholder="Sunita Sharma" {...register('motherName')} />
                </InputField>
                <InputField label="Mother Mobile" error={errors.motherMobile}>
                  <StyledInput placeholder="9876543211" maxLength={10} {...register('motherMobile')} />
                </InputField>
              </div>

              <Separator size="4" />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Parent Address</p>
              <InputField label="Address Line 1" required error={errors.parentAddressLine1}>
                <StyledInput placeholder="House/Flat No., Street" {...register('parentAddressLine1')} />
              </InputField>
              <div className="grid grid-cols-2 gap-3">
                <InputField label="City" required error={errors.parentCity}>
                  <StyledInput placeholder="Delhi" {...register('parentCity')} />
                </InputField>
                <InputField label="Pin Code" required error={errors.parentPinCode}>
                  <StyledInput placeholder="110001" maxLength={6} {...register('parentPinCode')} />
                </InputField>
              </div>
              <InputField label="State" required error={errors.parentState}>
                <Controller name="parentState" control={control} render={({ field }) => (
                  <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                    <Select.Trigger className="w-full" placeholder="Select State" />
                    <Select.Content>
                      {STATES.map(s => <Select.Item key={s} value={s}>{s}</Select.Item>)}
                    </Select.Content>
                  </Select.Root>
                )} />
              </InputField>
            </>
          )}

          {/* ── Step 3: Transport ── */}
          {step === 3 && (
            <>
              <Callout.Root color="blue" size="1">
                <Callout.Icon><Bus size={14} /></Callout.Icon>
                <Callout.Text>
                  <Controller name="usesTransport" control={control} defaultValue={false} render={({ field }) => (
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={field.value} onChange={e => field.onChange(e.target.checked)}
                        className="w-4 h-4 accent-blue-600 rounded" />
                      Student uses school transport
                    </label>
                  )} />
                </Callout.Text>
              </Callout.Root>

              {usesTransport && (
                <div className="space-y-3 mt-2">
                  <InputField label="Route ID" error={errors.transportRouteId}>
                    <StyledInput placeholder="e.g. ROUTE-01" {...register('transportRouteId')} />
                  </InputField>
                  <div className="grid grid-cols-2 gap-3">
                    <InputField label="Pickup Point" error={errors.pickupPoint}>
                      <StyledInput placeholder="e.g. Sector 15 Bus Stop" {...register('pickupPoint')} />
                    </InputField>
                    <InputField label="Drop Point" error={errors.dropPoint}>
                      <StyledInput placeholder="e.g. School Gate A" {...register('dropPoint')} />
                    </InputField>
                  </div>
                </div>
              )}

              {!usesTransport && (
                <div className="flex flex-col items-center justify-center py-10 text-gray-400 gap-2">
                  <Bus size={32} strokeWidth={1.5} />
                  <span className="text-sm">No transport assigned</span>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center gap-3">
          <Button variant="soft" color="gray" disabled={step === 0 || loading} onClick={() => setStep(s => s - 1)}>
            Back
          </Button>
          <Button onClick={onNext} loading={loading && step === STEPS.length - 1} disabled={loading}>
            {step === STEPS.length - 1 ? 'Add Student' : 'Next →'}
          </Button>
        </div>
      </div>
    </>
  )
}

// ── Edit Student Dialog ────────────────────────────────────────────────────────
const editSchema = z.object({
  status:  z.string().min(1, 'Status is required'),
  class:   z.string().min(1, 'Class is required'),
  section: z.string().min(1, 'Section is required'),
  rollNumber: z.string().optional(),
  parentPrimaryMobile: z.string().min(10).max(10),
})

function EditStudentDialog({ open, onClose, student, onSuccess }) {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: zodResolver(editSchema),
    mode: 'onSubmit',
  })

  useEffect(() => {
    if (student) reset({
      status:  student.status || 'Active',
      class:   student.currentClass || '',
      section: student.currentSection || 'A',
      rollNumber: student.rollNumber || '',
      parentPrimaryMobile: student.parentPrimaryMobile || '',
    })
  }, [student])

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true)
    const promise = fetch(`/api/students/${student.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(async (res) => {
      const result = await res.json()
      if (!res.ok) throw new Error(result.error || 'Update failed')
      return result
    })

    toast.promise(promise, {
      loading: 'Updating student...',
      success: 'Student updated successfully!',
      error: (err) => `Error: ${err.message}`,
    }).then(() => { onSuccess(); onClose() }).catch(() => {}).finally(() => setLoading(false))
  })

  return (
    <Dialog.Root open={open} onOpenChange={(val) => { if (!val) onClose() }}>
      <Dialog.Content size="3" style={{ maxWidth: 480 }}>
        <Dialog.Title>Edit Student</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Update details for <strong>{student?.firstName} {student?.lastName}</strong>
        </Dialog.Description>
        <Flex direction="column" gap="3">
          <div className="grid grid-cols-3 gap-3">
            <InputField label="Class" required error={errors.class}>
              <Controller name="class" control={control} render={({ field }) => (
                <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                  <Select.Trigger className="w-full" placeholder="Class" />
                  <Select.Content>
                    {CLASSES.map(c => <Select.Item key={c} value={c}>{c}</Select.Item>)}
                  </Select.Content>
                </Select.Root>
              )} />
            </InputField>
            <InputField label="Section" required error={errors.section}>
              <Controller name="section" control={control} render={({ field }) => (
                <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                  <Select.Trigger className="w-full" />
                  <Select.Content>
                    {SECTIONS.map(s => <Select.Item key={s} value={s}>{s}</Select.Item>)}
                  </Select.Content>
                </Select.Root>
              )} />
            </InputField>
            <InputField label="Roll No." error={errors.rollNumber}>
              <StyledInput type="number" placeholder="01" {...register('rollNumber')} />
            </InputField>
          </div>
          <InputField label="Status" required error={errors.status}>
            <Controller name="status" control={control} render={({ field }) => (
              <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                <Select.Trigger className="w-full" />
                <Select.Content>
                  {STATUSES.map(s => <Select.Item key={s} value={s}>{s}</Select.Item>)}
                </Select.Content>
              </Select.Root>
            )} />
          </InputField>
          <InputField label="Parent Mobile" required error={errors.parentPrimaryMobile}>
            <StyledInput placeholder="9876543210" maxLength={10} {...register('parentPrimaryMobile')} />
          </InputField>
        </Flex>
        <Flex gap="3" mt="4" justify="end">
          <Button variant="soft" color="gray" disabled={loading} onClick={onClose}>Cancel</Button>
          <Button onClick={onSubmit} loading={loading} disabled={loading}><Edit size={16} /> Save Changes</Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}

// ── Main StudentTable ─────────────────────────────────────────────────────────
export default function StudentTable({ data = [], classes = [], academicYears = [] }) {
  const router                  = useRouter()
  const [isPending, startTransition] = useTransition()
  const [addOpen, setAddOpen]   = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const [search, setSearch]     = useState('')
  const [filterClass, setFilterClass] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterYear, setFilterYear] = useState(academicYears?.[0] || getCurrentAcademicYear())
  const [page, setPage]         = useState(1)
  const PER_PAGE = 10

  const refresh = () => startTransition(() => router.refresh())

  // ── Filtering ──────────────────────────────────────────────────────────────
  const filtered = data.filter(s => {
    const name = `${s.firstName} ${s.lastName}`.toLowerCase()
    const q    = search.toLowerCase()
    const matchSearch  = !q || name.includes(q) || s.admissionNumber?.includes(q)
    const matchClass   = filterClass === 'all' || s.currentClass === filterClass
    const matchStatus  = filterStatus === 'all' || s.status === filterStatus
    return matchSearch && matchClass && matchStatus
  })

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  useEffect(() => setPage(1), [search, filterClass, filterStatus, filterYear])

  const onDelete = async () => {
    const promise = fetch(`/api/students/${selected.id}`, { method: 'DELETE' })
      .then(async (res) => {
        const result = await res.json()
        if (!res.ok) throw new Error(result.error || 'Delete failed')
        return result
      })
    toast.promise(promise, {
      loading: 'Deleting student...',
      success: 'Student deleted.',
      error: (err) => `Error: ${err.message}`,
    }).then(() => { setDeleteOpen(false); setSelected(null); refresh() }).catch(() => {})
  }

  return (
    <div className="flex flex-col w-full h-full p-3 sm:p-6 space-y-4 sm:space-y-6">

      {/* ── Header bar ── */}
      <header className="bg-white border border-gray-100 rounded-2xl shadow-sm w-full flex flex-col sm:flex-row justify-between px-4 sm:px-6 py-4 gap-4 items-start sm:items-center">
        <div className="flex items-center gap-3">
          <GraduationCap size={20} className="text-blue-600" />
          <div>
            <h1 className="font-bold text-gray-900 text-sm sm:text-base">Students</h1>
            <p className="text-xs text-gray-400">{filtered.length} total</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="soft" color="gray" size="2" onClick={refresh} disabled={isPending}>
            <RefreshCw size={15} className={isPending ? 'animate-spin' : ''} />
            <span className="hidden sm:inline ml-1">Refresh</span>
          </Button>
          <Button variant="outline" size="2">
            <Download size={15} /><span className="ml-1 hidden sm:inline">Export</span>
          </Button>
          <Button size="2" onClick={() => setAddOpen(true)}>
            <Plus size={15} /><span className="ml-1">Add Student</span>
          </Button>
        </div>
      </header>

      {/* ── Filters ── */}
      <div className="flex flex-wrap gap-2 items-center">
        {/* Search */}
        <div className="relative flex-1 min-w-48">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search name or admission no..."
            className="w-full pl-8 pr-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X size={12} />
            </button>
          )}
        </div>

        {/* Academic Year */}
        {academicYears.length > 0 && (
          <Select.Root value={filterYear} onValueChange={setFilterYear} size="2">
            <Select.Trigger placeholder="Year" />
            <Select.Content>
              {academicYears.map(y => <Select.Item key={y} value={y}>{y}</Select.Item>)}
            </Select.Content>
          </Select.Root>
        )}

        {/* Class filter */}
        <Select.Root value={filterClass} onValueChange={setFilterClass} size="2">
          <Select.Trigger placeholder="Class" />
          <Select.Content>
            <Select.Item value="all">All Classes</Select.Item>
            {CLASSES.map(c => <Select.Item key={c} value={c}>Class {c}</Select.Item>)}
          </Select.Content>
        </Select.Root>

        {/* Status filter */}
        <Select.Root value={filterStatus} onValueChange={setFilterStatus} size="2">
          <Select.Trigger placeholder="Status" />
          <Select.Content>
            <Select.Item value="all">All Status</Select.Item>
            {STATUSES.map(s => <Select.Item key={s} value={s}>{s}</Select.Item>)}
          </Select.Content>
        </Select.Root>
      </div>

      {/* ── Table ── */}
      <div className="w-full overflow-x-auto rounded-xl border border-gray-100 bg-white">
        {filtered.length === 0 && !isPending ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400 gap-3">
            <GraduationCap size={40} strokeWidth={1.5} />
            <p className="text-sm font-medium">No students found</p>
            <p className="text-xs text-gray-300">
              {search || filterClass !== 'all' || filterStatus !== 'all'
                ? 'Try adjusting your filters'
                : 'Click "Add Student" to get started'}
            </p>
          </div>
        ) : (
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Student</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Adm. No</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Class</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Mobile</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Transport</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {isPending ? (
                <SkeletonRows count={paginated.length || PER_PAGE} />
              ) : (
                paginated.map(student => (
                  <Table.Row key={student.id} className="hover:bg-gray-50 transition-colors">
                    <Table.Cell>
                      <div className="flex items-center gap-2.5">
                        <Avatar
                          size="2"
                          src={student.photoUrl}
                          fallback={getInitials(student.firstName, student.lastName)}
                          radius="full"
                          color="blue"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900 leading-tight">
                            {student.firstName} {student.lastName}
                          </p>
                          <p className="text-xs text-gray-400">{student.gender}</p>
                        </div>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-xs font-mono text-gray-600">{student.admissionNumber || '—'}</span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-sm">{student.currentClass ? `${student.currentClass} - ${student.currentSection}` : '—'}</span>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge color={STATUS_COLOR[student.status] ?? 'gray'} variant="soft" radius="full">
                        {student.status || 'Active'}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-sm text-gray-600">{student.parentPrimaryMobile || '—'}</span>
                    </Table.Cell>
                    <Table.Cell>
                      {student.usesTransport
                        ? <Badge color="teal" variant="soft"><Bus size={11} className="inline mr-1" />Yes</Badge>
                        : <span className="text-gray-300 text-sm">—</span>
                      }
                    </Table.Cell>
                    <Table.Cell>
                      <Flex gap="1">
                        <Button variant="ghost" size="1" title="View">
                          <Eye size={15} />
                        </Button>
                        <Button variant="ghost" size="1" title="Edit"
                          onClick={() => { setSelected(student); setEditOpen(true) }}>
                          <Edit size={15} />
                        </Button>
                        <Button variant="ghost" color="red" size="1" title="Delete"
                          onClick={() => { setSelected(student); setDeleteOpen(true) }}>
                          <Trash2 size={15} />
                        </Button>
                      </Flex>
                    </Table.Cell>
                  </Table.Row>
                ))
              )}
            </Table.Body>
          </Table.Root>
        )}
      </div>

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <Flex justify="between" align="center" className="text-sm text-gray-500 px-1">
          <span>
            Showing {Math.min((page - 1) * PER_PAGE + 1, filtered.length)}–{Math.min(page * PER_PAGE, filtered.length)} of {filtered.length}
          </span>
          <Flex gap="2">
            <Button variant="soft" color="gray" size="2" disabled={page === 1} onClick={() => setPage(p => p - 1)}>
              <ChevronLeft size={15} />
            </Button>
            <span className="flex items-center px-2 text-xs font-medium">{page} / {totalPages}</span>
            <Button variant="soft" color="gray" size="2" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
              <ChevronRight size={15} />
            </Button>
          </Flex>
        </Flex>
      )}

      {/* ── Drawers & Dialogs ── */}
      <AddStudentDrawer open={addOpen} onClose={() => setAddOpen(false)} onSuccess={() => refresh()} />

      <EditStudentDialog
        open={editOpen}
        onClose={() => { setEditOpen(false); setSelected(null) }}
        student={selected}
        onSuccess={() => refresh()}
      />

      <AlertDialog.Root open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Delete Student?</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure you want to permanently delete{' '}
            <strong>{selected?.firstName} {selected?.lastName}</strong>?{' '}
            This will also remove all associated fee and document records. This action cannot be undone.
          </AlertDialog.Description>
          <Callout.Root color="red" size="1" mt="3">
            <Callout.Icon><AlertCircle size={14} /></Callout.Icon>
            <Callout.Text>All fee records, documents and academic history will be deleted.</Callout.Text>
          </Callout.Root>
          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray" onClick={() => setDeleteOpen(false)}>Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red" onClick={onDelete}>
                <Trash2 size={15} /> Delete Student
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

    </div>
  )
}
