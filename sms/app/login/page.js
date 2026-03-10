"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { Login_Function } from '@/actions/Login_Function'
import { FaGoogle, FaGithub } from "react-icons/fa"
import Link from 'next/link'
import { signIn } from "next-auth/react"
import toast from 'react-hot-toast'

const Login = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

    const onSubmit = async (data) => {
        const toastId = toast.loading('Logging in...')
        try {
            await Login_Function(data)
            toast.success('Welcome back!', { id: toastId })
        } catch (err) {
            if (!err?.message?.includes('NEXT_REDIRECT')) {
                toast.error(err.message || 'Something went wrong', { id: toastId })
            } else {
                toast.dismiss(toastId)
            }
        }
    }

    return (
        <div className='w-full min-h-[89vh] flex flex-col'>

            {/* Logo */}
            <div className='w-full py-8 flex flex-col justify-center items-center'>
                <div className='text-4xl font-bold'>
                    <span className='text-blue-600'>O</span>
                    <span className='text-blue-900'>z</span>
                    <span className='text-purple-600'>O</span>
                    <span className='text-orange-500'>f</span>
                    <span className='text-orange-500'>f</span>
                </div>
                <span className='text-slate-300'>10 : 45</span>
            </div>

            <div className='w-full flex-1 flex flex-col md:flex-row justify-center items-center gap-8 px-4 pb-10'>

                {/* Credentials form */}
                <div className='w-full md:w-1/2 flex justify-center items-center'>
                    <form
                        className='flex flex-col w-full max-w-sm gap-6 justify-center items-center rounded-lg'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h2 className='text-xl sm:text-2xl font-semibold text-center'>Login using your credentials</h2>

                        <input
                            className='w-full border border-slate-400 py-2 text-black px-4 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed'
                            {...register("email", { required: true })}
                            type='email'
                            placeholder='Enter your Email Address'
                            disabled={isSubmitting}
                        />
                        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}

                        <input
                            className='w-full border border-slate-400 py-2 text-black px-4 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed'
                            type="password"
                            {...register("password", {
                                required: { value: true, message: "Password is required" },
                                minLength: { value: 8, message: "Password must be 8 characters" }
                            })}
                            placeholder='Enter your Password'
                            disabled={isSubmitting}
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className='bg-blue-600 text-white rounded-md px-6 py-2 mt-2 hover:bg-blue-700 transition w-full disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-2'
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                    </svg>
                                    Logging in...
                                </>
                            ) : 'Login'}
                        </button>
                    </form>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-64 bg-gray-300"></div>
                <div className="md:hidden w-3/4 h-px bg-gray-300"></div>

                {/* OAuth */}
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center gap-5 px-4'>
                    <h2 className='text-xl sm:text-2xl font-semibold'>Login with your providers</h2>
                    <button
                        onClick={() => signIn("github")}
                        className='cursor-pointer flex justify-center items-center gap-2 bg-slate-100 py-3 w-full max-w-xs rounded hover:bg-slate-200 transition'
                    >
                        <FaGithub /> Login with GitHub
                    </button>
                    <button
                        onClick={() => signIn("google")}
                        className='cursor-pointer flex justify-center items-center gap-2 bg-slate-100 py-3 w-full max-w-xs rounded hover:bg-slate-200 transition'
                    >
                        <FaGoogle /> Login using Google
                    </button>
                    <div className='flex flex-col sm:flex-row gap-3 sm:gap-8 mt-4 text-center'>
                        <Link className='text-blue-600 text-sm' href="/register">Don&apos;t have an account? Sign Up</Link>
                        <Link className='text-blue-600 text-sm' href="/forgot-password">Forgot Password?</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
