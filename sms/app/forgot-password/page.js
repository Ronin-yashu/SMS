"use client"
import { KeyRound, Check } from "lucide-react"
import React from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import InputField from "@/components/InputField";
import { useForm } from 'react-hook-form';
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  adminEmail: z.string().optional(),
  adminMobile: z.string().optional(),
  otp: z.string().optional(),
  New_password: z.string().optional(),
  Confirm_New_password: z.string().optional(),
})

const Page = () => {
  const [currentStep, setcurrentStep] = React.useState(1)
  const [isLoading, setIsLoading] = React.useState(false);
  const [verifiedEmail, setVerifiedEmail] = React.useState('');
  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
    defaultValues: {
      adminEmail: '', adminMobile: '', otp: '',
      New_password: '', Confirm_New_password: ''
    }
  });

  const validateStep = (data) => {
    clearErrors();
    let isValid = true;
    if (currentStep === 1) {
      if (!data.adminEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.adminEmail)) {
        setError('adminEmail', { message: 'Enter valid email' }); isValid = false;
      }
      if (!data.adminMobile || !/^\d{10}$/.test(data.adminMobile)) {
        setError('adminMobile', { message: 'Enter valid 10-digit mobile number' }); isValid = false;
      }
    } else if (currentStep === 2) {
      if (!data.otp || !/^\d{6}$/.test(data.otp)) {
        setError('otp', { message: 'Enter valid 6-digit OTP' }); isValid = false;
      }
    } else if (currentStep === 3) {
      if (!data.New_password || data.New_password.length < 8) {
        setError('New_password', { message: 'Password must be at least 8 characters' }); isValid = false;
      }
      if (!data.Confirm_New_password || data.Confirm_New_password.length < 8) {
        setError('Confirm_New_password', { message: 'Confirm password required' }); isValid = false;
      }
      if (data.New_password !== data.Confirm_New_password) {
        setError('Confirm_New_password', { message: "Passwords don't match" }); isValid = false;
      }
    }
    return isValid;
  }

  const onSubmit = (data) => {
    if (!validateStep(data)) return;
    setIsLoading(true);
    const p = new Promise(async (resolve, reject) => {
      try {
        const res = await fetch("/api/forgot_password", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await res.json();
        if (res.ok) { setVerifiedEmail(data.adminEmail); resolve(result); setcurrentStep(2); }
        else reject(new Error(result.error || 'Verification failed'));
      } catch (e) { reject(e); }
    });
    toast.promise(p, { loading: 'Verifying...', success: 'OTP sent!', error: (e) => `Error: ${e.message}` })
      .finally(() => setIsLoading(false));
  }

  const Otp_Verify = (data) => {
    if (!validateStep(data)) return;
    setIsLoading(true);
    const p = new Promise(async (resolve, reject) => {
      try {
        const res = await fetch("/api/otp_verify", {
          method: "POST", headers: { "Content-Type": 'application/json' },
          body: JSON.stringify({ adminEmail: verifiedEmail, otp: data.otp }),
        });
        const result = await res.json();
        if (res.ok) { resolve(result); setcurrentStep(3); }
        else reject(new Error(result.error || 'Verification failed'));
      } catch (e) { reject(e); }
    });
    toast.promise(p, { loading: 'Verifying OTP...', success: 'OTP verified!', error: (e) => `Error: ${e.message}` })
      .finally(() => setIsLoading(false));
  }

  const Change_pass = (data) => {
    if (!validateStep(data)) return;
    setIsLoading(true);
    const p = new Promise(async (resolve, reject) => {
      try {
        const res = await fetch("/api/pass_res", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ adminEmail: verifiedEmail, newPassword: data.New_password }),
        });
        const result = await res.json();
        if (res.ok) { resolve(result); setTimeout(() => router.push("/login"), 2000); }
        else reject(new Error(result.error || 'Password reset failed'));
      } catch (e) { reject(e); }
    });
    toast.promise(p, { loading: 'Resetting...', success: 'Password changed! Redirecting...', error: (e) => `Error: ${e.message}` })
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col justify-center items-center px-4 py-12 gap-8">

      <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shrink-0">
        <KeyRound className="text-white" size={36} />
      </div>

      {currentStep === 1 && (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg flex flex-col gap-6 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="text-center">
            <h1 className='text-2xl sm:text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Reset your password
            </h1>
            <p className="text-gray-600 mt-1 text-sm">Reset your password in a few simple steps</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <InputField label="Admin Email" error={errors.adminEmail} required>
              <input type="text" {...register("adminEmail")} placeholder="Enter Admin Email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
            </InputField>
            <InputField label="Registered Mobile" error={errors.adminMobile} required>
              <input type="text" {...register("adminMobile")} placeholder="10-digit number"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
            </InputField>
          </div>
          <Button type="submit" size="3" disabled={isLoading}
            className="flex items-center justify-center gap-2 w-full bg-linear-to-r from-green-500 to-emerald-600">
            <Check size={20} /> Verify
          </Button>
        </form>
      )}

      {currentStep === 2 && (
        <form onSubmit={handleSubmit(Otp_Verify)} className="w-full max-w-sm flex flex-col gap-6 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="text-center">
            <h1 className='text-2xl sm:text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Email Verification
            </h1>
            <p className="text-gray-600 mt-1 text-sm">6-digit code sent to <span className="font-medium text-blue-600">{verifiedEmail}</span></p>
          </div>
          <InputField label="Verification Code" error={errors.otp} required>
            <input type="text" {...register("otp")} placeholder="Enter 6-digit code" maxLength={6}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-center tracking-widest text-lg" />
          </InputField>
          <Button type="submit" size="3" disabled={isLoading}
            className="flex items-center justify-center gap-2 w-full bg-linear-to-r from-green-500 to-emerald-600">
            <Check size={20} /> Verify OTP
          </Button>
        </form>
      )}

      {currentStep === 3 && (
        <form onSubmit={handleSubmit(Change_pass)} className="w-full max-w-lg flex flex-col gap-6 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="text-center">
            <h1 className='text-2xl sm:text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Set New Password
            </h1>
            <p className="text-gray-600 mt-1 text-sm">Use a strong password with special characters and numbers</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <InputField label="New Password" error={errors.New_password} required>
              <input type="password" {...register("New_password")} placeholder="Min. 8 characters"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
            </InputField>
            <InputField label="Confirm Password" error={errors.Confirm_New_password} required>
              <input type="password" {...register("Confirm_New_password")} placeholder="Re-enter password"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
            </InputField>
          </div>
          <Button type="submit" size="3" disabled={isLoading}
            className="flex items-center justify-center gap-2 w-full bg-linear-to-r from-green-500 to-emerald-600">
            <Check size={20} /> Reset Password
          </Button>
        </form>
      )}
    </div>
  )
}

export default Page
