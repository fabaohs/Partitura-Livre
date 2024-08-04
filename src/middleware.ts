import { NextRequest, NextResponse } from "next/server";

// ?TODO: IMPLEMENT THE AUTH MIDDLEWARE WITH NEXT AUTH
// ?TODO: THIS -> export { auth as middleware } from "./auth"

export function middleware(request: NextRequest) {
  const cookies = request.cookies;

  if (
    request.nextUrl.pathname !== "/" &&
    !cookies.has("next-auth.session-token")
  ) {
    // ?TODO: IMPLEMENT DYNAMIC REDIRECT
    const url = `http://localhost:3000/`;
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
