import { UserType } from "../types";

export type TicketMessageType = {
    id: number;
    text: string;
    user: string;
    create_date: number;
};

export type TicketType = {
    id: number;
    title: string;
    status: "PENDING" | "ASNWERED" | "CLOSED";
    messages: TicketMessageType[];
    create_date: number;
    write_date: number;
};
