import { CourseType } from "../types";
import { EventType } from "@/api/event/types";

export type OrderType = {
    id: number;
    uuid: string;
    code: string;
    payment_date: number;
    price: number;
    final_price: number;
    status: "PAID" | "CANCELLED" | "PENDING";
    create_date: string;
    lines: OrderLineType[];

}

export type OrderLineType = {
    id: number;
    course: CourseType;
    event: EventType;
    price: number;
    license_key?: string;
}