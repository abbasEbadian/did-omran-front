"use server";

import { cookies } from "next/headers";

const setToken = async (token: string) => {
    const cookieStore = await cookies();
    cookieStore.set({
        name: "token",
        value: token,
        httpOnly: true,
        path: "/",
    });
};
const getToken = async () => {
    const cookieStore = await cookies();
    return cookieStore.get("token")?.value;
};

export { getToken, setToken };
