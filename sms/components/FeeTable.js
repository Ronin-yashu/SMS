"use client"
import React from 'react'
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import InputField from '@/components/InputField';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Select, Button, Table, Dialog, Flex, AlertDialog, Skeleton, Callout } from '@radix-ui/themes'
import { Zap, Plus, SquarePen, Trash, Info, Copy } from 'lucide-react'

const EditFeeStructureSchema = z.object({
  tuitionFeeMonthly: z.number({ invalid_type_error: 'Tuition fee is required' }).int().positive(),
  transportFeeMonthly: z.number({ invalid_type_error: 'Transport fee is required' }).int().positive(),
  examFeeYearly: z.number({ invalid_type_error: 'Exam yearly fee is required' }).int().positive(),
  admissionFee: z.number({ invalid_type_error: 'Admission fee is required' }).int().positive(),
  booksFee: z.number({ invalid_type_error: 'Book fee is required' }).int().positive(),
  idCardFee: z.number({ invalid_type_error: 'ID card fee is required' }).int().positive(),
  activityFee: z.number({ invalid_type_error: 'Activity fee is required' }).int().positive(),
});

const AddFeeStructureSchema = z.object({
  class: z.string().min(1, 'Class is required'),
  academicYear: z.string().min(1, 'Academic year is required'),
  tuitionFeeMonthly: z.number({ invalid_type_error: 'Tuition fee is required' }).int().positive(),
  transportFeeMonthly: z.number({ invalid_type_error: 'Transport fee is required' }).int().positive(),
  examFeeYearly: z.number({ invalid_type_error: 'Exam yearly fee is required' }).int().positive(),
  admissionFee: z.number({ invalid_type_error: 'Admission fee is required' }).int().positive(),
  booksFee: z.number({ invalid_type_error: 'Book fee is required' }).int().positive(),
  idCardFee: z.number({ invalid_type_error: 'ID card fee is required' }).int().positive(),
  activityFee: z.number({ invalid_type_error: 'Activity fee is required' }).int().positive(),
});

const QuickSetupSchema = z.object({
  academicYear: z.string().min(1, 'Academic year is required'),
  tuitionFeeMonthly: z.number({ invalid_type_error: 'Tuition fee is required' }).int().positive(),
  transportFeeMonthly: z.number({ invalid_type_error: 'Transport fee is required' }).int().positive(),
  examFeeYearly: z.number({ invalid_type_error: 'Exam yearly fee is required' }).int().positive(),
  admissionFee: z.number({ invalid_type_error: 'Admission fee is required' }).int().positive(),
  booksFee: z.number({ invalid_type_error: 'Book fee is required' }).int().positive(),
  idCardFee: z.number({ invalid_type_error: 'ID card fee is required' }).int().positive(),
  activityFee: z.number({ invalid_type_error: 'Activity fee is required' }).int().positive(),
});

const currentYear = new Date().getFullYear();
const defaultAcademicYear = `${currentYear}-${currentYear + 1}`;

const SkeletonRows = ({ count = 8 }) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <Table.Row key={i}>
        {Array.from({ length: 9 }).map((_, j) => (
          <Table.Cell key={j}>
            <Skeleton width="60px" height="16px" />
          </Table.Cell>
        ))}
      </Table.Row>
    ))}
  </>
);

const FeeTable = ({ data, academic_years }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [addOpen, setAddOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [quickSetupOpen, setQuickSetupOpen] = React.useState(false);
  const [conflictOpen, setConflictOpen] = React.useState(false);
  const [conflictData, setConflictData] = React.useState({ existingClasses: [], missingClasses: [] });
  const [pendingFormData, setPendingFormData] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [selectedYear, setSelectedYear] = React.useState(academic_years?.[0] || '');
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  // Copy Year state
  const [copyOpen, setCopyOpen] = React.useState(false);
  const [copyToYear, setCopyToYear] = React.useState('');
  const [copyToYearError, setCopyToYearError] = React.useState('');
  const [increasePercent, setIncreasePercent] = React.useState(0);
  const [customPercent, setCustomPercent] = React.useState('');
  const [copyConflictOpen, setCopyConflictOpen] = React.useState(false);
  const [copyConflictData, setCopyConflictData] = React.useState({ existingClasses: [], missingClasses: [] });
  const [pendingCopyData, setPendingCopyData] = React.useState(null);

  // Edit form
  const {
    register: editRegister,
    handleSubmit: editHandleSubmit,
    formState: { errors: editErrors },
    reset: editReset,
  } = useForm({
    resolver: zodResolver(EditFeeStructureSchema),
    mode: 'onSubmit',
    defaultValues: {
      tuitionFeeMonthly: '',
      transportFeeMonthly: '',
      examFeeYearly: '',
      admissionFee: '',
      booksFee: '',
      idCardFee: '',
      activityFee: '',
    }
  });

  // Add form
  const {
    register: addRegister,
    handleSubmit: addHandleSubmit,
    formState: { errors: addErrors },
    reset: addReset,
    control: addControl,
  } = useForm({
    resolver: zodResolver(AddFeeStructureSchema),
    mode: 'onSubmit',
    defaultValues: {
      class: '',
      academicYear: defaultAcademicYear,
      tuitionFeeMonthly: '',
      transportFeeMonthly: '',
      examFeeYearly: '',
      admissionFee: '',
      booksFee: '',
      idCardFee: '',
      activityFee: '',
    }
  });

  // Quick Setup form
  const {
    register: quickRegister,
    handleSubmit: quickHandleSubmit,
    formState: { errors: quickErrors },
    reset: quickReset,
  } = useForm({
    resolver: zodResolver(QuickSetupSchema),
    mode: 'onSubmit',
    defaultValues: {
      academicYear: defaultAcademicYear,
      tuitionFeeMonthly: '',
      transportFeeMonthly: '',
      examFeeYearly: '',
      admissionFee: '',
      booksFee: '',
      idCardFee: '',
      activityFee: '',
    }
  });

  const filteredData = data
    .filter(item => item.academicYear === selectedYear)
    .sort((a, b) => parseInt(a.class) - parseInt(b.class));

  const refreshData = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  // Reusable full reset for quick setup flow
  const resetQuickSetupState = () => {
    quickReset();
    setPendingFormData(null);
    setConflictData({ existingClasses: [], missingClasses: [] });
    setConflictOpen(false);
    setQuickSetupOpen(false);
  };

  // Copy Year helpers
  const getEffectivePercent = () => {
    if (increasePercent === 'custom') {
      const val = parseFloat(customPercent);
      return isNaN(val) ? 0 : val;
    }
    return increasePercent;
  };

  const previewItems = filteredData.slice(0, 3).map(item => ({
    label: `Class ${item.class} Tuition`,
    old: item.tuitionFeeMonthly,
    new: Math.round(item.tuitionFeeMonthly * (1 + getEffectivePercent() / 100)),
  }));

  if (filteredData.length > 0) {
    const examItem = filteredData[0];
    previewItems.push({
      label: `Exam Fee (all)`,
      old: examItem.examFeeYearly,
      new: Math.round(examItem.examFeeYearly * (1 + getEffectivePercent() / 100)),
    });
  }

  const resetCopyState = () => {
    setCopyOpen(false);
    setCopyToYear('');
    setCopyToYearError('');
    setIncreasePercent(0);
    setCustomPercent('');
    setCopyConflictOpen(false);
    setCopyConflictData({ existingClasses: [], missingClasses: [] });
    setPendingCopyData(null);
  };

  const onCopySubmit = async () => {
    if (!copyToYear.trim()) {
      setCopyToYearError('Target year is required');
      return;
    }
    if (copyToYear.trim() === selectedYear) {
      setCopyToYearError('Target year cannot be same as source year');
      return;
    }
    setCopyToYearError('');
    setIsLoading(true);

    try {
      const checkRes = await fetch("/api/fee_structure/CheckYear", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ academicYear: copyToYear.trim() }),
      });
      const checkResult = await checkRes.json();
      if (!checkRes.ok) throw new Error(checkResult.error || 'Check failed');

      const payload = {
        fromYear: selectedYear,
        toYear: copyToYear.trim(),
        increasePercent: getEffectivePercent(),
      };

      if (checkResult.isEmpty) {
        await runCopy(payload, 'skip');
      } else {
        setPendingCopyData(payload);
        setCopyConflictData({
          existingClasses: checkResult.existingClasses,
          missingClasses: checkResult.missingClasses,
        });
        setCopyOpen(false);
        setCopyConflictOpen(true);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(error.message || 'Something went wrong');
      setIsLoading(false);
    }
  };

  const runCopy = async (payload, mode) => {
    setIsLoading(true);
    const promise = fetch("/api/fee_structure/CopyYear", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, mode }),
    }).then(async (res) => {
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Copy failed');
      return result;
    });

    toast.promise(promise, {
      loading: 'Copying fee structure...',
      success: (res) => `Copied ${res.copied} classes to ${payload.toYear}!`,
      error: (err) => `Error: ${err.message}`,
    }).then(() => {
      resetCopyState();
      refreshData();
    }).catch(() => { }).finally(() => setIsLoading(false));
  };

  // Edit handlers
  const handleEditOpen = (item) => {
    setSelectedItem(item);
    editReset({
      tuitionFeeMonthly: item.tuitionFeeMonthly,
      transportFeeMonthly: item.transportFeeMonthly,
      examFeeYearly: item.examFeeYearly,
      admissionFee: item.admissionFee,
      booksFee: item.booksFee,
      idCardFee: item.idCardFee,
      activityFee: item.activityFee,
    });
    setEditOpen(true);
  };

  const handleEditClose = () => {
    editReset();
    setSelectedItem(null);
    setEditOpen(false);
  };

  const onEdit = async (formData) => {
    setIsLoading(true);
    const promise = fetch("/api/fee_structure/EditFeeStructure", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, id: selectedItem.id }),
    }).then(async (res) => {
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Process Interrupted');
      return result;
    });

    toast.promise(promise, {
      loading: 'Editing fee structure...',
      success: 'Updated successfully!',
      error: (err) => `Error: ${err.message}`,
    }).then(() => {
      handleEditClose();
      refreshData();
    }).catch(() => { }).finally(() => setIsLoading(false));
  };

  // Add handlers
  const handleAddClose = () => {
    addReset();
    setAddOpen(false);
  };

  const onAdd = async (formData) => {
    setIsLoading(true);
    const promise = fetch("/api/fee_structure/AddFeeStructure", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(async (res) => {
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Process failed');
      return result;
    });

    toast.promise(promise, {
      loading: 'Adding fee structure...',
      success: 'Fee Structure Added Successfully!',
      error: (err) => `Error: ${err.message}`,
    }).then(() => {
      handleAddClose();
      refreshData();
    }).catch(() => { }).finally(() => setIsLoading(false));
  };

  // Delete handlers
  const onDelete = async () => {
    const promise = fetch("/api/fee_structure/DeleteFeeStructure", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: selectedItem.id }),
    }).then(async (res) => {
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Delete failed');
      return result;
    });

    toast.promise(promise, {
      loading: 'Deleting...',
      success: 'Deleted successfully!',
      error: (err) => `Error: ${err.message}`,
    }).then(() => {
      setDeleteOpen(false);
      setSelectedItem(null);
      refreshData();
    }).catch(() => { });
  };

  // Quick Setup handlers
  const onQuickSetupSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const checkRes = await fetch("/api/fee_structure/CheckYear", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ academicYear: formData.academicYear }),
      });
      const checkResult = await checkRes.json();

      if (!checkRes.ok) throw new Error(checkResult.error || 'Check failed');

      if (checkResult.isComplete) {
        toast.error(`Fee structure for ${formData.academicYear} is already complete`);
        setIsLoading(false);
        return;
      }

      if (checkResult.isEmpty) {
        await runQuickSetup(formData, 'skip');
      } else {
        setPendingFormData(formData);
        setConflictData({
          existingClasses: checkResult.existingClasses,
          missingClasses: checkResult.missingClasses,
        });
        setQuickSetupOpen(false);
        setConflictOpen(true);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(error.message || 'Something went wrong');
      setIsLoading(false);
    }
  };

  const runQuickSetup = async (formData, mode) => {
    setIsLoading(true);
    const promise = fetch("/api/fee_structure/QuickSetup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, mode }),
    }).then(async (res) => {
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Quick setup failed');
      return result;
    });

    toast.promise(promise, {
      loading: 'Setting up fee structure...',
      success: 'Quick setup completed!',
      error: (err) => `Error: ${err.message}`,
    }).then(() => {
      resetQuickSetupState();
      refreshData();
    }).catch(() => { }).finally(() => setIsLoading(false));
  };

  return (
    <div className='flex flex-col w-full h-full p-3 sm:p-6 space-y-4 sm:space-y-6'>

      {/* Header */}
      <header className='bg-white border-b border-gray-100 rounded-2xl shadow-md w-full flex flex-col sm:flex-row justify-between px-4 sm:px-8 py-4 gap-4 items-start sm:items-center'>
        <div className='flex items-center gap-3'>
          <span className='font-bold text-sm sm:text-base whitespace-nowrap'>Academic year:</span>
          <Select.Root value={selectedYear} onValueChange={(val) => setSelectedYear(val)}>
            <Select.Trigger />
            <Select.Content>
              {academic_years.map(item => (
                <Select.Item key={item} value={item}>{item}</Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>
        <div className='flex flex-wrap gap-2'>
          <Button variant='soft' size="2" onClick={() => setCopyOpen(true)}><Copy size={16} /><span className='ml-1'>Copy Year</span></Button>
          <Button variant='outline' size="2" onClick={() => setQuickSetupOpen(true)}><Zap size={16} /><span className='ml-1'>Quick Setup</span></Button>
          <Button onClick={() => setAddOpen(true)} size="2"><Plus size={16} /><span className='ml-1'>Add Manually</span></Button>
        </div>
      </header>

      {/* Table */}
      <div className='w-full overflow-x-auto rounded-xl'>
        {filteredData.length === 0 && !isPending ? (
          <div className='flex flex-col items-center justify-center py-16 text-gray-400 gap-2'>
            <span className='text-4xl'>🚫</span>
            <span className='text-sm'>No fee structure found for {selectedYear}</span>
          </div>
        ) : (
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Class</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Tuition/mo</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Transport/mo</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Exam/yr</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Admission</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Id Card</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Books</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Activity</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {isPending ? (
                <SkeletonRows count={filteredData.length || 8} />
              ) : (
                filteredData.map(item => (
                  <Table.Row key={item.id}>
                    <Table.RowHeaderCell>{item.class}</Table.RowHeaderCell>
                    <Table.Cell>{"₹" + item.tuitionFeeMonthly}</Table.Cell>
                    <Table.Cell>{"₹" + item.transportFeeMonthly}</Table.Cell>
                    <Table.Cell>{"₹" + item.examFeeYearly}</Table.Cell>
                    <Table.Cell>{"₹" + item.admissionFee}</Table.Cell>
                    <Table.Cell>{"₹" + item.idCardFee}</Table.Cell>
                    <Table.Cell>{"₹" + item.booksFee}</Table.Cell>
                    <Table.Cell>{"₹" + item.activityFee}</Table.Cell>
                    <Table.Cell className='flex gap-3 items-center'>
                      <Button variant='ghost' onClick={() => handleEditOpen(item)}>
                        <SquarePen size={18} />
                      </Button>
                      <Button color="red" variant='ghost' onClick={() => { setSelectedItem(item); setDeleteOpen(true); }}>
                        <Trash size={18} />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))
              )}
            </Table.Body>
          </Table.Root>
        )}
      </div>

      {/* Copy Year Dialog */}
      <Dialog.Root open={copyOpen} onOpenChange={(val) => { if (!val) resetCopyState(); }}>
        <Dialog.Content size="3" style={{ maxWidth: 560 }}>
          <Dialog.Title>📋 Copy Fee Structure to New Year</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Copy all fee structures from <strong>{selectedYear}</strong> to a new academic year with an optional fee increase.
          </Dialog.Description>

          <Flex direction="column" gap="4">
            <div className="grid grid-cols-2 gap-4">
              <InputField label="Copy FROM Year">
                <input
                  type="text"
                  value={selectedYear}
                  readOnly
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed outline-none"
                />
              </InputField>
              <InputField label="Copy TO Year *" error={copyToYearError ? { message: copyToYearError } : null}>
                <input
                  type="text"
                  value={copyToYear}
                  onChange={(e) => { setCopyToYear(e.target.value); setCopyToYearError(''); }}
                  placeholder="e.g. 2026-2027"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </InputField>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Apply Fee Increase <span className="text-gray-400 font-normal">(Optional)</span></p>
              <p className="text-xs text-gray-500 mb-3">Increase all fees by:</p>
              <div className="flex flex-wrap gap-2">
                {[0, 5, 10].map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => { setIncreasePercent(pct); setCustomPercent(''); }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                      increasePercent === pct && increasePercent !== 'custom'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {pct === 0 ? '0% — No change' : pct === 5 ? '5% — Moderate' : '10% — Standard'}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setIncreasePercent('custom')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                    increasePercent === 'custom'
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
                  }`}
                >
                  Custom — ...
                </button>
              </div>
              {increasePercent === 'custom' && (
                <input
                  type="number"
                  value={customPercent}
                  onChange={(e) => setCustomPercent(e.target.value)}
                  placeholder="Enter custom % e.g. 7.5"
                  className="mt-2 w-40 px-3 py-2 border-2 border-blue-400 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none text-sm"
                />
              )}
            </div>

            {filteredData.length > 0 && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <p className="text-xs font-semibold text-gray-600 mb-2">
                  Preview of changes ({getEffectivePercent()}% increase):
                </p>
                <div className="space-y-1">
                  {previewItems.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-medium text-green-700">
                        ₹{item.old.toLocaleString()} → ₹{item.new.toLocaleString()}
                      </span>
                    </div>
                  ))}
                  {filteredData.length > 3 && (
                    <p className="text-xs text-gray-400 mt-1">... and {filteredData.length - 3} more classes</p>
                  )}
                </div>
              </div>
            )}

            <Callout.Root color="blue" size="1">
              <Callout.Icon><Info size={14} /></Callout.Icon>
              <Callout.Text>
                {filteredData.length} fee structures from {selectedYear} will be copied to {copyToYear || '...'}.
                <br />Existing records for {copyToYear || '...'} (if any) will NOT be overwritten.
              </Callout.Text>
            </Callout.Root>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Button variant="soft" color="gray" disabled={isLoading} onClick={resetCopyState}>Cancel</Button>
            <Button onClick={onCopySubmit} disabled={isLoading || filteredData.length === 0} loading={isLoading}>
              <Copy size={16} /> Copy Now
            </Button>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>

      {/* Copy Year Conflict Dialog */}
      <AlertDialog.Root open={copyConflictOpen} onOpenChange={setCopyConflictOpen}>
        <AlertDialog.Content maxWidth="500px">
          <AlertDialog.Title>Fee Structure Conflict</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Some classes already exist for <strong>{pendingCopyData?.toYear}</strong>.
          </AlertDialog.Description>

          <div className='mt-3 space-y-2'>
            {copyConflictData.existingClasses.length > 0 && (
              <Callout.Root color="orange" size="1">
                <Callout.Icon><Info size={16} /></Callout.Icon>
                <Callout.Text>Already exist: Class {copyConflictData.existingClasses.join(', ')}</Callout.Text>
              </Callout.Root>
            )}
            {copyConflictData.missingClasses.length > 0 && (
              <Callout.Root color="blue" size="1">
                <Callout.Icon><Info size={16} /></Callout.Icon>
                <Callout.Text>Will be copied: Class {copyConflictData.missingClasses.join(', ')}</Callout.Text>
              </Callout.Root>
            )}
          </div>

          <Flex gap="3" mt="4" justify="end" wrap="wrap">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray" onClick={resetCopyState}>Abort</Button>
            </AlertDialog.Cancel>
            <Button variant="outline" color="blue" disabled={isLoading} loading={isLoading} onClick={() => runCopy(pendingCopyData, 'skip')}>
              Skip Existing
            </Button>
            <Button color="red" disabled={isLoading} loading={isLoading} onClick={() => runCopy(pendingCopyData, 'override')}>
              Override All
            </Button>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

      {/* Quick Setup Dialog */}
      <Dialog.Root open={quickSetupOpen} onOpenChange={(val) => { if (!val) resetQuickSetupState(); }}>
        <Dialog.Content size="4">
          <Dialog.Title>Quick Setup</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Set same fee values for all 12 classes for a specific academic year.
          </Dialog.Description>
          <Flex direction="column" gap="3">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>

              <InputField label="Academic Year" error={quickErrors.academicYear} required>
                <input type="text" {...quickRegister("academicYear")} placeholder="e.g. 2026-2027" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>

              <InputField label="Tuition Monthly Fee" error={quickErrors.tuitionFeeMonthly} required>
                <input type="number" {...quickRegister("tuitionFeeMonthly", { valueAsNumber: true })} placeholder="Enter tuition monthly fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>

              <InputField label="Transport Monthly Fee" error={quickErrors.transportFeeMonthly} required>
                <input type="number" {...quickRegister("transportFeeMonthly", { valueAsNumber: true })} placeholder="Enter transport monthly fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>

              <InputField label="Exam Yearly Fee" error={quickErrors.examFeeYearly} required>
                <input type="number" {...quickRegister("examFeeYearly", { valueAsNumber: true })} placeholder="Enter exam yearly fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>

              <InputField label="Admission One-Time Fee" error={quickErrors.admissionFee} required>
                <input type="number" {...quickRegister("admissionFee", { valueAsNumber: true })} placeholder="Enter admission one-time fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>

              <InputField label="Book Fee" error={quickErrors.booksFee} required>
                <input type="number" {...quickRegister("booksFee", { valueAsNumber: true })} placeholder="Enter book fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>

              <InputField label="ID Card Fee" error={quickErrors.idCardFee} required>
                <input type="number" {...quickRegister("idCardFee", { valueAsNumber: true })} placeholder="Enter ID card fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>

              <InputField label="Activity Fee" error={quickErrors.activityFee} required>
                <input type="number" {...quickRegister("activityFee", { valueAsNumber: true })} placeholder="Enter activity fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>

            </div>
          </Flex>
          <Flex gap="3" mt="4" justify="end">
            <Button variant="soft" color="gray" disabled={isLoading} onClick={resetQuickSetupState}>Cancel</Button>
            <Button onClick={quickHandleSubmit(onQuickSetupSubmit)} disabled={isLoading} loading={isLoading}>
              <Zap size={16} /> Next
            </Button>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>

      {/* Conflict Dialog */}
      <AlertDialog.Root open={conflictOpen} onOpenChange={setConflictOpen}>
        <AlertDialog.Content maxWidth="500px">
          <AlertDialog.Title>Fee Structure Conflict</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Some classes already exist for <strong>{pendingFormData?.academicYear}</strong>.
          </AlertDialog.Description>

          <div className='mt-3 space-y-2'>
            {conflictData.existingClasses.length > 0 && (
              <Callout.Root color="orange" size="1">
                <Callout.Icon><Info size={16} /></Callout.Icon>
                <Callout.Text>Already exist: Class {conflictData.existingClasses.join(', ')}</Callout.Text>
              </Callout.Root>
            )}
            {conflictData.missingClasses.length > 0 && (
              <Callout.Root color="blue" size="1">
                <Callout.Icon><Info size={16} /></Callout.Icon>
                <Callout.Text>Missing: Class {conflictData.missingClasses.join(', ')}</Callout.Text>
              </Callout.Root>
            )}
          </div>

          <Flex gap="3" mt="4" justify="end" wrap="wrap">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray" onClick={resetQuickSetupState}>
                Abort
              </Button>
            </AlertDialog.Cancel>
            <Button variant="outline" color="blue" disabled={isLoading} loading={isLoading} onClick={() => runQuickSetup(pendingFormData, 'skip')}>
              Skip Existing
            </Button>
            <Button color="red" disabled={isLoading} loading={isLoading} onClick={() => runQuickSetup(pendingFormData, 'override')}>
              Override All
            </Button>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

      {/* Add Manually Dialog */}
      <Dialog.Root open={addOpen} onOpenChange={(val) => { if (!val) handleAddClose(); }}>
        <Dialog.Content size="4">
          <Dialog.Title>Add Fee Structure</Dialog.Title>
          <Dialog.Description size="2" mb="4">Add fee structure for a specific class and academic year.</Dialog.Description>
          <Flex direction="column" gap="3">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>

              <InputField label="Class" error={addErrors.class} required>
                <Controller name="class" control={addControl} render={({ field }) => (
                  <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                    <Select.Trigger className="w-full" placeholder="Select class" />
                    <Select.Content>
                      <Select.Group>
                        <Select.Label>Select Class</Select.Label>
                        {Array.from({ length: 12 }, (_, i) => (
                          <Select.Item key={i + 1} value={String(i + 1)}>Class {i + 1}</Select.Item>
                        ))}
                      </Select.Group>
                    </Select.Content>
                  </Select.Root>
                )} />
              </InputField>

              <InputField label="Academic Year" error={addErrors.academicYear} required>
                <input type="text" {...addRegister("academicYear")} placeholder="e.g. 2026-2027" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>

              <InputField label="Tuition Monthly Fee" error={addErrors.tuitionFeeMonthly} required>
                <input type="number" {...addRegister("tuitionFeeMonthly", { valueAsNumber: true })} placeholder="Enter tuition monthly fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>

              <InputField label="Transport Monthly Fee" error={addErrors.transportFeeMonthly} required>
                <input type="number" {...addRegister("transportFeeMonthly", { valueAsNumber: true })} placeholder="Enter transport monthly fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>

              <InputField label="Exam Yearly Fee" error={addErrors.examFeeYearly} required>
                <input type="number" {...addRegister("examFeeYearly", { valueAsNumber: true })} placeholder="Enter exam yearly fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>

              <InputField label="Admission One-Time Fee" error={addErrors.admissionFee} required>
                <input type="number" {...addRegister("admissionFee", { valueAsNumber: true })} placeholder="Enter admission one-time fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>

              <InputField label="Book Fee" error={addErrors.booksFee} required>
                <input type="number" {...addRegister("booksFee", { valueAsNumber: true })} placeholder="Enter book fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>

              <InputField label="ID Card Fee" error={addErrors.idCardFee} required>
                <input type="number" {...addRegister("idCardFee", { valueAsNumber: true })} placeholder="Enter ID card fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>

              <InputField label="Activity Fee" error={addErrors.activityFee} required>
                <input type="number" {...addRegister("activityFee", { valueAsNumber: true })} placeholder="Enter activity fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>

            </div>
          </Flex>
          <Flex gap="3" mt="4" justify="end">
            <Button variant="soft" color="gray" disabled={isLoading} onClick={handleAddClose}>Cancel</Button>
            <Button onClick={addHandleSubmit(onAdd)} disabled={isLoading} loading={isLoading}>Add</Button>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>

      {/* Edit Dialog */}
      <Dialog.Root open={editOpen} onOpenChange={(val) => { if (!val) handleEditClose(); }}>
        <Dialog.Content size="4">
          <Dialog.Title>Edit Fee Structure</Dialog.Title>
          <Dialog.Description size="2" mb="4">Make changes to class Fee Structure.</Dialog.Description>
          <Flex direction="column" gap="3">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <InputField label="Tuition Monthly Fee" error={editErrors.tuitionFeeMonthly} required>
                <input type="number" {...editRegister("tuitionFeeMonthly", { valueAsNumber: true })} placeholder="Enter tuition monthly fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>
              <InputField label="Transport Monthly Fee" error={editErrors.transportFeeMonthly} required>
                <input type="number" {...editRegister("transportFeeMonthly", { valueAsNumber: true })} placeholder="Enter transport monthly fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>
              <InputField label="Exam Yearly Fee" error={editErrors.examFeeYearly} required>
                <input type="number" {...editRegister("examFeeYearly", { valueAsNumber: true })} placeholder="Enter exam yearly fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>
              <InputField label="Admission One-Time Fee" error={editErrors.admissionFee} required>
                <input type="number" {...editRegister("admissionFee", { valueAsNumber: true })} placeholder="Enter admission one-time fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>
              <InputField label="Book Fee" error={editErrors.booksFee} required>
                <input type="number" {...editRegister("booksFee", { valueAsNumber: true })} placeholder="Enter book fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>
              <InputField label="ID Card Fee" error={editErrors.idCardFee} required>
                <input type="number" {...editRegister("idCardFee", { valueAsNumber: true })} placeholder="Enter ID card fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>
              <InputField label="Activity Fee" error={editErrors.activityFee} required>
                <input type="number" {...editRegister("activityFee", { valueAsNumber: true })} placeholder="Enter activity fee" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </InputField>
            </div>
          </Flex>
          <Flex gap="3" mt="4" justify="end">
            <Button variant="soft" color="gray" disabled={isLoading} onClick={handleEditClose}>Cancel</Button>
            <Button onClick={editHandleSubmit(onEdit)} disabled={isLoading} loading={isLoading}>Save</Button>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>

      {/* Delete Dialog */}
      <AlertDialog.Root open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Delete this class Fee Structure?</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure? This fee structure will be permanently deleted.
          </AlertDialog.Description>
          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray" onClick={() => setDeleteOpen(false)}>Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red" onClick={onDelete}>Delete</Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

    </div>
  )
}

export default FeeTable
