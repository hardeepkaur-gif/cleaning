import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { SITE_INDEXABLE } from "@/lib/site";

const legacyRedirects: Record<string, string> = {
  "/carpet-cleaning": "/carpet-cleaning-london",
  "/gutter-cleaning": "/gutter-cleaning-london",
};

function withNoIndex(response: NextResponse) {
  if (!SITE_INDEXABLE) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  const destination = legacyRedirects[pathname];

  if (destination) {
    return withNoIndex(
      NextResponse.redirect(new URL(destination, request.url), 301),
    );
  }

  return withNoIndex(NextResponse.next());
}

export const config = {
  matcher: ["/carpet-cleaning", "/carpet-cleaning/", "/gutter-cleaning", "/gutter-cleaning/"],
};
