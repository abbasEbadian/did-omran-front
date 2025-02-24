"use client";

import { getTickets } from "@/api/ticket/get";
import { TicketType } from "@/api/ticket/types";
import { convertToJalali } from "@/utils/jalali";
import useSWR from "swr";
import Link from "next/link";
import TicketStatusBadge from "../../tickets/TicketStatusBadge";

const TicketsList = () => {
    const {
        data: tickets,
    } = useSWR<TicketType[]>("get-tickets", getTickets);

    return (
        <table className="min-w-full">
            <thead className="bg-secondary600">
                <tr>
                    <th className="px-6 py-3 text-center text-dark rounded-s-2xl">
                        عنوان تیکت
                    </th>
                    <th className="px-6 py-3 text-center text-dark">وضعیت</th>
                    <th className="px-6 py-3 text-center text-dark ">
                        آخرین به‌روزرسانی
                    </th>
                    <th className="px-6 py-3 text-center text-dark rounded-e-2xl">
                        عملیات
                    </th>
                </tr>
            </thead>
            <tbody>
                {tickets?.toSorted((a,b)=>b.create_date - a.create_date).map((ticket) => (
                    <tr
                        key={ticket.id}
                        className="border-b-2 border-dashed border-b-secondary700 last:border-b-0"
                    >
                        <td className="px-6 py-4 text-center text-secondary">
                            {ticket.title}
                        </td>
                        <td className="px-6 py-4 text-center justify-items-center">
                            <TicketStatusBadge status={ticket.status} />
                        </td>
                        <td className="px-6 py-4 text-center text-secondary">
                            {convertToJalali(ticket.write_date, true)}
                        </td>
                        <td>
                            <Link
                                href={"/dashboard/tickets/" + ticket.id}
                                className="flex text-did items-center text-sm gap-2  w-fit px-2 py-1 mx-auto"
                            >
                                مشاهده
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TicketsList;
