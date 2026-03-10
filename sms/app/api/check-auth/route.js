import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('manually-session-token')
    if (!token?.value) return NextResponse.json({ loggedIn: false })
    
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET)
    if (decoded) return NextResponse.json({ loggedIn: true })
    
    return NextResponse.json({ loggedIn: false })
  } catch {
    return NextResponse.json({ loggedIn: false })
  }
}
