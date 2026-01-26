"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

// Validation schemas for each step
const step1Schema = z.object({
    schoolName: z.string().min(3, "School name must be at least 3 characters"),
    schoolType: z.string().min(1, "Select school type"),
    boardAffiliation: z.string().min(1, "Select board affiliation"),
    establishmentYear: z.string().regex(/^\d{4}$/, "Enter valid year"),
    schoolCode: z.string().min(3, "School Code / Affiliation Number required"),
    udiseCode: z.string().optional(),
    schoolCategory: z.string().min(1, "Select school category"),
});

const step2Schema = z.object({
    officialEmail: z.string().email("Enter valid email"),
    landlineNumber: z.string().optional(),
    mobileNumber: z.string().regex(/^\d{10}$/, "Enter valid 10-digit mobile number"),
    alternativeMobile: z.string().optional(),
    website: z.string().url("Enter valid URL").optional().or(z.literal('')),
    schoolAddress: z.string().min(5, "School address required"),
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

const Register = () => {
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
        <div>Register</div>
    )
}

export default Register