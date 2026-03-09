"use client"
import User_param from "@/actions/User_param";
import { Button } from "@radix-ui/themes"
import { useRouter } from 'next/navigation';
const page = () => {
    const router = useRouter()
    const fee_structure = async () => {
      const username = await User_param()
      router.push(`/${username}/settings/fee-structure`)
    }
    
  return (
    <div>
      <Button onClick={fee_structure}>Fee Structure</Button>
    </div>
  )
}

export default page
