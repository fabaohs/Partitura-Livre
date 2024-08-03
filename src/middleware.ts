import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middleware");

  // get cookies
  const cookies = request.cookies;

  if (
    request.nextUrl.pathname !== "/" &&
    !cookies.has("next-auth.session-token")
  ) {
    const url = `http://localhost:3000/`;
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
