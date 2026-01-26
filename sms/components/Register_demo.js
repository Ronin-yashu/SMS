"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

// Validation schemas for each step
const step1Schema = z.object({
    schoolName: z.string().min(3, "School name must be at least 3 characters"),
    shortName: z.string().min(2, "Short name required"),
    udiseCode: z.string().optional(),
    establishmentYear: z.string().regex(/^\d{4}$/, "Enter valid year"),
    schoolType: z.string().min(1, "Select school type"),
    boardAffiliation: z.string().min(1, "Select board affiliation"),
    schoolCategory: z.string().min(1, "Select school category"),
});

const step2Schema = z.object({
    officialEmail: z.string().email("Enter valid email"),
    alternativeEmail: z.string().email("Enter valid email").optional().or(z.literal('')),
    landlineNumber: z.string().optional(),
    mobileNumber: z.string().regex(/^\d{10}$/, "Enter valid 10-digit mobile number"),
    alternativeMobile: z.string().optional(),
    website: z.string().url("Enter valid URL").optional().or(z.literal('')),
    buildingNumber: z.string().min(1, "Building number required"),
    streetAddress: z.string().min(5, "Street address required"),
    city: z.string().min(2, "City required"),
    state: z.string().min(2, "State required"),
    pinCode: z.string().regex(/^\d{6}$/, "Enter valid 6-digit PIN code"),
    country: z.string().min(2, "Country required"),
});

const step3Schema = z.object({
    adminName: z.string().min(3, "Admin name must be at least 3 characters"),
    adminDesignation: z.string().min(1, "Select designation"),
    adminEmail: z.string().email("Enter valid email"),
    adminPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Confirm password required"),
    adminMobile: z.string().regex(/^\d{10}$/, "Enter valid 10-digit mobile number"),
}).refine((data) => data.adminPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

const step4Schema = z.object({
    studentStrength: z.string().min(1, "Select student strength"),
    teachingStaff: z.string().min(1, "Enter number of teaching staff"),
    nonTeachingStaff: z.string().min(1, "Enter number of non-teaching staff"),
    totalClasses: z.string().min(1, "Enter total classes"),
    mediumOfInstruction: z.array(z.string()).min(1, "Select at least one medium"),
    classesOffered: z.array(z.string()).min(1, "Select at least one class"),
});

const step5Schema = z.object({
    plan: z.string().min(1, "Select a plan"),
    billingCycle: z.string().min(1, "Select billing cycle"),
    termsAccepted: z.boolean().refine((val) => val === true, {
        message: "You must accept terms and conditions",
    }),
    privacyAccepted: z.boolean().refine((val) => val === true, {
        message: "You must accept privacy policy",
    }),
});

export default function SchoolRegistrationForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});
    const totalSteps = 5;

    // Get schema based on current step
    const getSchema = () => {
        switch (currentStep) {
            case 1: return step1Schema;
            case 2: return step2Schema;
            case 3: return step3Schema;
            case 4: return step4Schema;
            case 5: return step5Schema;
            default: return step1Schema;
        }
    };

    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        resolver: zodResolver(getSchema()),
        defaultValues: formData,
    });

    const nextStep = async () => {
        const isValid = await trigger();
        if (isValid && currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const onSubmit = async (data) => {
        const allData = { ...formData, ...data };
        setFormData(allData);

        if (currentStep < totalSteps) {
            nextStep();
        } else {
            // Final submission
            console.log("Final Form Data:", allData);
            // Call your API here
            // await registerSchool(allData);
            alert("School registered successfully!");
        }
    };

    // Step indicator
    const StepIndicator = () => (
        <div className="flex justify-between mb-8">
            {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold
            ${currentStep > step ? 'bg-green-500 text-white' :
                            currentStep === step ? 'bg-blue-600 text-white' :
                                'bg-gray-300 text-gray-600'}`}>
                        {currentStep > step ? <Check size={20} /> : step}
                    </div>
                    {step < 5 && (
                        <div className={`w-16 h-1 mx-2 
              ${currentStep > step ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
                School Registration
            </h1>

            <StepIndicator />

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Step 1: School Basic Information */}
                {currentStep === 1 && (
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>

                        <div>
                            <label className="block text-sm font-medium mb-1">School Name *</label>
                            <input
                                {...register("schoolName")}
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter full school name"
                            />
                            {errors.schoolName && <p className="text-red-500 text-sm mt-1">{errors.schoolName.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Short Name / Display Name *</label>
                            <input
                                {...register("shortName")}
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., ABC School"
                            />
                            {errors.shortName && <p className="text-red-500 text-sm mt-1">{errors.shortName.message}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">UDISE Code</label>
                                <input
                                    {...register("udiseCode")}
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter UDISE code"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Establishment Year *</label>
                                <input
                                    {...register("establishmentYear")}
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="e.g., 2000"
                                />
                                {errors.establishmentYear && <p className="text-red-500 text-sm mt-1">{errors.establishmentYear.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">School Type *</label>
                            <select
                                {...register("schoolType")}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select school type</option>
                                <option value="pre-primary">Pre-Primary</option>
                                <option value="primary">Primary School (1-5)</option>
                                <option value="middle">Middle School (6-8)</option>
                                <option value="secondary">Secondary School (9-10)</option>
                                <option value="senior-secondary">Senior Secondary (11-12)</option>
                                <option value="k-12">K-12 (Complete)</option>
                            </select>
                            {errors.schoolType && <p className="text-red-500 text-sm mt-1">{errors.schoolType.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Board Affiliation *</label>
                            <select
                                {...register("boardAffiliation")}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select board</option>
                                <option value="cbse">CBSE</option>
                                <option value="icse">ICSE</option>
                                <option value="state">State Board</option>
                                <option value="ib">International Baccalaureate (IB)</option>
                                <option value="cambridge">Cambridge (IGCSE)</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.boardAffiliation && <p className="text-red-500 text-sm mt-1">{errors.boardAffiliation.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">School Category *</label>
                            <select
                                {...register("schoolCategory")}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select category</option>
                                <option value="government">Government</option>
                                <option value="private-aided">Private Aided</option>
                                <option value="private-unaided">Private Unaided</option>
                                <option value="international">International</option>
                            </select>
                            {errors.schoolCategory && <p className="text-red-500 text-sm mt-1">{errors.schoolCategory.message}</p>}
                        </div>
                    </div>
                )}

                {/* Step 2: Contact & Address */}
                {currentStep === 2 && (
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold mb-4">Contact & Address Information</h2>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Official Email *</label>
                                <input
                                    {...register("officialEmail")}
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="school@example.com"
                                />
                                {errors.officialEmail && <p className="text-red-500 text-sm mt-1">{errors.officialEmail.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Alternative Email</label>
                                <input
                                    {...register("alternativeEmail")}
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="alternate@example.com"
                                />
                                {errors.alternativeEmail && <p className="text-red-500 text-sm mt-1">{errors.alternativeEmail.message}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Landline Number</label>
                                <input
                                    {...register("landlineNumber")}
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="0123-456789"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Mobile Number *</label>
                                <input
                                    {...register("mobileNumber")}
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="9876543210"
                                />
                                {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Alternative Mobile</label>
                                <input
                                    {...register("alternativeMobile")}
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="9876543210"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Website URL</label>
                            <input
                                {...register("website")}
                                type="url"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="https://www.schoolwebsite.com"
                            />
                            {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Building Number *</label>
                                <input
                                    {...register("buildingNumber")}
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Building number"
                                />
                                {errors.buildingNumber && <p className="text-red-500 text-sm mt-1">{errors.buildingNumber.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Street Address *</label>
                                <input
                                    {...register("streetAddress")}
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Street address"
                                />
                                {errors.streetAddress && <p className="text-red-500 text-sm mt-1">{errors.streetAddress.message}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">City *</label>
                                <input
                                    {...register("city")}
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="City"
                                />
                                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">State *</label>
                                <input
                                    {...register("state")}
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="State"
                                />
                                {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">PIN Code *</label>
                                <input
                                    {...register("pinCode")}
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="123456"
                                />
                                {errors.pinCode && <p className="text-red-500 text-sm mt-1">{errors.pinCode.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Country *</label>
                            <input
                                {...register("country")}
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Country"
                                defaultValue="India"
                            />
                            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                        </div>
                    </div>
                )}

                {/* Step 3: Administrator Account */}
                {currentStep === 3 && (
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold mb-4">Administrator Account Setup</h2>

                        <div>
                            <label className="block text-sm font-medium mb-1">Admin Full Name *</label>
                            <input
                                {...register("adminName")}
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter admin name"
                            />
                            {errors.adminName && <p className="text-red-500 text-sm mt-1">{errors.adminName.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Designation *</label>
                            <select
                                {...register("adminDesignation")}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select designation</option>
                                <option value="principal">Principal</option>
                                <option value="vice-principal">Vice Principal</option>
                                <option value="director">Director</option>
                                <option value="administrator">Administrator</option>
                                <option value="owner">Owner</option>
                                <option value="it-head">IT Head</option>
                            </select>
                            {errors.adminDesignation && <p className="text-red-500 text-sm mt-1">{errors.adminDesignation.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Admin Email (Login Email) *</label>
                            <input
                                {...register("adminEmail")}
                                type="email"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="admin@school.com"
                            />
                            {errors.adminEmail && <p className="text-red-500 text-sm mt-1">{errors.adminEmail.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Admin Mobile Number *</label>
                            <input
                                {...register("adminMobile")}
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="9876543210"
                            />
                            {errors.adminMobile && <p className="text-red-500 text-sm mt-1">{errors.adminMobile.message}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Password *</label>
                                <input
                                    {...register("adminPassword")}
                                    type="password"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter strong password"
                                />
                                {errors.adminPassword && <p className="text-red-500 text-sm mt-1">{errors.adminPassword.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Confirm Password *</label>
                                <input
                                    {...register("confirmPassword")}
                                    type="password"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Re-enter password"
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4: School Infrastructure */}
                {currentStep === 4 && (
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold mb-4">School Infrastructure & Size</h2>

                        <div>
                            <label className="block text-sm font-medium mb-1">Total Student Strength *</label>
                            <select
                                {...register("studentStrength")}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select student strength</option>
                                <option value="0-100">0-100</option>
                                <option value="101-500">101-500</option>
                                <option value="501-1000">501-1000</option>
                                <option value="1001-2000">1001-2000</option>
                                <option value="2000+">2000+</option>
                            </select>
                            {errors.studentStrength && <p className="text-red-500 text-sm mt-1">{errors.studentStrength.message}</p>}
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Teaching Staff *</label>
                                <input
                                    {...register("teachingStaff")}
                                    type="number"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Number"
                                />
                                {errors.teachingStaff && <p className="text-red-500 text-sm mt-1">{errors.teachingStaff.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Non-Teaching Staff *</label>
                                <input
                                    {...register("nonTeachingStaff")}
                                    type="number"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Number"
                                />
                                {errors.nonTeachingStaff && <p className="text-red-500 text-sm mt-1">{errors.nonTeachingStaff.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Total Classes *</label>
                                <input
                                    {...register("totalClasses")}
                                    type="number"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Number"
                                />
                                {errors.totalClasses && <p className="text-red-500 text-sm mt-1">{errors.totalClasses.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Medium of Instruction *</label>
                            <div className="space-y-2">
                                <label className="flex items-center">
                                    <input {...register("mediumOfInstruction")} type="checkbox" value="english" className="mr-2" />
                                    English
                                </label>
                                <label className="flex items-center">
                                    <input {...register("mediumOfInstruction")} type="checkbox" value="hindi" className="mr-2" />
                                    Hindi
                                </label>
                                <label className="flex items-center">
                                    <input {...register("mediumOfInstruction")} type="checkbox" value="regional" className="mr-2" />
                                    Regional Language
                                </label>
                            </div>
                            {errors.mediumOfInstruction && <p className="text-red-500 text-sm mt-1">{errors.mediumOfInstruction.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Classes Offered *</label>
                            <div className="grid grid-cols-4 gap-2">
                                {['Nursery', 'LKG', 'UKG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map((cls) => (
                                    <label key={cls} className="flex items-center">
                                        <input {...register("classesOffered")} type="checkbox" value={cls} className="mr-2" />
                                        Class {cls}
                                    </label>
                                ))}
                            </div>
                            {errors.classesOffered && <p className="text-red-500 text-sm mt-1">{errors.classesOffered.message}</p>}
                        </div>
                    </div>
                )}

                {/* Step 5: Plan Selection */}
                {currentStep === 5 && (
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold mb-4">Choose Your Plan</h2>

                        <div>
                            <label className="block text-sm font-medium mb-2">Select Plan *</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <label className="border-2 rounded-lg p-4 cursor-pointer hover:border-blue-500">
                                    <input {...register("plan")} type="radio" value="basic" className="mr-2" />
                                    <div>
                                        <h3 className="font-semibold">Basic Plan</h3>
                                        <p className="text-sm text-gray-600">Up to 500 students</p>
                                        <p className="text-lg font-bold mt-2">₹2,999/month</p>
                                    </div>
                                </label>

                                <label className="border-2 rounded-lg p-4 cursor-pointer hover:border-blue-500">
                                    <input {...register("plan")} type="radio" value="standard" className="mr-2" />
                                    <div>
                                        <h3 className="font-semibold">Standard Plan</h3>
                                        <p className="text-sm text-gray-600">Up to 1000 students</p>
                                        <p className="text-lg font-bold mt-2">₹5,999/month</p>
                                    </div>
                                </label>

                                <label className="border-2 rounded-lg p-4 cursor-pointer hover:border-blue-500">
                                    <input {...register("plan")} type="radio" value="premium" className="mr-2" />
                                    <div>
                                        <h3 className="font-semibold">Premium Plan</h3>
                                        <p className="text-sm text-gray-600">Up to 2500 students</p>
                                        <p className="text-lg font-bold mt-2">₹9,999/month</p>
                                    </div>
                                </label>
                            </div>
                            {errors.plan && <p className="text-red-500 text-sm mt-1">{errors.plan.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Billing Cycle *</label>
                            <select
                                {...register("billingCycle")}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select billing cycle</option>
                                <option value="monthly">Monthly</option>
                                <option value="quarterly">Quarterly (5% discount)</option>
                                <option value="yearly">Yearly (15% discount)</option>
                            </select>
                            {errors.billingCycle && <p className="text-red-500 text-sm mt-1">{errors.billingCycle.message}</p>}
                        </div>

                        <div className="space-y-3 mt-6">
                            <label className="flex items-start">
                                <input {...register("termsAccepted")} type="checkbox" className="mr-3 mt-1" />
                                <span className="text-sm">I accept the <a href="/terms" className="text-blue-600">Terms and Conditions</a> *</span>
                            </label>
                            {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted.message}</p>}

                            <label className="flex items-start">
                                <input {...register("privacyAccepted")} type="checkbox" className="mr-3 mt-1" />
                                <span className="text-sm">I accept the <a href="/privacy" className="text-blue-600">Privacy Policy</a> *</span>
                            </label>
                            {errors.privacyAccepted && <p className="text-red-500 text-sm">{errors.privacyAccepted.message}</p>}
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    <button
                        type="button"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className={`flex items-center px-6 py-2 rounded-lg ${currentStep === 1
                                ? 'bg-gray-300 cursor-not-allowed'
                                : 'bg-gray-500 text-white hover:bg-gray-600'
                            }`}
                    >
                        <ChevronLeft size={20} className="mr-1" />
                        Previous
                    </button>

                    {currentStep < totalSteps ? (
                        <button
                            type="button"
                            onClick={handleSubmit(onSubmit)}
                            className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Next
                            <ChevronRight size={20} className="ml-1" />
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                        >
                            <Check size={20} className="mr-1" />
                            Submit Registration
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
