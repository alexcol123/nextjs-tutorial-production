import { NextResponse } from 'next/server'

export function middleware(request) {
  // return Response.json({
  //   msg: 'hello there',
  // })

  console.log('route restricted')
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  // matcher: ['/about/:path*', '/tasks/:path*'],
  matcher: ['/about/:path*'],
}
