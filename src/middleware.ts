import { NextResponse, type NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

// Create the internationalization middleware
const handleI18nRouting = createMiddleware(routing)

export async function middleware(request: NextRequest) {
  // Handle internationalization first
  const i18nResponse = handleI18nRouting(request)

  // If i18n middleware wants to redirect or rewrite, respect that
  if (i18nResponse) {
    // Add custom headers to the i18n response
    i18nResponse.headers.set('x-pathname', request.nextUrl.pathname)
    return i18nResponse
  }

  // If no i18n handling needed, continue with normal response
  const response = NextResponse.next()
  response.headers.set('x-pathname', request.nextUrl.pathname)

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
