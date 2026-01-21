"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { Login_Function } from '@/actions/Login_Function'
import AuthClientPage from '@/components/AuthClientPage'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const Login = () => {
    const { data: session } = useSession()
    const router = useRouter();
    if (session) {
        router.push(`/${session.user.name}`);
    }
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    return (
        <div className='w-full h-[89vh]'>

            <div className='w-full h-1/4 flex flex-col justify-center items-center bg-orange-300'>
                <div className='text-4xl font-bold '>
                    <span className='text-blue-600'>O</span>
                    <span className='text-blue-900'>z</span>
                    <span className='text-purple-600'>O</span>
                    <span className='text-orange-500'>f</span>
                    <span className='text-orange-500'>f</span>
                </div>
                <span className='text-slate-300'>10 : 45</span>
            </div>

            <div className='w-full h-3/4 flex bg-red-400 '>

                <div className='w-1/2 h-full flex justify-center items-center bg-red-300'>
                    <form className='bg-amber-900 flex flex-col w-2/3 h-3/4 gap-4 justify-center items-center rounded-lg' onSubmit={handleSubmit((data) => Login_Function(data))}>
                        <h2 className='text-2xl font-semibold'>Login using your credentials</h2>
                        <input className='border border-slate-400 py-2 text-black px-13 rounded-2xl' {...register("email", { required: true, message: "Email is required" })} type='email' placeholder='Enter your Email Address' />
                        {errors.email && <span className='text-red-600'>Email is required</span>}
                        <input className='border border-slate-400 py-2 text-black px-13 rounded-2xl' type="password" {...register("password", { required: true, message: "Password is required" })} placeholder='Enter your Password' />
                        {errors.password && <span className='text-red-600'>Password is required</span>}
                        <button type="submit" className='bg-blue-600 text-white rounded-md px-4 py-2 mt-4' disabled={isSubmitting}>Login</button>
                    </form>
                </div>

                <div className='w-1/2 h-full'>
                    <AuthClientPage />
                </div>
            </div>

        </div>
    )
}

export default Login