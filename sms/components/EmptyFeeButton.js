"use client"
import React from 'react'
import { Button, Dialog, Flex, Select } from '@radix-ui/themes'
import { Zap, Plus, FileAxis3d } from 'lucide-react'
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import InputField from '@/components/InputField';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

const currentYear = new Date().getFullYear();
const defaultAcademicYear = `${currentYear}-${currentYear + 1}`;

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

const EmptyFeeButton = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [quickOpen, setQuickOpen] = React.useState(false);
    const [addOpen, setAddOpen] = React.useState(false);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

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

    // Add Manually form
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

    const refreshData = () => {
        startTransition(() => router.refresh());
    };

    const handleQuickClose = () => {
        quickReset();
        setQuickOpen(false);
    };

    const handleAddClose = () => {
        addReset();
        setAddOpen(false);
    };

    const onQuickSubmit = async (data) => {
        setIsLoading(true);
        const promise = fetch("/api/fee_structure/QuickSetup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...data, mode: 'skip' }),
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
            handleQuickClose();
            refreshData();
        }).catch(() => { }).finally(() => setIsLoading(false));
    };

    const onAdd = async (data) => {
        setIsLoading(true);
        const promise = fetch("/api/fee_structure/AddFeeStructure", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(async (res) => {
            const result = await res.json();
            if (!res.ok) throw new Error(result.error || 'Failed to add');
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

    return (
        <div className='flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 w-full px-4'>

            {/* Quick Setup Dialog */}
            <Dialog.Root open={quickOpen} onOpenChange={(val) => { if (!val) handleQuickClose(); }}>
                <Dialog.Trigger className='w-full sm:w-auto'>
                    <Button onClick={() => setQuickOpen(true)} className='w-full sm:w-auto'>
                        <Zap size={18} className='mr-2' />
                        Quick Setup
                    </Button>
                </Dialog.Trigger>
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
                        <Button variant="soft" color="gray" disabled={isLoading} onClick={handleQuickClose}>Cancel</Button>
                        <Button onClick={quickHandleSubmit(onQuickSubmit)} disabled={isLoading} loading={isLoading}>
                            <Zap size={16} /> Setup
                        </Button>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>

            {/* Add Manually Dialog */}
            <Dialog.Root open={addOpen} onOpenChange={(val) => { if (!val) handleAddClose(); }}>
                <Dialog.Trigger className='w-full sm:w-auto'>
                    <Button variant='soft' onClick={() => setAddOpen(true)} className='w-full sm:w-auto'>
                        <Plus size={18} className='mr-2' />
                        Add Manually
                    </Button>
                </Dialog.Trigger>
                <Dialog.Content size="4">
                    <Dialog.Title>Add Fee Structure</Dialog.Title>
                    <Dialog.Description size="2" mb="4">Add fee structure for a specific class and academic year.</Dialog.Description>
                    <Flex direction="column" gap="3">
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>

                            <InputField label="Class" error={addErrors.class} required>
                                <Controller
                                    name="class"
                                    control={addControl}
                                    render={({ field }) => (
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
                                    )}
                                />
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

            {/* Import from CSV - Coming Soon */}
            <Dialog.Root>
                <Dialog.Trigger className='w-full sm:w-auto'>
                    <Button variant='outline' className='w-full sm:w-auto'>
                        <FileAxis3d size={18} className='mr-2' />
                        Import from CSV
                    </Button>
                </Dialog.Trigger>
                <Dialog.Content maxWidth="450px">
                    <Dialog.Title>Import from CSV</Dialog.Title>
                    <Dialog.Description size="2" mb="4">Coming soon.</Dialog.Description>
                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close><Button variant="soft" color="gray">Cancel</Button></Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>

        </div>
    );
};

export default EmptyFeeButton;