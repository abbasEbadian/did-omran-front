import { OrderType } from "@/api/order/types";
import React from "react";


interface StatusBadgeProps {
    status: OrderType["status"];
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    let bgColor: string;
    let textColor: string;
    let statusText: string;

    switch (status) {
        case "PAID":
            bgColor = "bg-did";
            textColor = "text-white";
            statusText = "موفق";
            break;
        case "CANCELLED":
            bgColor = "bg-accent";
            textColor = "text-white";
            statusText = "ناموفق";
            break;
        case "PENDING":
            bgColor = "bg-purple100";
            textColor = "text-white";
            statusText = "در انتظار پرداخت";
            break;
        default:
            bgColor = "bg-blue";
            textColor = "text-white";
            statusText = "نامعلوم";
    }

    return (
        <span
            className={`inline-flex items-center px-8 py-1 rounded-2xl text-sm font-medium ${bgColor} ${textColor}`}
        >
            {statusText}
        </span>
    );
};

export default StatusBadge;
