import { NextResponse } from "next/server";


// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  //   return NextResponse.redirect(new URL('/home', request.url))
  console.log("middleware called", request);
}

// export const config = {
//   matcher: '/about/:path*',
// }
