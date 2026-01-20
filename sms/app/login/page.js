"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { Login_Function } from '@/actions/Login_Function'

const Login = () => {
    const { register, handleSubmit, formState: { errors , isSubmitting } } = useForm();
    return (
        <div className='w-full h-[89vh] flex justify-center items-center flex-col'>

            <div className='text-4xl font-bold '>
                <span className='text-blue-600'>O</span>
                <span className='text-blue-900'>z</span>
                <span className='text-purple-600'>O</span>
                <span className='text-orange-500'>f</span>
                <span className='text-orange-500'>f</span>
            </div>

            <span className='text-slate-300'>10 : 45</span>

            <form className='flex flex-col w-1/3 h-3/4 gap-4 p-4 justify-center items-center rounded-lg' onSubmit={handleSubmit((data) => Login_Function(data))}>

                <h2 className='text-2xl font-semibold mb-6'>Login to your account</h2>

                <input className='border border-slate-400 py-2 text-black px-13 rounded-2xl' {...register("email", { required: true, message: "Email is required" })} type='email' placeholder='Enter your Email Address' />
                {errors.email && <span className='text-red-600'>Email is required</span>}

                <input className='border border-slate-400 py-2 text-black px-13 rounded-2xl' type="password" {...register("password", { required: true, message: "Password is required" })} placeholder='Enter your Password' />
                {errors.password && <span className='text-red-600'>Password is required</span>}

                <button type="submit" className='bg-blue-600 text-white rounded-md px-4 py-2 mt-4' disabled={isSubmitting}>Login</button>
            </form>



        </div>
    )
}

export default Login