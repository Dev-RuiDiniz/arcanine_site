import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  if (process.env.FRONTEND_ONLY !== 'true') {
    return NextResponse.next()
  }

  const pathname = request.nextUrl.pathname

  if (pathname.startsWith('/api/')) {
    return NextResponse.json(
      { error: 'API indisponível nesta versão de verificação.' },
      { status: 404 }
    )
  }

  return new NextResponse('Indisponível nesta versão de verificação.', {
    status: 404,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
    },
  })
}

export const config = {
  matcher: ['/admin/:path*', '/login', '/api/:path*'],
}
