import { TicketType } from "@/api/ticket/types";
import { cn } from "@/utils/cn";
import React from "react";
import { ComponentProps } from "react";

type TicketStatusBadgeProps = ComponentProps<"span"> & {
    status?: TicketType["status"];
};

const TicketStatusBadge = ({ status, className }: TicketStatusBadgeProps) => {
    const getStatusColor = (status: TicketType["status"]) => {
        switch (status) {
            case "CLOSED":
                return "bg-blue600";
            case "PENDING":
                return "bg-yellow";
            case "ASNWERED":
                return "bg-primary";
            default:
                return "bg-secendary";
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
    return (
        <span
            className={cn(
                "px-2 py-1 rounded-full text-xs text-white block text-center",
                getStatusColor(status),
                className
            )}
        >
            {getStatusTitle(status)}
        </span>
    );
};

export default React.memo(TicketStatusBadge);
