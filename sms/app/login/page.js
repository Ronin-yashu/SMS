"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { Login_Function } from '@/actions/Login_Function'
import { FaGoogle, FaGithub } from "react-icons/fa";
import Link from 'next/link'
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Login = () => {

    const { data: session } = useSession()
    console.log(session);
    
    const router = useRouter();

    React.useEffect(() => {
      if (session) {
        router.push(`/${session.user.email.split("@")[0]}`); 
      }
    }, [session])
    
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    return (
        <div className='w-full h-[89vh]'>

            <div className='w-full h-1/4 flex flex-col justify-center items-center'>
                <div className='text-4xl font-bold '>
                    <span className='text-blue-600'>O</span>
                    <span className='text-blue-900'>z</span>
                    <span className='text-purple-600'>O</span>
                    <span className='text-orange-500'>f</span>
                    <span className='text-orange-500'>f</span>
                </div>
                <span className='text-slate-300'>10 : 45</span>
            </div>

            <div className='w-full h-3/4 flex justify-center items-center'>

                <div className='w-1/2 h-full flex justify-center items-center'>
                    <form className='flex flex-col w-2/3 h-3/4 gap-6 justify-center items-center rounded-lg' onSubmit={handleSubmit((data) => Login_Function(data))}>
                        <h2 className='text-2xl font-semibold'>Login using your credentials</h2>
                        <input className='border border-slate-400 py-2 text-black px-13 rounded-2xl' {...register("email", { required: true, message: "Email is required" })} type='email' placeholder='Enter your Email Address' />
                        {errors.email && <span >Email is required</span>}
                        <input className='border border-slate-400 py-2 text-black px-13 rounded-2xl' type="password" {...register("password", { required: {value:true,message:"password  is required"}, minLength : {value : 8 , message : "Password must be 8 characters"} })} placeholder='Enter your Password' />
                        {errors.password && errors.password.message}
                        <button type="submit" className='bg-blue-600 text-white rounded-md px-4 py-2 mt-4' disabled={isSubmitting}>Login</button>
                    </form>
                </div>

                <div className="w-px h-3/4 bg-gray-400"></div>

                <div className='w-1/2 h-full flex flex-col justify-center items-center gap-6'>
                    <h2 className='text-2xl font-semibold'>Login with your providers</h2>
                    <button onClick={() => signIn("github")} className='cursor-pointer flex justify-center items-center gap-2 bg-slate-100 py-3 w-64 rounded'>
                        <FaGithub />
                        Login with GitHub
                    </button>
                    <button onClick={() => signIn("google")} className='cursor-pointer flex justify-center items-center gap-2 bg-slate-100 py-3 w-64  rounded'>
                        <FaGoogle />
                        Login using Google
                    </button>
                    <div className='flex gap-32 mt-6'>
                        <Link className='text-blue-600' href="/register">Don't have an account? Sign Up</Link>
                        <Link className='text-blue-600' href="/forgot-password">Forgot Password ?</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Login