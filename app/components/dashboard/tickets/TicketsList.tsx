"use client";

import { getTickets } from "@/api/ticket/get";
import { TicketType } from "@/api/ticket/types";
import { convertToJalali } from "@/utils/jalali";
import useSWR from "swr";

const TicketsList = () => {
    const {
        data: tickets,
        error,
        isLoading,
    } = useSWR<TicketType[]>("get-tickets", getTickets);

    const getStatusColor = (status: TicketType["status"]) => {
        switch (status) {
            case "CLOSED":
                return "bg-blue600 text-secondary800";
            case "PENDING":
                return "bg-yellow text-yellow-800";
            case "ASNWERED":
                return "bg-primary text-blue-800";
            default:
                return "bg-secendary text-gray-800";
        }
    };
    const getStatusTitle = (status: TicketType["status"]) => {
        switch (status) {
            case "CLOSED":
                return "بسته شده";
            case "PENDING":
                return "در انتظار پاسخ";
            case "ASNWERED":
                return "پاسخ داده شده";
            default:
                return "نامشخص";
        }
    };
    console.log(tickets?.length);
    

    return (
        <table className="min-w-full">
            <thead className="bg-secondary600">
                <tr>
                    <th className="px-6 py-3 text-center text-dark rounded-s-2xl">
                        عنوان تیکت
                    </th>
                    <th className="px-6 py-3 text-center text-dark">وضعیت</th>
                    <th className="px-6 py-3 text-center text-dark rounded-e-2xl">
                        آخرین به‌روزرسانی
                    </th>
                </tr>
            </thead>
            <tbody>
                {tickets?.map((ticket) => (
                    <tr
                        key={ticket.id}
                        className="border-b-2 border-dashed border-b-secondary700 last:border-b-0"
                    >
                        <td className="px-6 py-4 text-center text-secondary">
                            {ticket.title}
                        </td>
                        <td className="px-6 py-4 text-center justify-items-center">
                            <span
                                className={`px-2 py-2 rounded-full text-sm text-white  max-w-32 w-32 min-w-32 block  ${getStatusColor(
                                    ticket.status
                                )}`}
                            >
                                {getStatusTitle(ticket.status)}
                            </span>
                        </td>
                        <td className="px-6 py-4 text-center text-secondary">
                            {convertToJalali(ticket.write_date, true)}
                        </td>
                    </tr>

                ))}
            </tbody>
        </table>
    );
};

export default TicketsList;
