import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  if (
    request?.nextUrl?.pathname === "/" &&
    request?.cookies?.get("userData")?.value &&
    request?.cookies?.get("auth")?.value
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  } else if (
    request?.nextUrl?.pathname === "/dashboard" &&
    !request?.cookies?.get("userData")?.value &&
    !request?.cookies?.get("auth")?.value
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
export const config = {
  matcher: ["/", "/dashboard"],
};
