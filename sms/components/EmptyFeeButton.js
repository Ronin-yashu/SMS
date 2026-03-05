"use client"
import React from 'react'
import { Button, Dialog, Flex } from '@radix-ui/themes'
import { Zap, Plus, FileAxis3d } from 'lucide-react'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import InputField from '@/components/InputField';

const QuickSetupSchema = z.object({
    tuitionFeeMonthly: z.number({ invalid_type_error: 'Tuition monthly fee is required' }).int().positive({ message: 'Must be a positive number' }),
    transportFeeMonthly: z.number({ invalid_type_error: 'Transport fee is required' }).int().positive({ message: 'Must be a positive number' }),
    examFeeYearly: z.number({ invalid_type_error: 'Exam yearly fee is required' }).int().positive({ message: 'Must be a positive number' }),
    admissionFee: z.number({ invalid_type_error: 'Admission fee is required' }).int().positive({ message: 'Must be a positive number' }),
    booksFee: z.number({ invalid_type_error: 'Book fee is required' }).int().positive({ message: 'Must be a positive number' }),
    idCardFee: z.number({ invalid_type_error: 'ID card fee is required' }).int().positive({ message: 'Must be a positive number' }),
    activityFee: z.number({ invalid_type_error: 'Activity fee is required' }).int().positive({ message: 'Must be a positive number' }),
});

const EmptyFeeButton = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(QuickSetupSchema),
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

    const handleClose = () => {
        reset();
        setOpen(false);
    };

    const onSubmit = async (data) => {
        setIsLoading(true);

        const promise = fetch("/api/fee_structure/QuickSetup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(async (res) => {
            const result = await res.json();
            if (!res.ok) throw new Error(result.error || 'Quick setup failed');
            return result;
        });

        toast.promise(promise, {
            loading: 'Setting up fee structure...',
            success: 'Quick setup completed successfully!',
            error: (err) => `Error: ${err.message}`,
        }).then(() => {
            handleClose();
        }).catch(() => {
            // keep dialog open so user can fix
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className='flex items-center justify-center gap-6 mt-8'>

            <Dialog.Root open={open} onOpenChange={(val) => {
                if (!val) handleClose();
                else setOpen(true);
            }}>
                <Dialog.Trigger>
                    <Button onClick={() => setOpen(true)}>
                        <Zap size={18} className='mr-2' />
                        Quick Setup
                    </Button>
                </Dialog.Trigger>

                <Dialog.Content size="4">
                    <Dialog.Title>Quick Setup</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Set base monthly fee for all classes and add transport fee.
                        You can edit the fee structure for each class later.
                    </Dialog.Description>

                    <Flex direction="column" gap="3">

                        <div className='flex justify-center items-center gap-6'>
                            <InputField label="Tuition Monthly Fee" error={errors.tutionMonthlyFee} required>
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
                        </div>

                        <div className='flex justify-center items-center gap-6'>
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
                        </div>

                        <div className='flex justify-center items-center gap-6'>
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
                        <Button onClick={handleClose} variant="soft" color="gray" disabled={isLoading}>
                            Cancel
                        </Button>
                        <Button onClick={handleSubmit(onSubmit)} disabled={isLoading} loading={isLoading}>
                            Save
                        </Button>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>

            <Dialog.Root>
                <Dialog.Trigger>
                    <Button variant='soft'>
                        <Plus size={18} className='mr-2' />
                        Add Manually
                    </Button>
                </Dialog.Trigger>

                <Dialog.Content maxWidth="450px">
                    <Dialog.Title>Add Manually</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Coming soon.
                    </Dialog.Description>
                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">Cancel</Button>
                        </Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>

            <Dialog.Root>
                <Dialog.Trigger>
                    <Button variant='outline'>
                        <FileAxis3d size={18} className='mr-2' />
                        Import from CSV
                    </Button>
                </Dialog.Trigger>

                <Dialog.Content maxWidth="450px">
                    <Dialog.Title>Import from CSV</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Coming soon.
                    </Dialog.Description>
                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">Cancel</Button>
                        </Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>

        </div>
    );
};

export default EmptyFeeButton;
