"use server"
import { IndianRupee, Zap } from 'lucide-react'
import Check_fee_structure from '@/actions/Check_fee_structure';
import EmptyFeeButton from '@/components/EmptyFeeButton';

const Page = async ({ params }) => {

  const { username } = await params
  const data = await Check_fee_structure(username)
  if (!data) {
    return (
      <div className='w-full h-full flex justify-center items-center flex-col gap-2'>
        <div className="flex items-center justify-center">
          <IndianRupee size={40} />
        </div>
        <h3 className='text-black text-3xl font-bold'>No Fee Structure setup yet.</h3>
        <span className='text-gray-600'>Set up your school's fee structure to start managing student fees easily.</span>
        <EmptyFeeButton />
        <span className='flex gap-2 text-gray-500 justify-center items-center'>
          <Zap size={18} />
          Quick setup lets you configure all classes in 2 simple steps
        </span>
      </div>
    )
  }

  return (
    <div>
      <p className="text-lg font-semibold">{data.className}</p>
      <p>class: {data.class}</p>
      <p>Transport Fee: {data.transportFeeMonthly}</p>
      <p>Tt Fee: {data.tuitionFeeMonthly}</p>
    </div>
  )
}

export default Page
