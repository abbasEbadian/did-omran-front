import { NextRequest, NextResponse } from "next/server";
import { getToken } from "./auth";

const NO_AUTH = ['/auth', '/auth/otp'];
const MUST_AUTH = ['/dashboard'];
const PUBLIC_URLS = ['/'];

export async function middleware(req: NextRequest) {   
    const token = await getToken()
    if(PUBLIC_URLS.includes(req.nextUrl.pathname)) return NextResponse.next();
    if(token && req.nextUrl.pathname.startsWith('/auth')) return NextResponse.redirect(new URL('/dashboard', req.nextUrl.origin).toString());
    const loginUrl = new URL('/auth', req.nextUrl.origin).toString();
    if(!token && req.nextUrl.pathname.startsWith('/dashboard')) return Promise.resolve(NextResponse.redirect(loginUrl));
    return NextResponse.next();
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
}
