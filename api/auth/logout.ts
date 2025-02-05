"use server";
import { unstable_expireTag, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { getUser } from "../user";

export async function logout() {
    (await cookies()).delete("token");
    revalidateTag("profile");
    return redirect("/?reload=true", RedirectType.replace);
}
