import Image from "next/image";
import profile2 from "@/public/img/profile2.jpg";
import Link from "next/link";
import SidebarLinks from "./SidebarLinks";
import { getUser } from "@/api/user";
import { User } from "@/api/types";
import { convertToJalali } from "@/utils/jalali";
import React from "react";

async function Sidebar() {
    const user: User = await getUser();

    return (
        <>
            <div className=" h-screen bg-did/10 rounded-s-2xl py-4 mb-3">
                <div className="flex flex-col items-center gap-3 justify-center border-b-2 border-b-secondary800 border-dashed pb-4 mx-8">
                    <span className="text-blue600 text-xl font-semibold mb-4">
                        داشبورد
                    </span>
                    <Image
                        src={user.avatar ?? profile2}
                        alt="profile2 Img"
                        height={1024}
                        width={1024}
                        className="object-cover rounded-full w-20 h-20"
                    />
                    <span className="text-dark text-xl">
                        {user.full_name || 'کاربر مهندس'}
                    </span>
                    <Link
                        href="/dashboard/profile"
                        className="text-did text-xs"
                    >
                        ویرایش پروفایل
                    </Link>
                </div>
                <div className="flex flex-col items-start gap-2 w-full px-8 pt-4 text-sm">
                    <div className="flex items-center justify-between w-full">
                        <span className="text-blue">ثبت نام</span>
                        <span className="font-semibold  text-blue800">
                            {convertToJalali(user.date_joined)}
                        </span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <span className="text-blue">شماره موبایل</span>
                        <span className="font-semibold  text-blue800">
                            {user.username}
                        </span>
                    </div>
                </div>
                <SidebarLinks />
            </div>
        </>
    );
}

export default React.memo(Sidebar);
