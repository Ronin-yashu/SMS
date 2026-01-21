import { NextResponse } from 'next/server'

export function proxy(request) {
  return NextResponse.redirect(new URL('/login', request.url))
}
export const config = {
  matcher: [
    {
      missing: [{ type: 'cookie', key: 'session', value: 'active' }],
    },
  ],
}
