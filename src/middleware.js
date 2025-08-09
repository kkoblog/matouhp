import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "255cf29b-cc81-4bf0-b1d2-78b749b2d3bd");
  requestHeaders.set("x-createxyz-project-group-id", "ff0a2523-6c27-4a54-abf7-7466a958bfb4");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}