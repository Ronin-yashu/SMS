"use server"
import { IndianRupee, Zap } from 'lucide-react'
import Check_fee_structure from '@/actions/Check_fee_structure';
import EmptyFeeButton from '@/components/EmptyFeeButton';
import FeeTable from '@/components/FeeTable';

const Page = async ({ params }) => {

  const { username } = await params
  // const data = await Check_fee_structure(username)
  // if (!data) {
  //   return (
  //     <div className='w-full h-full flex justify-center items-center flex-col gap-2'>
  //       <div className="flex items-center justify-center">
  //         <IndianRupee size={40} />
  //       </div>
  //       <h3 className='text-black text-3xl font-bold'>No Fee Structure setup yet.</h3>
  //       <span className='text-gray-600'>Set up your school's fee structure to start managing student fees easily.</span>
  //       <EmptyFeeButton />
  //       <span className='flex gap-2 text-gray-500 justify-center items-center'>
  //         <Zap size={18} />
  //         Quick setup lets you configure all classes in 2 simple steps
  //       </span>
  //     </div>
  //   )
  // }

  return (
    <div>
      {/* <ul>
        {data.map(data => (
          <li key={data.id}>
            <h2>{data.class}</h2>
            <p>Age: {data.booksFee}</p>
            <p>Position: {data.idCardFee}</p>
          </li>
        ))}
      </ul> */}
      <FeeTable />
    </div>
  )
}

export default Page
