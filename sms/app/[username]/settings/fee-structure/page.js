"use server"
import { prisma } from '@/lib/prisma';
import { IndianRupee, Zap, Plus, FileAxis3d } from 'lucide-react'
import { Button } from '@radix-ui/themes'
const Check_fee_structure = async (username) => {
  try {
    const school = await prisma.school.findFirst({
      where: {
        adminEmail: {
          contains: `${username}@`
        }
      }
    });
    const feeStructure = await prisma.feeStructure.findFirst({
      where: {
        schoolId: school.id
      }
    })
    if (!feeStructure) return null
    return feeStructure
  } catch (error) {
    console.log(error, "\n from check fee structure function");
    return null
  }
}


const Page = async ({ params }) => {

  const { username } = await params
  // console.log(username, "\n from fee structure page");
  const data = await Check_fee_structure(username)
  console.log(data, "\n from fee structure page");

  if (!data) {
    return (
      <div className='w-full h-full flex justify-center items-center flex-col gap-2'>
        <div className="flex items-center justify-center">
          <IndianRupee size={40} />
        </div>
        <h3 className='text-black text-3xl font-bold'>No Fee Structure setup yet.</h3>
        <span className='text-gray-600'>Set up your school's fee structure to start managing student fees easily.</span>
        <div className='flex items-center justify-center gap-6 mt-8'>
          <Button>
            <Zap size={18} className='mr-2' />
            Quick Setup
          </Button>
          <Button variant='soft'>
            <Plus size={18} className='mr-2' />
            Add Manually
          </Button>
          <Button variant='outline'>
            <FileAxis3d size={18} className='mr-2' />
            Import from CSV
          </Button>
        </div>
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
