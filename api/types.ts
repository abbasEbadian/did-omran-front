import { NotificationType } from "./notification/types";
import { OrderType } from "./order/types";

export * from "./exam/types";
export * from "./course/types";

export type UserType = {
    id: number;
    username: string;
    email: string | undefined;
    first_name: string | undefined;
    last_name: string | undefined;
    full_name: string | undefined;
    avatar: string | undefined;
    is_staff: boolean;
    date_joined: number;
    last_login: number;
    unseen_notifications: NotificationType[];
    basket: OrderType;
};
