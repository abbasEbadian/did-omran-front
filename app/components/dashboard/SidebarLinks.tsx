"use client";
import React, { useState } from "react";
import Image from "next/image";

// وارد کردن آیکون‌ها
import Activity from "@/app/components/icons/Activity.svg";
import IoExitOutline from "@/app/components/icons/IoExitOutline.svg";
import Home from "@/app/components/icons/Home.svg";
import Chart from "@/app/components/icons/chart-vertical.svg";
import Bag from "@/app/components/icons/Bag.svg";
import MessageSquare from "@/app/components/icons/message-square.svg";
import Edit from "@/app/components/icons/edit-2.png";

const sidebarItems = [
    { id: 1, text: "پیشخوان", icon: Home, url: "/dashboard" },
    { id: 2, text: "ویرایش اطلاعات", icon: Edit, url: "/dashboard/profile" },
    {
        id: 3,
        text: "دوره های خریداری شده",
        icon: Bag,
        url: "/dashboard/courses",
    },
    { id: 4, text: "آمار آزمون", icon: Chart, url: "/dashboard/courses" },
    {
        id: 5,
        text: "تیکت های پشتیبانی",
        icon: MessageSquare,
        url: "/dashboard/tickets",
    },
    {
        id: 6,
        text: "اطلاعیه ها",
        icon: Activity,
        url: "/dashboard/notifications",
    },
    { id: 7, text: "خروج", icon: IoExitOutline, url: "/logout" },
];

const Sidebar: React.FC = () => {
    const [activeItem, setActiveItem] = useState<number>(1);

    return (
        <div className="text-did/60 p-4 pe-0">
            {sidebarItems.map((item) => (
                <div
                    key={item.id}
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
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
