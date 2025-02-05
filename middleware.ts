import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getToken } from "./auth";

const MUST_AUTH = ["/dashboard", "/online-exam"];

const get_login_url = (request: NextRequest) => {
    return new URL(
        "/auth?next=" + request.nextUrl.pathname,
        request.nextUrl.origin
    ).toString();
};

const get_dashboard_url = (request: NextRequest) => {
    return new URL("/dashboard", request.nextUrl.origin).toString();
};

export async function middleware(request: NextRequest, response: NextResponse) {
    const token = await getToken();

    if (token && request.nextUrl.pathname.startsWith("/auth"))
        return NextResponse.redirect(get_dashboard_url(request));
    
    for (let p of MUST_AUTH) {
        if (!token && request.nextUrl.pathname.startsWith(p))
            return NextResponse.redirect(get_login_url(request));
    }

    return NextResponse.next({
        headers: {
            ...response.headers,
            "x-path": request.nextUrl.pathname,
        },
    });
}

export const config = {
    matcher:
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
