"use client"
import React from 'react'
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import { Zap, Plus, FileAxis3d } from 'lucide-react'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import InputField from '@/components/InputField';

const QuickSetupSchema = z.object({
    baseMonthlyFee: z.int().optional(),
    transportMonthlyFee: z.int().optional(),
    examYearlyFee: z.int().optional(),
    admissionOneTimeFee: z.int().optional(),
    bookFee: z.int().optional(),
    idCardFee: z.int().optional(),
    activityFee: z.int().optional(),
})


const EmptyFeeButton = () => {
    const [isLoading, setIsLoading] = React.useState(false);

    const { register, handleSubmit, control, formState: { errors }, setError, clearErrors, getValues, reset } = useForm({
        resolver: zodResolver(QuickSetupSchema),
        mode: 'onSubmit',
        defaultValues: {
            baseMonthlyFee: '',
            transportMonthlyFee: '',
            examYearlyFee: '',
            admissionOneTimeFee: '',
            bookFee: '',
            idCardFee: '',
            activityFee: '',
        }
    });

    const validateData = (data) => {
        clearErrors();
        let isValid = true;

        if (!data.baseMonthlyFee || data.baseMonthlyFee < 0) {
            setError('baseMonthlyFee', { message: 'Base monthly fee must be a positive number' });
            isValid = false;
        }
        if (!data.transportMonthlyFee || data.transportMonthlyFee < 0) {
            setError('transportMonthlyFee', { message: 'Transport monthly fee must be a positive number' });
            isValid = false;
        }
        if (!data.examYearlyFee || data.examYearlyFee < 0) {
            setError('examYearlyFee', { message: 'Exam yearly fee must be a positive number' });
            isValid = false;
        }
        if (!data.admissionOneTimeFee || data.admissionOneTimeFee < 0) {
            setError('admissionOneTimeFee', { message: 'Admission one-time fee must be a positive number' });
            isValid = false;
        }
        if (!data.bookFee || data.bookFee < 0) {
            setError('bookFee', { message: 'Book fee must be a positive number' });
            isValid = false;
        }
        if (!data.idCardFee || data.idCardFee < 0) {
            setError('idCardFee', { message: 'ID card fee must be a positive number' });
            isValid = false;
        }
        if (!data.activityFee || data.activityFee < 0) {
            setError('activityFee', { message: 'Activity fee must be a positive number' });
            isValid = false;
        }
        return isValid;
    };

    const onSubmit = async (data) => {
        const isValid = validateData(data);
        if (!isValid) {
            return;
        } else {
            setIsLoading(true);
            const Quick_setup_Promise = new Promise(async (resolve, reject) => {
                try {
                    const response = await fetch("/api/fee_structure/QuickSetup", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    });

                    const result = await response.json();

                    if (response.ok) {
                        resolve(result);
                    } else {
                        reject(new Error(result.error || 'Quick setup failed'));
                    }
                } catch (error) {
                    reject(error);
                }
            });
            toast.promise(
                Quick_setup_Promise,
                {
                    loading: 'Submitting your data...',
                    success: 'Quick setup completed successfully!',
                    error: (err) => `Error: ${err.message}`,
                }
            ).then(() => {
                setTimeout(() => {
                    reset();
                    setIsLoading(false);
                }, 2000);
            }).catch((error) => {
                console.error('Quick setup error:', error);
                setIsLoading(false);
            });
        }
    };

    return (
        <div className='flex items-center justify-center gap-6 mt-8'>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Button>
                        <Zap size={18} className='mr-2' />
                        Quick Setup
                    </Button>
                </Dialog.Trigger>

                <Dialog.Content size="4">
                    <Dialog.Title>Quick Setup</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Set base monthly fee for all classes and add transport fee. You can edit fee structure for each class later.
                    </Dialog.Description>

                    <Flex direction="column" gap="3">

                        <div className='flex justify-center items-center gap-6'>
                            <InputField label="Monthly Fee" error={errors.baseMonthlyFee}>
                                <input
                                    type="number"
                                    {...register("baseMonthlyFee", { valueAsNumber: true })}
                                    placeholder="Enter base monthly fee"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                />
                            </InputField>
                            <InputField label="Transport Monthly Fee" error={errors.transportMonthlyFee}>
                                <input
                                    type="number"
                                    {...register("transportMonthlyFee", { valueAsNumber: true })}
                                    placeholder="Enter transport monthly fee"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                />
                            </InputField>
                            <InputField label="Exam Yearly Fee" error={errors.examYearlyFee}>
                                <input
                                    type="number"
                                    {...register("examYearlyFee", { valueAsNumber: true })}
                                    placeholder="Enter exam yearly fee"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                />
                            </InputField>
                        </div>

                        <div className='flex justify-center items-center gap-6'>
                            <InputField label="Admission One-Time Fee" error={errors.admissionOneTimeFee}>
                                <input
                                    type="number"
                                    {...register("admissionOneTimeFee", { valueAsNumber: true })}
                                    placeholder="Enter admission one-time fee"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                />
                            </InputField>
                            <InputField label="Book Fee" error={errors.bookFee}>
                                <input
                                    type="number"
                                    {...register("bookFee", { valueAsNumber: true })}
                                    placeholder="Enter book fee"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                />
                            </InputField>
                            <InputField label="Id Card Fee" error={errors.idCardFee}>
                                <input
                                    type="number"
                                    {...register("idCardFee", { valueAsNumber: true })}
                                    placeholder="Enter id card fee"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                />
                            </InputField>
                        </div>

                        <div className='flex justify-center items-center gap-6'>
                            <InputField label="Activity Fee" error={errors.activityFee}>
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
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                            <Button onClick={handleSubmit(onSubmit)} disabled={isLoading}>
                                Save
                            </Button>
                        </Dialog.Close>
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
                    <Dialog.Title>Edit profile</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Make changes to your profile.
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Name
                            </Text>
                            <TextField.Root
                                defaultValue="Freja Johnsen"
                                placeholder="Enter your full name"
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Email
                            </Text>
                            <TextField.Root
                                defaultValue="freja@example.com"
                                placeholder="Enter your email"
                            />
                        </label>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                            <Button>Save</Button>
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
                    <Dialog.Title>Edit profile</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Make changes to your profile.
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Name
                            </Text>
                            <TextField.Root
                                defaultValue="Freja Johnsen"
                                placeholder="Enter your full name"
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Email
                            </Text>
                            <TextField.Root
                                defaultValue="freja@example.com"
                                placeholder="Enter your email"
                            />
                        </label>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                            <Button>Save</Button>
                        </Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
        </div>
    )
}

export default EmptyFeeButton
