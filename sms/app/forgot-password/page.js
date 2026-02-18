"use client"
import { KeyRound, Check } from "lucide-react"
import React from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import InputField from "@/components/InputField";
import { useForm } from 'react-hook-form';
import { Button } from "@radix-ui/themes";

const formSchema = z.object({
  adminEmail: z.string().optional(),
  adminMobile: z.string().optional(),
  otp: z.string().optional()
})

const Page = () => {
  const [currentStep, setcurrentStep] = React.useState(1)
  const [isLoading, setIsLoading] = React.useState(false);

  const { register, handleSubmit, control, formState: { errors }, setError, clearErrors, getValues, reset } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit', // Changed to onSubmit to prevent re-renders
    defaultValues: {
      adminEmail: '',
      adminMobile: '',
    }
  });

  const validateStep = (data) => {
    clearErrors();
    let isValid = true;

    if (currentStep === 1) {
      if (!data.adminEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.adminEmail)) {
        setError('adminEmail', { message: 'Enter valid email' });
        isValid = false;
      }
      if (!data.adminMobile || !/^\d{10}$/.test(data.adminMobile)) {
        setError('adminMobile', { message: 'Enter valid 10-digit mobile number' });
        isValid = false;
      }
    } else if (currentStep === 2) {
      if (!data.otp || !/^\d{6}$/.test(data.otp)) {
        setError('otp', { message: 'Enter valid 6-digit OTP' })
      }
    }

    return isValid
  }

  const Otp_Verify = (data) => {
    const isValid = validateStep(data)
    if (!isValid) {
      return
    }
    console.log(data)
    setIsLoading(true)
    const otp_process = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch("/api/forgot_password", {
          method: "POST",
          headers: {
            "Content-Type": 'application/json',
          },
          body: JSON.stringify(data),
        })
        const result = await response.json()
        if (response.ok) {
          resolve(result);
        } else {
          reject(new Error(result.error || 'Verification failed'));
        }
      } catch (error) {
        reject(error);
      }
    })
    toast.promise(
      otp_process,
      {
        loading: 'Verifying OTP...',
        success: 'Verification completed successfully!',
        error: (err) => `Error: ${err.message}`,
      }
    ).then(() => {
      setTimeout(() => {
        reset();
        setIsLoading(false);
      }, 2000);
    }).catch((error) => {
      console.error('Verification error:', error);
      setIsLoading(false);
    });
  }

  const onSubmit = (data) => {
    const isValid = validateStep(data);
    if (!isValid) {
      return;
    }
    console.log(data)
    setIsLoading(true)
    const forgot_process = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch("/api/forgot_password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          resolve(result);
          setcurrentStep(2)

        } else {
          reject(new Error(result.error || 'Verification failed'));
        }
      } catch (error) {
        reject(error);
      }
    })
    toast.promise(
      forgot_process,
      {
        loading: 'Verifying your details...',
        success: 'Verification completed successfully!',
        error: (err) => `Error: ${err.message}`,
      }
    ).then(() => {
      setTimeout(() => {
        reset();
        setIsLoading(false);
      }, 2000);
    }).catch((error) => {
      console.error('Verification error:', error);
      setIsLoading(false);
    });
  }

  return (
    <div className=" min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 gap-8 flex flex-col justify-center items-center ">

      <div className="bg-linear-to-br w-22 h-22 from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg ">
        <KeyRound className="text-white" size={40} />
      </div>

      {currentStep === 1 && (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-6 ">
          <div className="flex justify-center items-center flex-col">
            <h1 className='text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent '>
              Reset your password
            </h1>
            <p className="text-gray-600">Reset your passwords in a few simple steps</p>
          </div>
          <div className="flex justify-center items-center gap-6">
            <InputField label="Admin Email" error={errors.adminEmail} required>
              <input
                type="text"
                {...register("adminEmail")}
                placeholder="Enter Admin Email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </InputField>
            <InputField label="Admin Registered Number" error={errors.adminMobile} required>
              <input
                type="text"
                {...register("adminMobile")}
                placeholder="10-digit number"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </InputField>
          </div>
          <Button
            type="submit"
            size="3"
            disabled={isLoading}
            className="flex items-center gap-2 bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105 transition-transform animate-pulse"
          >
            <Check size={20} /> Verify
          </Button>
        </form>
      )}

      {currentStep === 2 && (
        <form onSubmit={handleSubmit(Otp_Verify)} className="flex flex-col justify-center items-center gap-6 ">
          <div className="flex justify-center items-center flex-col">
            <h1 className='text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent '>
              Mobile Phone Verification
            </h1>
            <p className="text-gray-600">Enter the 6-digit verification code that was sent to your phone number.</p>
          </div>
          <div className="flex justify-center items-center gap-6">
            <InputField label="Verification Code" error={errors.otp} required>
              <input
                type="text"
                {...register("otp")}
                placeholder="Enter 6-digit code"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </InputField>
          </div>
          <Button
            type="submit"
            size="3"
            disabled={isLoading}
            className="flex items-center gap-2 bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105 transition-transform animate-pulse"
          >
            <Check size={20} /> Verify
          </Button>
        </form>
      )}



    </div>
  )
}

export default Page
