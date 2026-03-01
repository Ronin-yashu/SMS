"use server"
import { prisma } from '@/lib/prisma';

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
  console.log(username, "\n from fee structure page");
  const data = await Check_fee_structure(username)
  console.log(data, "\n from fee structure page");
  if (!data) {
    return (
      <div className="p-6">
        <p className="text-red-500">Fee structure not found for this school.</p>
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
