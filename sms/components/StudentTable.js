'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { useParams } from 'next/navigation'
import {
  Search, Plus, ChevronLeft, ChevronRight, X, Check,
  User, GraduationCap, Phone, MapPin, Bus, AlertCircle,
  Filter, Download, Upload, MoreHorizontal, Eye, Edit,
  Trash2, RefreshCw, BookOpen, ChevronsUpDown
} from 'lucide-react'

// ── helpers ───────────────────────────────────────────────────────────────────
function getInitials(first, last) {
  return `${first?.[0] ?? ''}${last?.[0] ?? ''}`.toUpperCase()
}

function avatarColor(name) {
  const colors = [
    'bg-blue-100 text-blue-700',
    'bg-emerald-100 text-emerald-700',
    'bg-violet-100 text-violet-700',
    'bg-amber-100 text-amber-700',
    'bg-rose-100 text-rose-700',
    'bg-cyan-100 text-cyan-700',
  ]
  let hash = 0
  for (const c of (name || '')) hash = c.charCodeAt(0) + ((hash << 5) - hash)
  return colors[Math.abs(hash) % colors.length]
}

const STATUS_STYLES = {
  Active:      'bg-emerald-50 text-emerald-700 border-emerald-200',
  Inactive:    'bg-gray-100   text-gray-500    border-gray-200',
  Transferred: 'bg-amber-50   text-amber-700   border-amber-200',
  Alumni:      'bg-blue-50    text-blue-700    border-blue-200',
}

const CLASSES = ['Pre-KG','KG','1','2','3','4','5','6','7','8','9','10','11','12']
const SECTIONS = ['A','B','C','D','E']
const GENDERS  = ['Male','Female','Other']
const BLOOD_GROUPS = ['A+','A-','B+','B-','AB+','AB-','O+','O-']
const STATES = ['Andhra Pradesh','Assam','Bihar','Chhattisgarh','Delhi','Goa','Gujarat','Haryana',
  'Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur',
  'Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu',
  'Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal']

function getCurrentAcademicYear() {
  const now   = new Date()
  const month = now.getMonth() + 1
  const year  = now.getFullYear()
  return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`
}

// ── Toast ────────────────────────────────────────────────────────────────────
function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(onClose, 4000)
    return () => clearTimeout(t)
  }, [toast, onClose])
  if (!toast) return null
  const colors = {
    success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    error:   'bg-red-50    border-red-200    text-red-800',
    info:    'bg-blue-50   border-blue-200   text-blue-800',
    warning: 'bg-amber-50  border-amber-200  text-amber-800',
  }
  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-start gap-3 px-4 py-3 rounded-xl border shadow-lg max-w-sm animate-in slide-in-from-bottom-4 ${colors[toast.type] ?? colors.info}`}>
      <span className="text-sm font-medium flex-1">{toast.message}</span>
      <button onClick={onClose} className="shrink-0 opacity-60 hover:opacity-100"><X size={14} /></button>
    </div>
  )
}

// ── Input & Select helpers ────────────────────────────────────────────────────
function Field({ label, required, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-gray-600">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

function Input({ className = '', ...props }) {
  return (
    <input
      {...props}
      className={`w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all placeholder:text-gray-400 ${className}`}
    />
  )
}

function Select({ children, className = '', ...props }) {
  return (
    <select
      {...props}
      className={`w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all text-gray-700 ${className}`}
    >
      {children}
    </select>
  )
}

// ── Multi-step Add Student Drawer ─────────────────────────────────────────────
const STEPS = ['Personal','Academic','Parent','Transport']

const INIT_FORM = {
  // personal
  firstName: '', middleName: '', lastName: '', dateOfBirth: '', gender: '', bloodGroup: '', aadharNumber: '',
  // address
  addressLine1: '', addressLine2: '', city: '', state: '', pinCode: '', country: 'India',
  // contact
  parentPrimaryMobile: '', parentAlternateMobile: '', parentEmail: '',
  emergencyContactName: '', emergencyContactPhone: '',
  // academic
  academicYear: getCurrentAcademicYear(), class: '', section: 'A', rollNumber: '',
  // parent
  parent: {
    fatherName: '', fatherMobile: '', fatherEmail: '', fatherOccupation: '', fatherAadhar: '',
    motherName: '', motherMobile: '', motherEmail: '', motherOccupation: '', motherAadhar: '',
    guardianName: '', guardianRelation: '', guardianMobile: '', guardianEmail: '',
    primaryContact: 'Father',
    addressLine1: '', addressLine2: '', city: '', state: '', pinCode: '', country: 'India',
  },
  // transport
  usesTransport: false, transportRouteId: '', pickupPoint: '', dropPoint: '',
  assignFee: true,
}

function AddStudentDrawer({ open, onClose, onSuccess }) {
  const [step, setStep]       = useState(0)
  const [form, setForm]       = useState(INIT_FORM)
  const [errors, setErrors]   = useState({})
  const [loading, setLoading] = useState(false)
  const { username }          = useParams()

  useEffect(() => { if (!open) { setStep(0); setForm(INIT_FORM); setErrors({}) } }, [open])

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }))
  const setParent = (key, val) => setForm(f => ({ ...f, parent: { ...f.parent, [key]: val } }))

  function validate() {
    const e = {}
    if (step === 0) {
      if (!form.firstName.trim()) e.firstName = 'Required'
      if (!form.lastName.trim())  e.lastName  = 'Required'
      if (!form.dateOfBirth)      e.dateOfBirth = 'Required'
      if (!form.gender)           e.gender = 'Required'
      if (!form.addressLine1.trim()) e.addressLine1 = 'Required'
      if (!form.city.trim())      e.city = 'Required'
      if (!form.state)            e.state = 'Required'
      if (!form.pinCode.trim())   e.pinCode = 'Required'
    }
    if (step === 1) {
      if (!form.class)            e.class = 'Required'
      if (!form.parentPrimaryMobile.trim()) e.parentPrimaryMobile = 'Required'
    }
    if (step === 2) {
      if (!form.parent.fatherName.trim() && !form.parent.guardianName.trim()) e.parentName = 'Father or guardian name required'
      if (!form.parent.fatherMobile.trim() && !form.parent.guardianMobile.trim()) e.parentMobile = 'Father or guardian mobile required'
      if (!form.parent.addressLine1.trim()) e.parentAddress = 'Required'
      if (!form.parent.city.trim()) e.parentCity = 'Required'
      if (!form.parent.state) e.parentState = 'Required'
      if (!form.parent.pinCode.trim()) e.parentPinCode = 'Required'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function next() { if (validate()) setStep(s => s + 1) }
  function back() { setStep(s => s - 1) }

  async function submit() {
    if (!validate()) return
    setLoading(true)
    try {
      const res  = await fetch(`/api/students`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed')
      onSuccess(data)
      onClose()
    } catch (err) {
      setErrors({ submit: err.message })
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-xl bg-white z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-base font-semibold text-gray-900">Add New Student</h2>
            <p className="text-xs text-gray-400 mt-0.5">Step {step + 1} of {STEPS.length} — {STEPS[step]}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100"><X size={18} className="text-gray-500" /></button>
        </div>

        {/* Step pills */}
        <div className="flex gap-1 px-6 py-3 border-b border-gray-50">
          {STEPS.map((s, i) => (
            <div key={s} className={`flex-1 h-1.5 rounded-full transition-all ${
              i < step ? 'bg-blue-500' : i === step ? 'bg-blue-400' : 'bg-gray-100'
            }`} />
          ))}
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">

          {/* ── Step 0: Personal ── */}
          {step === 0 && (
            <>
              <div className="grid grid-cols-3 gap-3">
                <Field label="First Name" required error={errors.firstName}>
                  <Input placeholder="Rahul" value={form.firstName} onChange={e => set('firstName', e.target.value)} />
                </Field>
                <Field label="Middle Name">
                  <Input placeholder="Kumar" value={form.middleName} onChange={e => set('middleName', e.target.value)} />
                </Field>
                <Field label="Last Name" required error={errors.lastName}>
                  <Input placeholder="Sharma" value={form.lastName} onChange={e => set('lastName', e.target.value)} />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Date of Birth" required error={errors.dateOfBirth}>
                  <Input type="date" value={form.dateOfBirth} onChange={e => set('dateOfBirth', e.target.value)} />
                </Field>
                <Field label="Gender" required error={errors.gender}>
                  <Select value={form.gender} onChange={e => set('gender', e.target.value)}>
                    <option value="">Select</option>
                    {GENDERS.map(g => <option key={g}>{g}</option>)}
                  </Select>
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Blood Group">
                  <Select value={form.bloodGroup} onChange={e => set('bloodGroup', e.target.value)}>
                    <option value="">Select</option>
                    {BLOOD_GROUPS.map(b => <option key={b}>{b}</option>)}
                  </Select>
                </Field>
                <Field label="Aadhar Number">
                  <Input placeholder="1234 5678 9012" maxLength={14} value={form.aadharNumber} onChange={e => set('aadharNumber', e.target.value)} />
                </Field>
              </div>
              <div className="pt-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Residential Address</p>
                <div className="space-y-3">
                  <Field label="Address Line 1" required error={errors.addressLine1}>
                    <Input placeholder="House/Flat No., Street" value={form.addressLine1} onChange={e => set('addressLine1', e.target.value)} />
                  </Field>
                  <Field label="Address Line 2">
                    <Input placeholder="Area, Landmark" value={form.addressLine2} onChange={e => set('addressLine2', e.target.value)} />
                  </Field>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="City" required error={errors.city}>
                      <Input placeholder="Delhi" value={form.city} onChange={e => set('city', e.target.value)} />
                    </Field>
                    <Field label="Pin Code" required error={errors.pinCode}>
                      <Input placeholder="110001" maxLength={6} value={form.pinCode} onChange={e => set('pinCode', e.target.value)} />
                    </Field>
                  </div>
                  <Field label="State" required error={errors.state}>
                    <Select value={form.state} onChange={e => set('state', e.target.value)}>
                      <option value="">Select State</option>
                      {STATES.map(s => <option key={s}>{s}</option>)}
                    </Select>
                  </Field>
                </div>
              </div>
            </>
          )}

          {/* ── Step 1: Academic ── */}
          {step === 1 && (
            <>
              <div className="grid grid-cols-3 gap-3">
                <Field label="Class" required error={errors.class}>
                  <Select value={form.class} onChange={e => set('class', e.target.value)}>
                    <option value="">Select</option>
                    {CLASSES.map(c => <option key={c}>{c}</option>)}
                  </Select>
                </Field>
                <Field label="Section">
                  <Select value={form.section} onChange={e => set('section', e.target.value)}>
                    {SECTIONS.map(s => <option key={s}>{s}</option>)}
                  </Select>
                </Field>
                <Field label="Roll No.">
                  <Input type="number" placeholder="01" value={form.rollNumber} onChange={e => set('rollNumber', e.target.value)} />
                </Field>
              </div>
              <Field label="Academic Year">
                <Input value={form.academicYear} onChange={e => set('academicYear', e.target.value)} placeholder="2025-2026" />
              </Field>
              <div className="pt-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Contact Info</p>
                <div className="space-y-3">
                  <Field label="Parent Primary Mobile" required error={errors.parentPrimaryMobile}>
                    <Input placeholder="9876543210" maxLength={10} value={form.parentPrimaryMobile} onChange={e => set('parentPrimaryMobile', e.target.value)} />
                  </Field>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Alternate Mobile">
                      <Input placeholder="Optional" maxLength={10} value={form.parentAlternateMobile} onChange={e => set('parentAlternateMobile', e.target.value)} />
                    </Field>
                    <Field label="Parent Email">
                      <Input type="email" placeholder="Optional" value={form.parentEmail} onChange={e => set('parentEmail', e.target.value)} />
                    </Field>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 border border-blue-100">
                <input type="checkbox" id="assignFee" checked={form.assignFee} onChange={e => set('assignFee', e.target.checked)} className="w-4 h-4 accent-blue-600" />
                <label htmlFor="assignFee" className="text-sm text-blue-800">
                  Auto-assign fee structure for <strong>{form.class || 'selected class'}</strong> {form.academicYear}
                </label>
              </div>
            </>
          )}

          {/* ── Step 2: Parent ── */}
          {step === 2 && (
            <>
              <Field label="Primary Contact">
                <Select value={form.parent.primaryContact} onChange={e => setParent('primaryContact', e.target.value)}>
                  {['Father','Mother','Guardian'].map(p => <option key={p}>{p}</option>)}
                </Select>
              </Field>
              <div className="pt-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Father Details</p>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Father Name" error={errors.parentName}>
                      <Input placeholder="Ramesh Sharma" value={form.parent.fatherName} onChange={e => setParent('fatherName', e.target.value)} />
                    </Field>
                    <Field label="Father Mobile" error={errors.parentMobile}>
                      <Input placeholder="9876543210" maxLength={10} value={form.parent.fatherMobile} onChange={e => setParent('fatherMobile', e.target.value)} />
                    </Field>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Occupation">
                      <Input placeholder="Business" value={form.parent.fatherOccupation} onChange={e => setParent('fatherOccupation', e.target.value)} />
                    </Field>
                    <Field label="Email">
                      <Input type="email" placeholder="Optional" value={form.parent.fatherEmail} onChange={e => setParent('fatherEmail', e.target.value)} />
                    </Field>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Mother Details</p>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Mother Name">
                      <Input placeholder="Sunita Sharma" value={form.parent.motherName} onChange={e => setParent('motherName', e.target.value)} />
                    </Field>
                    <Field label="Mother Mobile">
                      <Input placeholder="9876543211" maxLength={10} value={form.parent.motherMobile} onChange={e => setParent('motherMobile', e.target.value)} />
                    </Field>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Parent Address</p>
                <div className="space-y-3">
                  <Field label="Address Line 1" required error={errors.parentAddress}>
                    <Input placeholder="House/Flat No., Street" value={form.parent.addressLine1} onChange={e => setParent('addressLine1', e.target.value)} />
                  </Field>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="City" required error={errors.parentCity}>
                      <Input placeholder="Delhi" value={form.parent.city} onChange={e => setParent('city', e.target.value)} />
                    </Field>
                    <Field label="Pin Code" required error={errors.parentPinCode}>
                      <Input placeholder="110001" maxLength={6} value={form.parent.pinCode} onChange={e => setParent('pinCode', e.target.value)} />
                    </Field>
                  </div>
                  <Field label="State" required error={errors.parentState}>
                    <Select value={form.parent.state} onChange={e => setParent('state', e.target.value)}>
                      <option value="">Select State</option>
                      {STATES.map(s => <option key={s}>{s}</option>)}
                    </Select>
                  </Field>
                </div>
              </div>
            </>
          )}

          {/* ── Step 3: Transport ── */}
          {step === 3 && (
            <>
              <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50">
                <div className="flex items-center gap-3">
                  <Bus size={20} className="text-blue-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">School Transport</p>
                    <p className="text-xs text-gray-400">Enable if student uses school bus</p>
                  </div>
                </div>
                <button
                  onClick={() => set('usesTransport', !form.usesTransport)}
                  className={`relative w-11 h-6 rounded-full transition-all ${
                    form.usesTransport ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${
                    form.usesTransport ? 'left-5' : 'left-0.5'
                  }`} />
                </button>
              </div>
              {form.usesTransport && (
                <div className="space-y-3">
                  <Field label="Pickup Point">
                    <Input placeholder="Near Ram Mandir stop" value={form.pickupPoint} onChange={e => set('pickupPoint', e.target.value)} />
                  </Field>
                  <Field label="Drop Point">
                    <Input placeholder="Same as pickup" value={form.dropPoint} onChange={e => set('dropPoint', e.target.value)} />
                  </Field>
                </div>
              )}
              {errors.submit && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-100 text-red-700 text-sm">
                  <AlertCircle size={15} /> {errors.submit}
                </div>
              )}
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-sm text-emerald-800">
                <p className="font-medium mb-1">Ready to save</p>
                <ul className="space-y-1 text-xs text-emerald-700">
                  <li>✓ Student profile will be created</li>
                  <li>✓ Unique Student ID &amp; Admission No. auto-generated</li>
                  <li>✓ QR code auto-generated</li>
                  {form.assignFee && <li>✓ Fee will be auto-assigned if structure exists</li>}
                  <li>✓ Welcome SMS queued automatically</li>
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <button
            onClick={step === 0 ? onClose : back}
            className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
          >
            {step === 0 ? 'Cancel' : 'Back'}
          </button>
          <button
            onClick={step === STEPS.length - 1 ? submit : next}
            disabled={loading}
            className="flex items-center gap-2 px-5 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-60 transition-all"
          >
            {loading ? <RefreshCw size={14} className="animate-spin" /> : null}
            {step === STEPS.length - 1 ? 'Save Student' : 'Continue'}
          </button>
        </div>
      </div>
    </>
  )
}

// ── Main StudentTable ─────────────────────────────────────────────────────────
export default function StudentTable() {
  const { username } = useParams()

  const [students, setStudents]   = useState([])
  const [pagination, setPagination] = useState({ total: 0, page: 1, totalPages: 1 })
  const [loading, setLoading]     = useState(true)
  const [search, setSearch]       = useState('')
  const [filterClass, setFilterClass]     = useState('')
  const [filterSection, setFilterSection] = useState('')
  const [filterStatus, setFilterStatus]   = useState('')
  const [academicYear, setAcademicYear]   = useState(getCurrentAcademicYear())
  const [showDrawer, setShowDrawer]       = useState(false)
  const [toast, setToast]         = useState(null)
  const searchTimeout = useRef(null)

  const showToast = useCallback((message, type = 'success') => setToast({ message, type }), [])

  // ── Fetch students ──────────────────────────────────────────────────────────
  const fetchStudents = useCallback(async (page = 1) => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page,
        limit: 20,
        ...(search        && { search }),
        ...(filterClass   && { class: filterClass }),
        ...(filterSection && { section: filterSection }),
        ...(filterStatus  && { status: filterStatus }),
        academicYear,
      })
      const res  = await fetch(`/api/students?${params}`)
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setStudents(data.students)
      setPagination(data.pagination)
    } catch (err) {
      showToast(err.message || 'Failed to load students', 'error')
    } finally {
      setLoading(false)
    }
  }, [search, filterClass, filterSection, filterStatus, academicYear, showToast])

  useEffect(() => {
    clearTimeout(searchTimeout.current)
    searchTimeout.current = setTimeout(() => fetchStudents(1), search ? 400 : 0)
    return () => clearTimeout(searchTimeout.current)
  }, [fetchStudents])

  function handleAddSuccess(data) {
    fetchStudents(1)
    const msg = data.feeAssigned
      ? `${data.studentId} added ✓ Fee auto-assigned`
      : data.feeStructureFound
        ? `${data.studentId} added — fee structure found but not assigned`
        : `${data.studentId} added — no fee structure for this class yet`
    showToast(msg, data.feeAssigned ? 'success' : 'warning')
  }

  // ── Current year display ────────────────────────────────────────────────────
  const currentRecord = (student) => student.academicHistory?.[0]

  return (
    <div className="flex flex-col h-full gap-4">
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* ── Top bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Students</h1>
          <p className="text-xs text-gray-400">{pagination.total} student{pagination.total !== 1 ? 's' : ''} · {academicYear}</p>
        </div>
        <button
          onClick={() => setShowDrawer(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-all shadow-sm"
        >
          <Plus size={16} /> Add Student
        </button>
      </div>

      {/* ── Filters bar ── */}
      <div className="flex flex-wrap gap-2">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search name, admission no, mobile…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
          />
        </div>

        <select
          value={filterClass}
          onChange={e => setFilterClass(e.target.value)}
          className="px-3 py-2 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all text-gray-700"
        >
          <option value="">All Classes</option>
          {CLASSES.map(c => <option key={c}>Class {c}</option>)}
        </select>

        <select
          value={filterSection}
          onChange={e => setFilterSection(e.target.value)}
          className="px-3 py-2 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all text-gray-700"
        >
          <option value="">All Sections</option>
          {SECTIONS.map(s => <option key={s}>Section {s}</option>)}
        </select>

        <select
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
          className="px-3 py-2 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all text-gray-700"
        >
          <option value="">All Status</option>
          {Object.keys(STATUS_STYLES).map(s => <option key={s}>{s}</option>)}
        </select>

        <button
          onClick={() => { setSearch(''); setFilterClass(''); setFilterSection(''); setFilterStatus('') }}
          className="px-3 py-2 text-sm rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 transition-all"
        >
          <RefreshCw size={14} />
        </button>
      </div>

      {/* ── Table ── */}
      <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/60">
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Student</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Admission No.</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Class</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Parent / Mobile</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Admission Date</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                Array.from({ length: 8 }).map((_, i) => (
                  <tr key={i}>
                    {Array.from({ length: 7 }).map((_, j) => (
                      <td key={j} className="px-4 py-3">
                        <div className="h-4 rounded bg-gray-100 animate-pulse" style={{ width: j === 0 ? '70%' : '50%' }} />
                      </td>
                    ))}
                  </tr>
                ))
              ) : students.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-16 text-center">
                    <GraduationCap size={32} className="mx-auto text-gray-300 mb-3" />
                    <p className="text-sm font-medium text-gray-500">No students found</p>
                    <p className="text-xs text-gray-400 mt-1">Try adjusting your filters or add a new student</p>
                    <button
                      onClick={() => setShowDrawer(true)}
                      className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-all"
                    >
                      <Plus size={13} /> Add First Student
                    </button>
                  </td>
                </tr>
              ) : (
                students.map(student => {
                  const record = currentRecord(student)
                  const parentName = student.parent?.primaryContact === 'Mother'
                    ? student.parent?.motherName
                    : student.parent?.fatherName
                  const parentMobile = student.parent?.primaryContact === 'Mother'
                    ? student.parent?.motherMobile
                    : student.parent?.fatherMobile
                  return (
                    <tr key={student.id} className="hover:bg-gray-50/60 transition-colors group">
                      {/* Student */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${avatarColor(student.firstName)}`}>
                            {getInitials(student.firstName, student.lastName)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {student.firstName} {student.middleName ? student.middleName + ' ' : ''}{student.lastName}
                            </p>
                            <p className="text-xs text-gray-400">{student.studentId}</p>
                          </div>
                        </div>
                      </td>
                      {/* Admission No. */}
                      <td className="px-4 py-3">
                        <span className="text-xs font-mono text-gray-600 bg-gray-100 px-2 py-0.5 rounded">{student.admissionNumber}</span>
                      </td>
                      {/* Class */}
                      <td className="px-4 py-3">
                        {record ? (
                          <span className="text-sm text-gray-700">
                            Class {record.class} — {record.section}
                            {record.rollNumber ? <span className="text-xs text-gray-400 ml-1">#{record.rollNumber}</span> : null}
                          </span>
                        ) : (
                          <span className="text-xs text-gray-300">—</span>
                        )}
                      </td>
                      {/* Parent */}
                      <td className="px-4 py-3">
                        <p className="text-sm text-gray-700">{parentName || '—'}</p>
                        <p className="text-xs text-gray-400">{parentMobile || student.parentPrimaryMobile}</p>
                      </td>
                      {/* Status */}
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${STATUS_STYLES[student.status] ?? STATUS_STYLES.Active}`}>
                          {student.status}
                        </span>
                      </td>
                      {/* Admission Date */}
                      <td className="px-4 py-3">
                        <span className="text-xs text-gray-500">
                          {new Date(student.admissionDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </span>
                      </td>
                      {/* Actions */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-all" title="View">
                            <Eye size={14} />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-all" title="Edit">
                            <Edit size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>

        {/* ── Pagination ── */}
        {pagination.totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              Showing {((pagination.page - 1) * 20) + 1}–{Math.min(pagination.page * 20, pagination.total)} of {pagination.total}
            </p>
            <div className="flex items-center gap-1">
              <button
                disabled={!pagination.hasPrev}
                onClick={() => fetchStudents(pagination.page - 1)}
                className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 transition-all"
              >
                <ChevronLeft size={14} />
              </button>
              {Array.from({ length: Math.min(5, pagination.totalPages) }).map((_, i) => {
                const pg = i + 1
                return (
                  <button
                    key={pg}
                    onClick={() => fetchStudents(pg)}
                    className={`w-7 h-7 text-xs rounded-lg border transition-all ${
                      pagination.page === pg
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {pg}
                  </button>
                )
              })}
              <button
                disabled={!pagination.hasNext}
                onClick={() => fetchStudents(pagination.page + 1)}
                className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 transition-all"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}
      </div>

      <AddStudentDrawer
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        onSuccess={handleAddSuccess}
      />
    </div>
  )
}
