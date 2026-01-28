"use client"
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChevronLeft, ChevronRight, Check, Building2, Mail, User, Shield, Settings } from 'lucide-react';
import { Select, Blockquote, CheckboxGroup, RadioCards, Flex, Text, Button } from "@radix-ui/themes";
import Link from 'next/link';

// Combined schema - all fields optional to prevent re-initialization
const formSchema = z.object({
    schoolName: z.string().optional(),
    schoolType: z.string().optional(),
    boardAffiliation: z.string().optional(),
    establishmentYear: z.string().optional(),
    schoolCode: z.string().optional(),
    udiseCode: z.string().optional(),
    schoolCategory: z.string().optional(),
    officialEmail: z.string().optional(),
    landlineNumber: z.string().optional(),
    mobileNumber: z.string().optional(),
    alternativeMobile: z.string().optional(),
    website: z.string().optional(),
    schoolAddress: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    pinCode: z.string().optional(),
    country: z.string().optional(),
    adminName: z.string().optional(),
    adminDesignation: z.string().optional(),
    adminEmail: z.string().optional(),
    adminPassword: z.string().optional(),
    confirmPassword: z.string().optional(),
    adminMobile: z.string().optional(),
    studentStrength: z.string().optional(),
    teachingStaff: z.string().optional(),
    nonTeachingStaff: z.string().optional(),
    totalClasses: z.string().optional(),
    mediumOfInstruction: z.array(z.string()).optional(),
    streamsOffered: z.array(z.string()).optional(),
    plan: z.string().optional(),
    billingCycle: z.string().optional(),
    termsAccepted: z.boolean().optional(),
    privacyAccepted: z.boolean().optional(),
});

const Register = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});
    const totalSteps = 5;

    const { register, handleSubmit, control, formState: { errors }, setError, clearErrors, getValues } = useForm({
        resolver: zodResolver(formSchema),
        mode: 'onSubmit', // Changed to onSubmit to prevent re-renders
        defaultValues: {
            schoolName: '',
            schoolType: 'pre-primary',
            boardAffiliation: 'cbse',
            establishmentYear: '',
            schoolCode: '',
            udiseCode: '',
            schoolCategory: 'private-aided',
            officialEmail: '',
            landlineNumber: '',
            mobileNumber: '',
            alternativeMobile: '',
            website: '',
            schoolAddress: '',
            city: '',
            state: '',
            pinCode: '',
            country: '',
            adminName: '',
            adminDesignation: 'Owner',
            adminEmail: '',
            adminPassword: '',
            confirmPassword: '',
            adminMobile: '',
            studentStrength: '0-100',
            teachingStaff: '',
            nonTeachingStaff: '',
            totalClasses: '',
            mediumOfInstruction: ['English'],
            streamsOffered: ['Science'],
            plan: '1',
            billingCycle: 'monthly',
            termsAccepted: false,
            privacyAccepted: false,
        }
    });

    const validateStep = (data) => {
        clearErrors();
        let isValid = true;

        if (currentStep === 1) {
            if (!data.schoolName || data.schoolName.length < 3) {
                setError('schoolName', { message: 'School name must be at least 3 characters' });
                isValid = false;
            }
            if (!data.schoolType) {
                setError('schoolType', { message: 'Select school type' });
                isValid = false;
            }
            if (!data.boardAffiliation) {
                setError('boardAffiliation', { message: 'Select board affiliation' });
                isValid = false;
            }
            if (!data.establishmentYear || !/^\d{4}$/.test(data.establishmentYear)) {
                setError('establishmentYear', { message: 'Enter valid year' });
                isValid = false;
            }
            if (!data.schoolCode || data.schoolCode.length < 3) {
                setError('schoolCode', { message: 'School Code / Affiliation Number required' });
                isValid = false;
            }
            if (!data.schoolCategory) {
                setError('schoolCategory', { message: 'Select school category' });
                isValid = false;
            }
        } else if (currentStep === 2) {
            if (!data.officialEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.officialEmail)) {
                setError('officialEmail', { message: 'Enter valid email' });
                isValid = false;
            }
            if (!data.mobileNumber || !/^\d{10}$/.test(data.mobileNumber)) {
                setError('mobileNumber', { message: 'Enter valid 10-digit mobile number' });
                isValid = false;
            }
            if (data.website && data.website !== '' && !/^https?:\/\/.+/.test(data.website)) {
                setError('website', { message: 'Enter valid URL' });
                isValid = false;
            }
            if (!data.schoolAddress || data.schoolAddress.length < 5) {
                setError('schoolAddress', { message: 'School address required' });
                isValid = false;
            }
            if (!data.city || data.city.length < 2) {
                setError('city', { message: 'City required' });
                isValid = false;
            }
            if (!data.state || data.state.length < 2) {
                setError('state', { message: 'State required' });
                isValid = false;
            }
            if (!data.pinCode || !/^\d{6}$/.test(data.pinCode)) {
                setError('pinCode', { message: 'Enter valid 6-digit PIN code' });
                isValid = false;
            }
            if (!data.country || data.country.length < 2) {
                setError('country', { message: 'Country required' });
                isValid = false;
            }
        } else if (currentStep === 3) {
            if (!data.adminName || data.adminName.length < 3) {
                setError('adminName', { message: 'Admin name must be at least 3 characters' });
                isValid = false;
            }
            if (!data.adminDesignation) {
                setError('adminDesignation', { message: 'Select designation' });
                isValid = false;
            }
            if (!data.adminEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.adminEmail)) {
                setError('adminEmail', { message: 'Enter valid email' });
                isValid = false;
            }
            if (!data.adminPassword || data.adminPassword.length < 8) {
                setError('adminPassword', { message: 'Password must be at least 8 characters' });
                isValid = false;
            }
            if (!data.confirmPassword || data.confirmPassword.length < 8) {
                setError('confirmPassword', { message: 'Confirm password required' });
                isValid = false;
            }
            if (data.adminPassword !== data.confirmPassword) {
                setError('confirmPassword', { message: "Passwords don't match" });
                isValid = false;
            }
            if (!data.adminMobile || !/^\d{10}$/.test(data.adminMobile)) {
                setError('adminMobile', { message: 'Enter valid 10-digit mobile number' });
                isValid = false;
            }
        } else if (currentStep === 4) {
            if (!data.studentStrength) {
                setError('studentStrength', { message: 'Select student strength' });
                isValid = false;
            }
            if (!data.teachingStaff) {
                setError('teachingStaff', { message: 'Enter number of teaching staff' });
                isValid = false;
            }
            if (!data.nonTeachingStaff) {
                setError('nonTeachingStaff', { message: 'Enter number of non-teaching staff' });
                isValid = false;
            }
            if (!data.totalClasses) {
                setError('totalClasses', { message: 'Enter total classes' });
                isValid = false;
            }
            if (!data.mediumOfInstruction || data.mediumOfInstruction.length === 0) {
                setError('mediumOfInstruction', { message: 'Select at least one medium' });
                isValid = false;
            }
            if (!data.streamsOffered || data.streamsOffered.length === 0) {
                setError('streamsOffered', { message: 'Select at least one stream' });
                isValid = false;
            }
        } else if (currentStep === 5) {
            if (!data.plan) {
                setError('plan', { message: 'Select a plan' });
                isValid = false;
            }
            if (!data.billingCycle) {
                setError('billingCycle', { message: 'Select billing cycle' });
                isValid = false;
            }
            if (!data.termsAccepted) {
                setError('termsAccepted', { message: 'You must accept terms and conditions' });
                isValid = false;
            }
            if (!data.privacyAccepted) {
                setError('privacyAccepted', { message: 'You must accept privacy policy' });
                isValid = false;
            }
        }

        return isValid;
    };

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const onSubmit = async (data) => {
        const isValid = validateStep(data);
        
        if (!isValid) {
            return;
        }

        const allData = { ...formData, ...data };
        setFormData(allData);

        if (currentStep < totalSteps) {
            nextStep();
        } else {
            try {
                const res = await fetch("api/registration", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(allData),
                });
                const result = await res.json();
                console.log(result);
                alert("School registered successfully!");
            } catch (error) {
                console.error("Registration error:", error);
                alert("Registration failed. Please try again.");
            }
        }
    };

    const stepInfo = [
        { number: 1, title: "Basic Details", icon: Building2 },
        { number: 2, title: "Contact Info", icon: Mail },
        { number: 3, title: "Admin Setup", icon: User },
        { number: 4, title: "Infrastructure", icon: Settings },
        { number: 5, title: "Plans & Terms", icon: Shield }
    ];

    const StepIndicator = () => (
        <div className="w-full max-w-4xl mx-auto px-4 mb-12">
            <div className="flex justify-between items-center relative">
                <div className="absolute left-0 top-5 w-full h-1 bg-gray-200 -z-10">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
                        style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                    />
                </div>

                {stepInfo.map((step) => {
                    const Icon = step.icon;
                    return (
                        <div key={step.number} className="flex flex-col items-center">
                            <div className={`
                                w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm
                                transition-all duration-300 transform
                                ${currentStep > step.number ? 'bg-gradient-to-br from-green-400 to-green-600 text-white scale-100 shadow-lg' :
                                currentStep === step.number ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white scale-110 shadow-xl animate-pulse' :
                                'bg-white text-gray-400 border-2 border-gray-300 scale-90'}
                            `}>
                                {currentStep > step.number ? <Check size={20} /> : <Icon size={20} />}
                            </div>
                            <p className={`
                                mt-2 text-xs font-medium text-center hidden sm:block transition-colors duration-300
                                ${currentStep >= step.number ? 'text-gray-700' : 'text-gray-400'}
                            `}>
                                {step.title}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    const InputField = ({ label, error, children, required = false }) => (
        <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {children}
            {error && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1 animate-shake">
                    <span className="inline-block w-1 h-1 bg-red-600 rounded-full" />
                    {error.message}
                </p>
            )}
        </div>
    );

    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4'>
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg">
                    <Building2 className="text-white" size={32} />
                </div>
                <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2'>
                    Register Your School
                </h1>
                <p className="text-gray-600">Complete the registration process in 5 simple steps</p>
            </div>

            <StepIndicator />

            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="h-2 bg-gray-100">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12">
                        {currentStep === 1 && (
                            <div className="animate-fadeIn">
                                <div className="mb-8">
                                    <h2 className='text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2'>
                                        <Building2 className="text-blue-600" size={28} />
                                        School Basic Details
                                    </h2>
                                    <p className="text-gray-600">Tell us about your institution</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <InputField label="School Name" error={errors.schoolName} required>
                                            <input
                                                type="text"
                                                {...register("schoolName")}
                                                placeholder="Enter full school name"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                            />
                                        </InputField>
                                    </div>

                                    <InputField label="School Type" error={errors.schoolType} required>
                                        <Controller
                                            name="schoolType"
                                            control={control}
                                            render={({ field }) => (
                                                <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                                                    <Select.Trigger className="w-full" />
                                                    <Select.Content>
                                                        <Select.Group>
                                                            <Select.Label>Select School Type</Select.Label>
                                                            <Select.Item value="pre-primary">Pre-Primary/Early Childhood</Select.Item>
                                                            <Select.Item value="primary">Primary/Elementary</Select.Item>
                                                            <Select.Item value="middle">Middle School/Upper Primary</Select.Item>
                                                            <Select.Item value="secondary">Secondary/High School</Select.Item>
                                                            <Select.Item value="higher-secondary">Higher Secondary/Senior Secondary</Select.Item>
                                                        </Select.Group>
                                                    </Select.Content>
                                                </Select.Root>
                                            )}
                                        />
                                    </InputField>

                                    <InputField label="Board Affiliation" error={errors.boardAffiliation} required>
                                        <Controller
                                            name="boardAffiliation"
                                            control={control}
                                            render={({ field }) => (
                                                <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                                                    <Select.Trigger className="w-full" />
                                                    <Select.Content>
                                                        <Select.Group>
                                                            <Select.Label>Select Board</Select.Label>
                                                            <Select.Item value="cbse">CBSE</Select.Item>
                                                            <Select.Item value="icse">ICSE</Select.Item>
                                                            <Select.Item value="state">State Board</Select.Item>
                                                            <Select.Item value="ib">International Baccalaureate (IB)</Select.Item>
                                                            <Select.Item value="cambridge">Cambridge International</Select.Item>
                                                            <Select.Item value="other">Other</Select.Item>
                                                        </Select.Group>
                                                    </Select.Content>
                                                </Select.Root>
                                            )}
                                        />
                                    </InputField>

                                    <InputField label="Establishment Year" error={errors.establishmentYear} required>
                                        <input
                                            {...register("establishmentYear")}
                                            type="text"
                                            placeholder="e.g., 2005"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <InputField label="School Code" error={errors.schoolCode} required>
                                        <input
                                            type="text"
                                            {...register("schoolCode")}
                                            placeholder="Affiliation Number"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <InputField label="UDISE Code" error={errors.udiseCode}>
                                        <input
                                            type="text"
                                            {...register("udiseCode")}
                                            placeholder="Optional"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <InputField label="School Category" error={errors.schoolCategory} required>
                                        <Controller
                                            name="schoolCategory"
                                            control={control}
                                            render={({ field }) => (
                                                <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                                                    <Select.Trigger className="w-full" />
                                                    <Select.Content>
                                                        <Select.Group>
                                                            <Select.Label>Select Category</Select.Label>
                                                            <Select.Item value="government">Government</Select.Item>
                                                            <Select.Item value="private-aided">Private Aided</Select.Item>
                                                            <Select.Item value="private-unaided">Private Unaided</Select.Item>
                                                            <Select.Item value="international">International</Select.Item>
                                                        </Select.Group>
                                                    </Select.Content>
                                                </Select.Root>
                                            )}
                                        />
                                    </InputField>
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div className="animate-fadeIn">
                                <div className="mb-8">
                                    <h2 className='text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2'>
                                        <Mail className="text-blue-600" size={28} />
                                        Contact & Address Details
                                    </h2>
                                    <p className="text-gray-600">How can we reach you?</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <InputField label="Official Email" error={errors.officialEmail} required>
                                            <input
                                                type="email"
                                                {...register("officialEmail")}
                                                placeholder="school@example.com"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                            />
                                        </InputField>
                                    </div>

                                    <InputField label="Landline Number" error={errors.landlineNumber}>
                                        <input
                                            type="text"
                                            {...register("landlineNumber")}
                                            placeholder="Optional"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <InputField label="Mobile Number" error={errors.mobileNumber} required>
                                        <input
                                            type="text"
                                            {...register("mobileNumber")}
                                            placeholder="10-digit number"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <InputField label="Alternative Mobile" error={errors.alternativeMobile}>
                                        <input
                                            type="text"
                                            {...register("alternativeMobile")}
                                            placeholder="Optional"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <InputField label="Website URL" error={errors.website}>
                                        <input
                                            type="url"
                                            {...register("website")}
                                            placeholder="https://yourschool.com"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <div className="md:col-span-2">
                                        <InputField label="School Address" error={errors.schoolAddress} required>
                                            <input
                                                type='text'
                                                {...register("schoolAddress")}
                                                placeholder="Complete address"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                            />
                                        </InputField>
                                    </div>

                                    <InputField label="City" error={errors.city} required>
                                        <input
                                            type="text"
                                            {...register("city")}
                                            placeholder="City name"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <InputField label="State" error={errors.state} required>
                                        <input
                                            type="text"
                                            {...register("state")}
                                            placeholder="State name"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <InputField label="PIN Code" error={errors.pinCode} required>
                                        <input
                                            type="text"
                                            {...register("pinCode")}
                                            placeholder="6-digit PIN"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <InputField label="Country" error={errors.country} required>
                                        <input
                                            type="text"
                                            {...register("country")}
                                            placeholder="Country name"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>
                                </div>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div className="animate-fadeIn">
                                <div className="mb-8">
                                    <h2 className='text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2'>
                                        <User className="text-blue-600" size={28} />
                                        Administrator Account Setup
                                    </h2>
                                    <p className="text-gray-600">Create your admin credentials</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <InputField label="Administrator Name" error={errors.adminName} required>
                                            <input
                                                type="text"
                                                {...register("adminName")}
                                                placeholder="Full name"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                            />
                                        </InputField>
                                    </div>

                                    <InputField label="Designation" error={errors.adminDesignation} required>
                                        <Controller
                                            name="adminDesignation"
                                            control={control}
                                            render={({ field }) => (
                                                <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                                                    <Select.Trigger className="w-full" />
                                                    <Select.Content>
                                                        <Select.Group>
                                                            <Select.Label>Select Designation</Select.Label>
                                                            <Select.Item value="Owner">Owner</Select.Item>
                                                            <Select.Item value="Director">Director</Select.Item>
                                                            <Select.Item value="Principal">Principal</Select.Item>
                                                            <Select.Item value="Vice-Principal">Vice-Principal</Select.Item>
                                                            <Select.Item value="Administrator">Administrator</Select.Item>
                                                            <Select.Item value="It-Head">IT-Head</Select.Item>
                                                        </Select.Group>
                                                    </Select.Content>
                                                </Select.Root>
                                            )}
                                        />
                                    </InputField>

                                    <InputField label="Administrator Email" error={errors.adminEmail} required>
                                        <input
                                            type="email"
                                            {...register("adminEmail")}
                                            placeholder="admin@example.com"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <InputField label="Password" error={errors.adminPassword} required>
                                        <input
                                            type="password"
                                            {...register("adminPassword")}
                                            placeholder="Min. 8 characters"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <InputField label="Confirm Password" error={errors.confirmPassword} required>
                                        <input
                                            type="password"
                                            {...register("confirmPassword")}
                                            placeholder="Re-enter password"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <InputField label="Mobile Number" error={errors.adminMobile} required>
                                        <input
                                            type="text"
                                            {...register("adminMobile")}
                                            placeholder="10-digit number"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <div className="md:col-span-2 mt-4">
                                        <Blockquote className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                            💡 You can add more sub-admin profiles later from the dashboard.
                                        </Blockquote>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 4 && (
                            <div className="animate-fadeIn">
                                <div className="mb-8">
                                    <h2 className='text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2'>
                                        <Settings className="text-blue-600" size={28} />
                                        School Infrastructure Details
                                    </h2>
                                    <p className="text-gray-600">Tell us about your facilities</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <InputField label="Total Student Strength" error={errors.studentStrength} required>
                                        <Controller
                                            name="studentStrength"
                                            control={control}
                                            render={({ field }) => (
                                                <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                                                    <Select.Trigger className="w-full" />
                                                    <Select.Content>
                                                        <Select.Group>
                                                            <Select.Label>Select Range</Select.Label>
                                                            <Select.Item value="0-100">0-100 Students</Select.Item>
                                                            <Select.Item value="101-500">101-500 Students</Select.Item>
                                                            <Select.Item value="501-1000">501-1000 Students</Select.Item>
                                                            <Select.Item value="1001-1500">1001-1500 Students</Select.Item>
                                                            <Select.Item value="1501-2500">1501-2500 Students</Select.Item>
                                                            <Select.Item value="2501+">2501+ Students</Select.Item>
                                                        </Select.Group>
                                                    </Select.Content>
                                                </Select.Root>
                                            )}
                                        />
                                    </InputField>

                                    <InputField label="Total Classes" error={errors.totalClasses} required>
                                        <input
                                            type="text"
                                            {...register("totalClasses")}
                                            placeholder="Number of classes"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <InputField label="Teaching Staff" error={errors.teachingStaff} required>
                                        <input
                                            type="text"
                                            {...register("teachingStaff")}
                                            placeholder="Number of teachers"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <InputField label="Non-Teaching Staff" error={errors.nonTeachingStaff} required>
                                        <input
                                            type="text"
                                            {...register("nonTeachingStaff")}
                                            placeholder="Support staff count"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        />
                                    </InputField>

                                    <div className="md:col-span-2">
                                        <InputField label="Medium of Instruction" error={errors.mediumOfInstruction} required>
                                            <Controller
                                                name="mediumOfInstruction"
                                                control={control}
                                                render={({ field }) => (
                                                    <div className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                                                        <CheckboxGroup.Root value={field.value} onValueChange={field.onChange}>
                                                            <label className="flex items-center gap-2 cursor-pointer">
                                                                <CheckboxGroup.Item value="English" className="cursor-pointer" />
                                                                <Text>English</Text>
                                                            </label>
                                                            <label className="flex items-center gap-2 cursor-pointer">
                                                                <CheckboxGroup.Item value="Hindi" className="cursor-pointer" />
                                                                <Text>Hindi</Text>
                                                            </label>
                                                            <label className="flex items-center gap-2 cursor-pointer">
                                                                <CheckboxGroup.Item value="Regional Language" className="cursor-pointer" />
                                                                <Text>Regional Language</Text>
                                                            </label>
                                                        </CheckboxGroup.Root>
                                                    </div>
                                                )}
                                            />
                                        </InputField>
                                    </div>

                                    <div className="md:col-span-2">
                                        <InputField label="Streams Offered" error={errors.streamsOffered} required>
                                            <Controller
                                                name="streamsOffered"
                                                control={control}
                                                render={({ field }) => (
                                                    <div className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                                                        <CheckboxGroup.Root value={field.value} onValueChange={field.onChange}>
                                                            <label className="flex items-center gap-2 cursor-pointer">
                                                                <CheckboxGroup.Item value="Science" className="cursor-pointer" />
                                                                <Text>Science</Text>
                                                            </label>
                                                            <label className="flex items-center gap-2 cursor-pointer">
                                                                <CheckboxGroup.Item value="Commerce" className="cursor-pointer" />
                                                                <Text>Commerce</Text>
                                                            </label>
                                                            <label className="flex items-center gap-2 cursor-pointer">
                                                                <CheckboxGroup.Item value="Arts-Humanities" className="cursor-pointer" />
                                                                <Text>Arts/Humanities</Text>
                                                            </label>
                                                        </CheckboxGroup.Root>
                                                    </div>
                                                )}
                                            />
                                        </InputField>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 5 && (
                            <div className="animate-fadeIn">
                                <div className="mb-8">
                                    <h2 className='text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2'>
                                        <Shield className="text-blue-600" size={28} />
                                        Choose Plan & Accept Terms
                                    </h2>
                                    <p className="text-gray-600">Select a plan that fits your needs</p>
                                </div>

                                <InputField label="Select Your Plan" error={errors.plan} required>
                                    <Controller
                                        name="plan"
                                        control={control}
                                        render={({ field }) => (
                                            <RadioCards.Root
                                                value={field.value}
                                                onValueChange={field.onChange}
                                                columns={{ initial: "1", sm: "3" }}
                                                className="gap-4"
                                            >
                                                <RadioCards.Item value="1" className="cursor-pointer hover:shadow-lg transition-shadow">
                                                    <Flex direction="column" width="100%" gap="2">
                                                        <Text weight="bold" size="5">Basic Plan</Text>
                                                        <Text color="gray" size="2">Up To 500 Students</Text>
                                                        <Text weight="bold" size="6" className="text-blue-600">$35<Text size="2" color="gray">/month</Text></Text>
                                                    </Flex>
                                                </RadioCards.Item>
                                                <RadioCards.Item value="2" className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-purple-500">
                                                    <Flex direction="column" width="100%" gap="2">
                                                        <div className="flex items-center justify-between">
                                                            <Text weight="bold" size="5">Standard Plan</Text>
                                                            <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">Popular</span>
                                                        </div>
                                                        <Text color="gray" size="2">Up To 1000 Students</Text>
                                                        <Text weight='bold' size="6" className="text-purple-600">$65<Text size="2" color="gray">/month</Text></Text>
                                                    </Flex>
                                                </RadioCards.Item>
                                                <RadioCards.Item value="3" className="cursor-pointer hover:shadow-lg transition-shadow">
                                                    <Flex direction="column" width="100%" gap="2">
                                                        <Text weight="bold" size="5">Premium Plan</Text>
                                                        <Text color="gray" size="2">Unlimited Students</Text>
                                                        <Text weight="bold" size="6" className="text-green-600">$120<Text size="2" color="gray">/month</Text></Text>
                                                    </Flex>
                                                </RadioCards.Item>
                                            </RadioCards.Root>
                                        )}
                                    />
                                </InputField>

                                <InputField label="Billing Cycle" error={errors.billingCycle} required>
                                    <Controller
                                        name="billingCycle"
                                        control={control}
                                        render={({ field }) => (
                                            <Select.Root size="3" value={field.value} onValueChange={field.onChange}>
                                                <Select.Trigger className="w-full" />
                                                <Select.Content>
                                                    <Select.Group>
                                                        <Select.Label>Select Billing</Select.Label>
                                                        <Select.Item value="monthly">Monthly</Select.Item>
                                                        <Select.Item value="quarterly">Quarterly (5% discount)</Select.Item>
                                                        <Select.Item value="yearly">Yearly (10% discount) 🎉</Select.Item>
                                                    </Select.Group>
                                                </Select.Content>
                                            </Select.Root>
                                        )}
                                    />
                                </InputField>

                                <div className="mt-8 space-y-4 bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            {...register("termsAccepted")}
                                            type="checkbox"
                                            className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                        />
                                        <span className="text-sm text-gray-700 group-hover:text-gray-900">
                                            I accept the <Link href="/terms" className="text-blue-600 hover:underline font-medium">Terms and Conditions</Link> *
                                        </span>
                                    </label>
                                    {errors.termsAccepted && <p className="text-sm text-red-600 ml-8">{errors.termsAccepted.message}</p>}

                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            {...register("privacyAccepted")}
                                            type="checkbox"
                                            className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                        />
                                        <span className="text-sm text-gray-700 group-hover:text-gray-900">
                                            I accept the <Link href="/privacy" className="text-blue-600 hover:underline font-medium">Privacy Policy</Link> *
                                        </span>
                                    </label>
                                    {errors.privacyAccepted && <p className="text-sm text-red-600 ml-8">{errors.privacyAccepted.message}</p>}
                                </div>
                            </div>
                        )}

                        <div className="flex justify-between items-center mt-12 pt-6 border-t-2 border-gray-100">
                            <Button
                                type="button"
                                onClick={prevStep}
                                disabled={currentStep === 1}
                                size="3"
                                variant="soft"
                                className={`flex items-center gap-2 ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'} transition-transform`}
                            >
                                <ChevronLeft size={20} /> Previous
                            </Button>

                            {currentStep < totalSteps ? (
                                <Button
                                    type="button"
                                    onClick={handleSubmit(onSubmit)}
                                    size="3"
                                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-transform"
                                >
                                    Next <ChevronRight size={20} />
                                </Button>
                            ) : (
                                <Button
                                    type="submit"
                                    size="3"
                                    className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105 transition-transform animate-pulse"
                                >
                                    <Check size={20} /> Submit Registration
                                </Button>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out;
                }

                .animate-shake {
                    animation: shake 0.3s ease-in-out;
                }
            `}</style>
        </div>
    )
}

export default Register