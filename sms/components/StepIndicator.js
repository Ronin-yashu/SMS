import React from 'react'
import { Check, Building2, Mail, User, Shield, Settings } from 'lucide-react';
import { useSelector } from 'react-redux';

const stepInfo = [
    { number: 1, title: "Basic Details", icon: Building2 },
    { number: 2, title: "Contact Info", icon: Mail },
    { number: 3, title: "Admin Setup", icon: User },
    { number: 4, title: "Infrastructure", icon: Settings },
    { number: 5, title: "Plans & Terms", icon: Shield }
];

const StepIndicator = () => {
    const currentStep = useSelector((state) => state.currentStep.value)
    const totalSteps = 5
    return (
        <div className="w-full max-w-4xl mx-auto px-4 mb-12">
            <div className="flex justify-between items-center relative">
                <div className="absolute left-0 top-5 w-full h-1 bg-gray-200 -z-10">
                    <div
                        className="h-full bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
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
                                ${currentStep > step.number ? 'bg-linear-to-br from-green-400 to-green-600 text-white scale-100 shadow-lg' :
                                    currentStep === step.number ? 'bg-linear-to-br from-blue-500 to-purple-600 text-white scale-110 shadow-xl animate-pulse' :
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
    )
}

export default StepIndicator
