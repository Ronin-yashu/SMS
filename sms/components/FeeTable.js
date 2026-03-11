"use client"
import React from 'react'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import InputField from '@/components/InputField';
import { useRouter } from 'next/navigation';
import { Select, Button, Table, Dialog, Flex, Text, TextField, AlertDialog } from '@radix-ui/themes'
import { Zap, Plus, FileAxis3d, SquarePen, Trash } from 'lucide-react'

const EditFeeStructure = z.object({
  tuitionFeeMonthly: z.number({ invalid_type_error: 'Tuition fee is required' }).int().positive({ message: 'Must be a positive number' }),
  transportFeeMonthly: z.number({ invalid_type_error: 'Transport fee is required' }).int().positive({ message: 'Must be a positive number' }),
  examFeeYearly: z.number({ invalid_type_error: 'Exam yearly fee is required' }).int().positive({ message: 'Must be a positive number' }),
  admissionFee: z.number({ invalid_type_error: 'Admission fee is required' }).int().positive({ message: 'Must be a positive number' }),
  booksFee: z.number({ invalid_type_error: 'Book fee is required' }).int().positive({ message: 'Must be a positive number' }),
  idCardFee: z.number({ invalid_type_error: 'ID card fee is required' }).int().positive({ message: 'Must be a positive number' }),
  activityFee: z.number({ invalid_type_error: 'Activity fee is required' }).int().positive({ message: 'Must be a positive number' }),
});

const FeeTable = ({ data, academic_years }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedYear, setSelectedYear] = React.useState(academic_years?.[0] || '');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(EditFeeStructure),
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
  const filteredData = data.filter(item => item.academicYear === selectedYear);
  const router = useRouter();

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);

    const promise = fetch("/api/fee_structure/EditFeeStructure", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(async (res) => {
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Process Intreputed');
      return result;
    });

    toast.promise(promise, {
      loading: 'Editing fee structure...',
      success: 'Process completed successfully!',
      error: (err) => `Error: ${err.message}`,
    }).then(() => {
      handleClose();
      router.refresh();
    }).catch(() => {
      // keep dialog open
    }).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className='flex flex-col w-full h-full p-3 sm:p-6 space-y-4 sm:space-y-6'>

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
          <Button variant='soft' size="2">
            <FileAxis3d size={16} />
            <span className='ml-1'>Copy Year</span>
          </Button>
          <Button variant='outline' size="2">
            <Zap size={16} />
            <span className='ml-1'>Quick Setup</span>
          </Button>
          <Button size="2">
            <Plus size={16} />
            <span className='ml-1'>Add Fee Structure</span>
          </Button>
        </div>
      </header>

      <div className='w-full overflow-x-auto rounded-xl'>
        {filteredData.length === 0 ? (
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
              {filteredData.map(item => (
                <Table.Row key={item.id}>
                  <Table.RowHeaderCell>{item.class}</Table.RowHeaderCell>
                  <Table.Cell>{"₹" + item.tuitionFeeMonthly}</Table.Cell>
                  <Table.Cell>{"₹" + item.transportFeeMonthly}</Table.Cell>
                  <Table.Cell>{"₹" + item.examFeeYearly}</Table.Cell>
                  <Table.Cell>{"₹" + item.admissionFee}</Table.Cell>
                  <Table.Cell>{"₹" + item.idCardFee}</Table.Cell>
                  <Table.Cell>{"₹" + item.booksFee}</Table.Cell>
                  <Table.Cell>{"₹" + item.activityFee}</Table.Cell>
                  <Table.Cell className='gap-4 flex justify-start items-center'>

                    <Dialog.Root open={open} onOpenChange={(val) => {
                      if (!val) handleClose();
                      else setOpen(true);
                    }}>
                      <Dialog.Trigger>
                        <Button variant='ghost' onClick={() => setOpen(true)}>
                          <SquarePen size={18} />
                        </Button>
                      </Dialog.Trigger>

                      <Dialog.Content size={4}>
                        <Dialog.Title>Edit Fee Structure</Dialog.Title>
                        <Dialog.Description size="2" mb="4">
                          Make changes to class Fee Structure.
                        </Dialog.Description>

                        <Flex direction="column" gap="3">
                          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                            <InputField label="Tuition Monthly Fee" error={errors.tuitionFeeMonthly} required>
                              <input
                                type="number"
                                {...register("tuitionFeeMonthly", { valueAsNumber: true })}
                                placeholder="Enter tuition monthly fee"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                              />
                            </InputField>

                            <InputField label="Transport Monthly Fee" error={errors.transportFeeMonthly} required>
                              <input
                                type="number"
                                {...register("transportFeeMonthly", { valueAsNumber: true })}
                                placeholder="Enter transport monthly fee"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                              />
                            </InputField>

                            <InputField label="Exam Yearly Fee" error={errors.examFeeYearly} required>
                              <input
                                type="number"
                                {...register("examFeeYearly", { valueAsNumber: true })}
                                placeholder="Enter exam yearly fee"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                              />
                            </InputField>

                            <InputField label="Admission One-Time Fee" error={errors.admissionFee} required>
                              <input
                                type="number"
                                {...register("admissionFee", { valueAsNumber: true })}
                                placeholder="Enter admission one-time fee"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                              />
                            </InputField>

                            <InputField label="Book Fee" error={errors.booksFee} required>
                              <input
                                type="number"
                                {...register("booksFee", { valueAsNumber: true })}
                                placeholder="Enter book fee"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                              />
                            </InputField>

                            <InputField label="ID Card Fee" error={errors.idCardFee} required>
                              <input
                                type="number"
                                {...register("idCardFee", { valueAsNumber: true })}
                                placeholder="Enter ID card fee"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                              />
                            </InputField>

                            <InputField label="Activity Fee" error={errors.activityFee} required>
                              <input
                                type="number"
                                {...register("activityFee", { valueAsNumber: true })}
                                placeholder="Enter activity fee"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                              />
                            </InputField>
                          </div>
                        </Flex>

                        <Flex gap="3" mt="4" justify="end">
                          <Button variant="soft" color="gray" disabled={isLoading} onClick={handleClose}>
                            Cancel
                          </Button>
                          <Button onClick={handleSubmit(onSubmit)} disabled={isLoading} loading={isLoading}>
                            Save
                          </Button>
                        </Flex>

                      </Dialog.Content>
                    </Dialog.Root>

                    <AlertDialog.Root >
                      <AlertDialog.Trigger >
                        <Button color="red" variant='ghost'>
                          <Trash size={18} />
                        </Button>
                      </AlertDialog.Trigger>
                      <AlertDialog.Content maxWidth="450px">
                        <AlertDialog.Title>Delete this class Fee Structure ? </AlertDialog.Title>
                        <AlertDialog.Description size="2">
                          Are you sure? This application will no longer be accessible and any
                          existing sessions will be expired.
                        </AlertDialog.Description>

                        <Flex gap="3" mt="4" justify="end">
                          <AlertDialog.Cancel>
                            <Button variant="soft" color="gray">
                              Cancel
                            </Button>
                          </AlertDialog.Cancel>
                          <AlertDialog.Action>
                            <Button variant="solid" color="red">
                              Delete
                            </Button>
                          </AlertDialog.Action>
                        </Flex>
                      </AlertDialog.Content>
                    </AlertDialog.Root>

                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        )}
      </div>

    </div>
  )
}

export default FeeTable
