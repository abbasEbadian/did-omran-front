import { UserType } from "../types";

export type TicketMessageType = {
    id: number;
    text: string;
    user: string;
    create_date: number;
    from_support: boolean;
    file?: string;
};

export type TicketType = {
    id: number;
    title: string;
    status: "PENDING" | "ANSWERED" | "CLOSED";
    messages: TicketMessageType[];
    create_date: number;
    write_date: number;
};
