"use client";

import { getNotifications } from "@/api/notification";
import { NotificationType } from "@/api/notification/types";
import Notification from "@/app/components/dashboard/Notification";
import FilterSelectBox, {
    FilterOption,
} from "@/app/components/FilterSelectTime";
import Modal from "@/app/components/Modal";
import { convertToJalali, DateChecker } from "@/utils/jalali";
import React, { useMemo, useState } from "react";
import { MoonLoader } from "react-spinners";
import useSWR, { useSWRConfig } from "swr";

function NotificationsPage() {
    const [selectedFilter, setSelectedFilter] = useState<string>("all");
    const [showDetail, setShowDetail] = useState<NotificationType | null>();

    const { mutate } = useSWRConfig();
    mutate("get-user");
    mutate("get-notifications");

    const {
        data: notifications,
        error,
        isLoading,
    } = useSWR<NotificationType[]>("get-notifications", getNotifications);

    const filteredNotifications = useMemo(() => {
        if (!notifications) return [];

        return notifications.filter((n) => {
            switch (selectedFilter) {
                case "today":
                    return DateChecker.isToday(n.create_date);
                case "week":
                    return DateChecker.isInLast7Days(n.create_date); // هفته از شنبه شروع بشه
                case "month":
                    return DateChecker.isInLast30Days(n.create_date);
                default:
                    return true;
            }
        });
    }, [notifications, selectedFilter]);

    return (
        <>
            <div className="flex items-center justify-between pb-2 mb-4 border-b-2 border-b-secondary700 border-dashed ">
                <span className="text-secondary">اطلاعیه ها</span>
                <FilterSelectBox
                    options={filterOptions}
                    onChange={(value) => setSelectedFilter(value)}
                />
            </div>
            <div className="flex items-center justify-center min-h-40 w-full flex-col">
                {isLoading ? (
                    <MoonLoader size={50} />
                ) : filteredNotifications?.length ? (
                    filteredNotifications.map((notif) => {
                        return (
                            <div
                                className="w-full"
                                role="button"
                                onClick={() => setShowDetail(notif)}
                                key={notif.id}
                            >
                                <Notification
                                    title={notif.title}
                                    message={notif.message}
                                    date={convertToJalali(
                                        notif.create_date,
                                        true
                                    )}
                                    type={notif.type}
                                />
                            </div>
                        );
                    })
                ) : (
                    <div className="text-gray-500">اطلاعیه‌ای نداری !</div>
                )}
            </div>
            <Modal open={!!showDetail} onClose={() => setShowDetail(null)}>
                {showDetail && (
                    <div className="flex flex-col justify-between h-full">
                        <h4 className="text-lg">{showDetail.title}</h4>
                        <p className="text-did">{showDetail.message}</p>
                        <p className="text-gray-400">
                            {convertToJalali(showDetail.create_date, true)}
                        </p>
                    </div>
                )}
            </Modal>
        </>
    );
}

export default NotificationsPage;

const filterOptions: FilterOption[] = [
    { label: "همه", value: "all" },
    { label: "امروز", value: "today" },
    { label: "این هفته", value: "week" },
    { label: "این ماه", value: "month" },
];
