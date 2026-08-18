import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const legacyRedirects: Record<string, string> = {
  "/carpet-cleaning": "/carpet-cleaning-london",
  "/gutter-cleaning": "/gutter-cleaning-london",
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  const destination = legacyRedirects[pathname];

  if (destination) {
    return NextResponse.redirect(new URL(destination, request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/carpet-cleaning", "/carpet-cleaning/", "/gutter-cleaning", "/gutter-cleaning/"],
};
