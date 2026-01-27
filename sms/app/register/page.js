"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Select, Blockquote, CheckboxGroup, RadioCards, Flex, Text } from "@radix-ui/themes";
import Link from 'next/link';

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
    mediumOfInstruction: z.array(z.string()).min(1, "Select medium"),
    streamsOffered: z.array(z.string()).min(1, "Select at least one Stream"),
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
    const [currentStep, setCurrentStep] = useState(5);
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
        <div className='w-full h-[88vh] flex justify-center items-center flex-col gap-6 bg-red-500 shadow-lg '>
            <h1 className='text-3xl font-bold text-blue-600'>
                Register Your School
            </h1>
            <StepIndicator />
            <form className='bg-amber-800 w-3/4' onSubmit={handleSubmit(onSubmit)}>
                {currentStep === 1 && (
                    <div>
                        <h2 className='text-xl font-semibold'>Step 1: Enter School Basic Details</h2>

                        <label htmlFor="schoolName">School Name *</label>
                        <input type="text" {...register("schoolName")} placeholder="Enter full school name" />
                        {errors.schoolName && <span className="text-red-600">{errors.schoolName.message}</span>}

                        <label htmlFor="schoolType">School Type *</label>
                        <Select.Root size="2" defaultValue='pre-primary' {...register("schoolType")} >
                            <Select.Trigger />
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
                        {errors.schoolType && <span className="text-red-600">{errors.schoolType.message}</span>}


                        <label htmlFor="boardAffiliation">Board Affiliation *</label>
                        <Select.Root size="2" defaultValue='C.B.S.E.' {...register("boardAffiliation")} >
                            <Select.Trigger />
                            <Select.Content>
                                <Select.Group>
                                    <Select.Label>Select Board Affiliation</Select.Label>
                                    <Select.Item value="cbse">Central Board of Secondary Education (CBSE)</Select.Item>
                                    <Select.Item value="icse">Council for the Indian School Certificate Examinations (ICSE)</Select.Item>
                                    <Select.Item value="state">State Board</Select.Item>
                                    <Select.Item value="ib">International Baccalaureate (IB)</Select.Item>
                                    <Select.Item value="cambridge">Cambridge International</Select.Item>
                                    <Select.Item value="other">Other</Select.Item>
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                        {errors.boardAffiliation && <span className="text-red-600">{errors.boardAffiliation.message}</span>}


                        <label htmlFor="establishmentYear">Establishment Year *</label>
                        <input
                            {...register("establishmentYear")}
                            type="text"
                            placeholder="e.g., 2005"
                        />
                        {errors.establishmentYear && <span className="text-red-500 text-sm mt-1">{errors.establishmentYear.message}</span>}


                        <label htmlFor="schoolCode">School Code *</label>
                        <input type="text" {...register("schoolCode")} placeholder="Enter School Code / Affiliation Number" />
                        {errors.schoolCode && <span className="text-red-600">{errors.schoolCode.message}</span>}


                        <label htmlFor="udiseCode">UDISE Code</label>
                        <input type="text" {...register("udiseCode")} placeholder="Enter UDISE Code" />
                        {errors.udiseCode && <span className="text-red-600">{errors.udiseCode.message}</span>}


                        <label htmlFor="schoolCategory">School Category *</label>
                        <Select.Root size="2" defaultValue='government' {...register("schoolCategory")} >
                            <Select.Trigger />
                            <Select.Content>
                                <Select.Group>
                                    <Select.Label>Select School Category</Select.Label>
                                    <Select.Item value="government">Government</Select.Item>
                                    <Select.Item value="private-aided">Private Aided</Select.Item>
                                    <Select.Item value="private-unaided">Private Unaided</Select.Item>
                                    <Select.Item value="international">International</Select.Item>
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                        {errors.schoolCategory && <span className="text-red-600">{errors.schoolCategory.message}</span>}
                    </div>)}

                {currentStep === 2 && (
                    <div>
                        <h2 className='text-xl font-semibold'>Step 2: Enter Contact & Address Details</h2>


                        <label htmlFor="officialEmail">Official Email *</label>
                        <input type="email" {...register("officialEmail")} placeholder="Enter Official Email" />
                        {errors.officialEmail && <span className="text-red-600">{errors.officialEmail.message}</span>}


                        <label htmlFor="landlineNumber">Landline Number</label>
                        <input type="text" {...register("landlineNumber")} placeholder="Enter Landline Number" />
                        {errors.landlineNumber && <span className="text-red-600">{errors.landlineNumber.message}</span>}

                        <label htmlFor="mobileNumber">Mobile Number *</label>
                        <input type="text" {...register("mobileNumber")} placeholder="Enter Mobile Number" />
                        {errors.mobileNumber && <span className="text-red-600">{errors.mobileNumber.message}</span>}

                        <label htmlFor="alternativeMobile">Alternative Mobile Number</label>
                        <input type="text" {...register("alternativeMobile")} placeholder="Enter Alternative Mobile Number" />
                        {errors.alternativeMobile && <span className="text-red-600">{errors.alternativeMobile.message}</span>}

                        <label htmlFor="website">Website URL</label>
                        <input type="url" {...register("website")} placeholder="Enter Website URL" />
                        {errors.website && <span className="text-red-600">{errors.website.message}</span>}

                        <label htmlFor="schoolAddress">School Address *</label>
                        <input type='text' {...register("schoolAddress")} placeholder="Enter School Address" />
                        {errors.schoolAddress && <span className="text-red-600">{errors.schoolAddress.message}</span>}

                        <label htmlFor="city">City *</label>
                        <input type="text" {...register("city")} placeholder="Enter City" />
                        {errors.city && <span className="text-red-600">{errors.city.message}</span>}

                        <label htmlFor="state">State *</label>
                        <input type="text" {...register("state")} placeholder="Enter State" />
                        {errors.state && <span className="text-red-600">{errors.state.message}</span>}

                        <label htmlFor="pinCode">PIN Code *</label>
                        <input type="text" {...register("pinCode")} placeholder="Enter PIN Code" />
                        {errors.pinCode && <span className="text-red-600">{errors.pinCode.message}</span>}

                        <label htmlFor="country">Country *</label>
                        <input type="text" {...register("country")} placeholder="Enter Country" />
                        {errors.country && <span className="text-red-600">{errors.country.message}</span>}

                    </div>
                )}

                {currentStep === 3 && (
                    <div>

                        <h2 className='text-xl font-semibold'>Step 3: Administrator Account Setup</h2>

                        <label htmlFor="adminName">Administrator Name *</label>
                        <input type="text" {...register("adminName")} placeholder="Enter Administrator Full Name" />
                        {errors.adminName && <span className="text-red-600">{errors.adminName.message}</span>}

                        <label htmlFor="adminDesignation">Designation *</label>
                        <Select.Root size="2" defaultValue='Director' {...register("adminDesignation")} >
                            <Select.Trigger />
                            <Select.Content>
                                <Select.Group>
                                    <Select.Label>Select Designation</Select.Label>
                                    <Select.Item value="Owner">Owner</Select.Item>
                                    <Select.Item value="Director">Director</Select.Item>
                                    <Select.Item value="Principal">Principal</Select.Item>
                                    <Select.Item value="Vice-Principal">Vice-Principal</Select.Item>
                                    <Select.Item value="Administrator">Administrator</Select.Item>
                                    <Select.Item value="It-Head">It-Head</Select.Item>
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                        {errors.adminDesignation && <span className="text-red-600">{errors.adminDesignation.message}</span>}

                        <label htmlFor="adminEmail">Administrator Email *</label>
                        <input type="email" {...register("adminEmail")} placeholder="Enter Administrator Email" />
                        {errors.adminEmail && <span className="text-red-600">{errors.adminEmail.message}</span>}

                        <label htmlFor="adminPassword">Password *</label>
                        <input type="password" {...register("adminPassword")} placeholder="Enter Password" />
                        {errors.adminPassword && <span className="text-red-600">{errors.adminPassword.message}</span>}

                        <label htmlFor="confirmPassword">Confirm Password *</label>
                        <input type="password" {...register("confirmPassword")} placeholder="Confirm Password" />
                        {errors.confirmPassword && <span className="text-red-600">{errors.confirmPassword.message}</span>}

                        <label htmlFor="adminMobile">Administrator Mobile Number *</label>
                        <input type="text" {...register("adminMobile")} placeholder="Enter Mobile Number" />
                        {errors.adminMobile && <span className="text-red-600">{errors.adminMobile.message}</span>}

                        <Blockquote>
                            You can add more sub admin profiles later from the dashboard.
                        </Blockquote>
                    </div>
                )}

                {currentStep === 4 && (
                    <div>

                        <h2 className='text-xl font-semibold'>Step 4: School Infrastructure Details</h2>

                        <label htmlFor="studentStrength">Total Student Strength *</label>
                        <Select.Root size="2" defaultValue='0-100' {...register("studentStrength")} >
                            <Select.Trigger />
                            <Select.Content>
                                <Select.Group>
                                    <Select.Label>Select Student Strength</Select.Label>
                                    <Select.Item value="0-100">0-100</Select.Item>
                                    <Select.Item value="101-500">101-500</Select.Item>
                                    <Select.Item value="501-1000">501-1000</Select.Item>
                                    <Select.Item value="1001-1500">1001-1500</Select.Item>
                                    <Select.Item value="1501-2500">1501-2500</Select.Item>
                                    <Select.Item value="2501+">2501+</Select.Item>
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                        {errors.studentStrength && <span className="text-red-600">{errors.studentStrength.message}</span>}


                        <label htmlFor="teachingStaff">Total Teaching Staff *</label>
                        <input type="text" {...register("teachingStaff")} placeholder='Enter Total Number of Teaching Staff' />
                        {errors.teachingStaff && <span className="text-red-600">{errors.teachingStaff.message}</span>}


                        <label htmlFor="nonTeachingStaff">Total Non-Teaching Staff *</label>
                        <input type="text" {...register("nonTeachingStaff")} placeholder='Enter Total Number of Non-Teaching Staff' />
                        {errors.nonTeachingStaff && <span className="text-red-600">{errors.nonTeachingStaff.message}</span>}


                        <label htmlFor="totalClasses">Total Classes *</label>
                        <input type="text" {...register("totalClasses")} placeholder='Enter Total Number of Classes' />
                        {errors.totalClasses && <span className="text-red-600">{errors.totalClasses.message}</span>}

                        <label htmlFor="mediumOfInstruction">Medium of Instruction *</label>
                        <CheckboxGroup.Root defaultValue={["English"]} name="example">
                            <CheckboxGroup.Item value="English">English</CheckboxGroup.Item>
                            <CheckboxGroup.Item value="Hindi">Hindi</CheckboxGroup.Item>
                            <CheckboxGroup.Item value="Regional Language">Regional Language</CheckboxGroup.Item>
                        </CheckboxGroup.Root>
                        {errors.mediumOfInstruction && <span className="text-red-600">{errors.mediumOfInstruction.message}</span>}

                        <label htmlFor="streamsOffered">Streams Offered *</label>
                        <CheckboxGroup.Root defaultValue={["Science"]} name="example">
                            <CheckboxGroup.Item value="Science">Science</CheckboxGroup.Item>
                            <CheckboxGroup.Item value="Commerce">Commerce</CheckboxGroup.Item>
                            <CheckboxGroup.Item value="Arts-Humanities">Arts/Humanities</CheckboxGroup.Item>
                        </CheckboxGroup.Root>
                    </div>
                )}

                {currentStep === 5 && (
                    <div>

                        <h2 className='text-xl font-semibold'>Step 5: Choose Plans & Accept Terms</h2>

                        <label htmlFor="plan">Select Plan *</label>
                        <div>
                            <RadioCards.Root defaultValue="1" columns={{ initial: "1", sm: "3" }}>
                                <RadioCards.Item value="1">
                                    <Flex direction="column" width="100%">
                                        <Text weight="bold">Basic Plan</Text>
                                        <Text>Up To 500 Students</Text>
                                        <Text weight="bold">$35 / month</Text>
                                    </Flex>
                                </RadioCards.Item>
                                <RadioCards.Item value="2">
                                    <Flex direction="column" width="100%">
                                        <Text weight="bold">Standard Plan</Text>
                                        <Text>Up To 1000 Students</Text>
                                        <Text weight='bold'>$65 / month</Text>
                                    </Flex>
                                </RadioCards.Item>
                                <RadioCards.Item value="3">
                                    <Flex direction="column" width="100%">
                                        <Text weight="bold">Premium Plan</Text>
                                        <Text>Unlimited Students</Text>
                                        <Text weight="bold">$120 / month</Text>
                                    </Flex>
                                </RadioCards.Item>
                            </RadioCards.Root>
                        </div>
                        {errors.plan && <span className="text-red-600">{errors.plan.message}</span>}

                        <label htmlFor="billingCycle">Billing Cycle *</label>
                        <Select.Root size="2" defaultValue="monthly" {...register("billingCycle")} >
                            <Select.Trigger />
                            <Select.Content>
                                <Select.Group>
                                    <Select.Label>Select Billing Cycle</Select.Label>
                                    <Select.Item value="monthly">Monthly</Select.Item>
                                    <Select.Item value="quarterly">Quarterly (5% discount)</Select.Item>
                                    <Select.Item value="yearly">Yearly (10% discount)</Select.Item>
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                        {errors.billingCycle && <span className="text-red-600">{errors.billingCycle.message}</span>}


                        <label>
                            <input {...register("termsAccepted")} type="checkbox" />
                            <span>I accept the <Link href="/terms" className="text-blue-600">Terms and Conditions</Link> *</span>
                        </label>
                        {errors.termsAccepted && <span className="text-red-600">{errors.termsAccepted.message}</span>}

                        <label>
                            <input {...register("privacyAccepted")} type="checkbox" />
                            <span>I accept the <Link href="/privacy" className="text-blue-600">Privacy Policy</Link> *</span>
                        </label>
                        {errors.privacyAccepted && <p className="text-red-600">{errors.privacyAccepted.message}</p>}


                    </div>
                )}


            </form>
        </div>
    )
}

export default Register