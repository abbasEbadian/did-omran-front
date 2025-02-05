import { CourseType } from "../types";

export type OrderType = {
    id: number;
    code: string;
    payment_date: number;
    price: number;
    final_price: number;
    status: string;
    create_date: string;
    lines: OrderLineType[];

}

export type OrderLineType = {
    id: number;
    course: CourseType;
    price: number;
}