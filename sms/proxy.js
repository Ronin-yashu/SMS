import { NextResponse } from 'next/server'
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { getServerSession } from 'next-auth';
export async function proxy(request) {
  const cookieStore = await cookies()
  const { pathname } = request.nextUrl;
  const session = await getServerSession();
  try {
    if (!session) {
      const token = cookieStore.get('manually-session-token')
      const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
      if (decoded !== undefined) {
        return NextResponse.redirect(new URL (`/${decoded.username}`,request.url))
      } else {
        if (pathname == '/login') {
          return NextResponse.redirect('/login')
        } else {
          return NextResponse.redirect('/')
        }
      }
    } else {
      return NextResponse.redirect(new URL (`/${session.user.email.split("@")[0]}`,request.url))
    }
  } catch (error) {
    console.log(error);
  }
}

export const config = {
  matcher: [
    '/',          
    '/login', 
  ],
};