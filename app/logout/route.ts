"use server";

import { logout } from "@/api/auth/logout";

export async function GET() {
    return await logout()
}
