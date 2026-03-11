"use server"
import { IndianRupee, Zap } from 'lucide-react'
import Check_fee_structure from '@/actions/Check_fee_structure';
import EmptyFeeButton from '@/components/EmptyFeeButton';
import FeeTable from '@/components/FeeTable';
import GetAcademicYears from '@/actions/GetAcademicYears';

const Page = async ({ params }) => {

  const { username } = await params
  const data = await Check_fee_structure(username)
  const academic_years = await GetAcademicYears(username)
  if (!data || data.length == 0) {
    return (
      <div className='w-full h-full flex justify-center items-center flex-col gap-2 px-4'>
        <div className="flex items-center justify-center">
          <IndianRupee size={40} />
        </div>
        <h3 className='text-black text-3xl font-bold text-center'>No Fee Structure setup yet.</h3>
        <span className='text-gray-600 text-center'>Set up your school&apos;s fee structure to start managing student fees easily.</span>
        <EmptyFeeButton />
        <span className='flex gap-2 text-gray-500 justify-center items-center text-center'>
          <Zap size={18} />
          Quick setup lets you configure all classes in 2 simple steps
        </span>
      </div>
    )
  }

  return (
    <div className='w-full h-full'>
      <FeeTable data={data} academic_years={academic_years} />
    </div>
  )
}

export default Page
