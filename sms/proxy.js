import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

const publicRoutes = ['/pricing', '/contribute', '/about', '/Blog', '/forgot-password']
const authRoutes = ['/login', '/register']

export async function proxy(request) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next()
  }

  const oauthToken = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  const manualCookie = request.cookies.get('manually-session-token')

  const isLoggedIn = !!oauthToken || !!manualCookie?.value

  let username = null
  if (oauthToken?.email) {
    username = oauthToken.email.split('@')[0]
  } else if (manualCookie?.value) {

    try {
      const base64Payload = manualCookie.value.split('.')[1]
      const decoded = JSON.parse(atob(base64Payload))
      username = decoded.username
    } catch {
    }
  }

  if (isLoggedIn && username) {
    if (authRoutes.includes(pathname) || pathname === '/') {
      return NextResponse.redirect(new URL(`/${username}`, request.url))
    }
  }

  const isPublic = publicRoutes.includes(pathname) || authRoutes.includes(pathname) || pathname === '/'
  if (!isLoggedIn && !isPublic) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico).*)'],
}
