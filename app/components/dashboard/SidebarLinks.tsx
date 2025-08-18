"use client";

import React, {useMemo} from "react";
import Image from "next/image";

import Link from "next/link";
import {usePathname} from "next/navigation";
import useSWR from "swr";
import {UserType} from "@/api/types";
import {getUser} from "@/api";

const Sidebar = () => {
    const pathname = usePathname();
    const {data: user} = useSWR<UserType>("get-user", getUser);

    const sidebarItems = useMemo(
        () => [
            {id: 1, text: "پیشخوان", icon: "/icons/Home.svg", url: "/dashboard"},
            {
                id: 2,
                text: "ویرایش اطلاعات",
                icon: "/icons/edit-2.svg",
                url: "/dashboard/profile",
            },
            {
                id: 3,
                text: "دوره‌های خریداری شده",
                icon: "/icons/Bag.svg",
                url: "/dashboard/orders",
            },
            {
                id: 4,
                text: "آمار آزمون",
                icon: "/icons/chart-vertical.svg",
                url: "/dashboard/statistics",
            },
            {
                id: 5,
                text: "تیکت‌ها",
                icon: "/icons/message-square.svg",
                url: "/dashboard/tickets",
            },
            {
                id: 6,
                text: "اطلاعیه‌ها",
                icon: "/icons/Activity.svg",
                url: "/dashboard/notifications",
                badge: user?.unseen_notifications?.length ?? 0
            },
            {id: 7, text: "خروج", icon: "/icons/IoExitOutline.svg", url: "/logout"},
        ],
        [user]
    );
    const activeItem = sidebarItems.find((item) => item.url === pathname)?.id;

    return (
        <div className="text-did/60 p-4 pe-0">
            {sidebarItems.map((item) => (
                <Link
                    key={item.id}
                    href={item.url}
                    className={`flex items-center p-3 my-2 rounded-lg transition-all duration-200 relative ${
                        activeItem === item.id
                            ? "bg-blue500/50 opacity-100"
                            : "opacity-50 hover:opacity-75"
                    }`}
                >
                    <div className="w-6 h-6 relative">
                        <Image
                            src={item.icon}
                            alt={item.text}
                            width={24}
                            height={24}
                            className="filter"
                        />
                    </div>

                    <span className="mr-3 text-did">{item.text}</span>

                    {activeItem === item.id && (
                        <div className="absolute left-0 w-1 h-6 bg-did rounded-full mr-4"></div>
                    )}
                    {(item?.badge ?? 0) > 0 && (
                        <span
                            className="absolute left-4 w-6 h-6 grid place-items-center bg-did rounded-full mr-4 text-white text-xs">{item.badge}</span>
                    )}
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;
