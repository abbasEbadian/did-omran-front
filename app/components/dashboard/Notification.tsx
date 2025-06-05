"use client";

import React, { useState } from "react";
import pin2 from "@/app/components/icons/pin-2.svg";
import InfoCircle from "@/app/components/icons/info-circle.svg";
import ShieldCross from "@/app/components/icons/shield-cross.svg";
import Image from "next/image";
import { NotificationType } from "@/api/notification/types";
import Modal from "../Modal";
import { convertToJalali } from "@/utils/jalali";

const Notification = ({ title, message, date, type }: NotificationProps) => {
    const [modal, setModal] = useState(false);

    const getNotificationClass = () => {
        switch (type) {
            case "SUCCESS":
                return "text-primary";
            case "WARNING":
                return "text-accent";
            case "INFO":
                return "text-blue";
        }
    };
    const getNotificationIcon = () => {
        switch (type) {
            case "SUCCESS":
                return ShieldCross;
            case "WARNING":
                return InfoCircle;
            case "INFO":
                return pin2;
            case "FAILURE":
                return pin2;
        }
    };

    return (
        <>
            <div
                onClick={() => setModal(true)}
                role="button"
                className={`bg-white100 border border-did/15 rounded-2xl px-4 py-2 flex items-center gap-4 mb-2 w-full `}
            >
                <Image
                    src={getNotificationIcon()}
                    width={35}
                    height={35}
                    alt="icon"
                />
                <div className="flex flex-col items-start gap-1">
                    <h3 className={`font-bold ${getNotificationClass()}`}>
                        {title}
                    </h3>
                    <p className="text-sm text-secondary">{message}</p>
                    <p className="text-xs text-secondary800 mt-2">{date}</p>
                </div>
            </div>
            <Modal open={modal} onClose={() => setModal(false)}>
                <div className="flex flex-col justify-between h-full">
                    <h4 className="text-lg">{title}</h4>
                    <p className="text-did">{message}</p>
                    <p className="text-gray-400">{date}</p>
                </div>
            </Modal>
        </>
    );
};
interface NotificationProps {
    title: string;
    message: string;
    date: string;
    type: NotificationType["type"];
}
export default Notification;
