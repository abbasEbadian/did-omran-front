export * from "./auth";
export * from "./user";
export * from "./ticket";

export const build_url = (path: string) => {
    return process.env.NEXT_PUBLIC_API_BASE + path;
}