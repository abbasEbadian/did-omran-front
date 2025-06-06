import { CourseType } from "../types";

export type OrderType = {
    id: number;
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
    price: number;
}