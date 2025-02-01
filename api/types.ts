export * from "./exam/types";

export type User = {
    id: number;
    username: string;
    email: string | undefined;
    first_name: string | undefined;
    last_name: string | undefined;
    full_name: string | undefined;
    avatar: string | undefined;
    is_staff: boolean;
    date_joined: string;
    last_login: string;
};
