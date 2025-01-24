import { NextRequest, NextResponse } from "next/server";
import { getToken } from "./auth";

const NO_AUTH = ['/login-register'];
const MUST_AUTH = ['/dashboard'];
const NEUTRAL = ['/'];

export async function middleware(req: NextRequest) {    
    const token = await getToken()
    if(NEUTRAL.includes(req.nextUrl.pathname)) return NextResponse.next();
    if(token && NO_AUTH.includes(req.nextUrl.pathname)) return NextResponse.redirect('/dashboard');
    const loginUrl = new URL('/login-register', req.nextUrl.origin).toString();
    if(!token && MUST_AUTH.includes(req.nextUrl.pathname)) return Promise.resolve(NextResponse.redirect(loginUrl));
    return NextResponse.next();
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
}
