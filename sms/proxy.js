import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import * as jose from 'jose'

const publicRoutes = ['/pricing', '/contribute', '/about', '/Blog', '/forgot-password']
const authRoutes = ['/login', '/register']

export async function proxy(request) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next()
  }

  const oauthToken = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  const manualCookie = request.cookies.get('manually-session-token')

  let manualTokenValid = false
  let username = null

  if (manualCookie?.value) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET)
      const { payload } = await jose.jwtVerify(manualCookie.value, secret)
      manualTokenValid = true
      username = payload.username
    } catch {
      manualTokenValid = false
    }
  }

  const isLoggedIn = !!oauthToken || manualTokenValid

  if (!username && oauthToken?.email) {
    username = oauthToken.email.split('@')[0]
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
