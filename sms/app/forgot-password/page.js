"use client"
import { KeyRound } from "lucide-react"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { useForm, Controller } from 'react-hook-form';

const formSchema = z.object({
  adminEmail: z.string().optional(),
  adminMobile: z.string().optional(),
})

const Page = () => {

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

    if (!data.adminEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.adminEmail)) {
      setError('adminEmail', { message: 'Enter valid email' });
      isValid = false;
    }
    if (!data.adminMobile || !/^\d{10}$/.test(data.adminMobile)) {
      setError('adminMobile', { message: 'Enter valid 10-digit mobile number' });
      isValid = false;
    }
    return isValid
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className=" min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col justify-center items-center ">
      <div className="bg-linear-to-br w-22 h-22 from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
        <KeyRound className="text-white" size={44} />
      </div>
      <h1 className='text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2'>
        Reset your password
      </h1>
      <p className="text-gray-600">Reset your passwords in a few simple steps</p>
    </div>
  )
}

export default Page
