"use client";
import MyTiketsBox from "@/app/components/dashboard/home/MyTiketsBox";
import MyEventsBox from "../components/dashboard/home/MyEventsBox";
import Notification from "../components/dashboard/Notification";
import Image from "next/image";
import BsEmojiFrown from "@/app/components/icons/BsEmojiFrown.svg";
import Link from "next/link";
import useSWR from "swr";
import { getUser } from "@/api";
import { convertToJalali } from "@/utils/jalali";

function page() {
    const { data: user } = useSWR("get-user", getUser);
    console.log(user);
    

    return (
        <>
            <div className="gap-4 flex flex-col">
                <section className="grid grid-cols-2 gap-4 items-stretch">
                    <div className="col-span-2 lg:col-span-1">
                        <MyTiketsBox />
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <MyEventsBox />
                    </div>
                </section>
                <section>
                    <div className="bg-blue300 rounded-2xl px-5 py-3 flex items-center justify-between ">
                        <span className="text-did text-base font-semibold">
                            اطلاعیه ها
                        </span>
                        <button className="">
                            <span className="bg-did text-white px-2 rounded-md">
                                2
                            </span>
                            <span className="text-secondary900 text-sm">
                                اطلاعیه جدید خوانده نشده{" "}
                            </span>
                        </button>
                    </div>
                    <div className="border-b-2 border-b-secondary700 border-dashed w-full my-4 px-5"></div>
                    <Notification
                        title="موفقیت"
                        message="ورود به سیستم."
                        date={convertToJalali(user?.last_login, true)}
                        type="success"
                    />
                </section>
                {!user?.first_name && <section className="flex flex-col items-center gap-3 justify-center my-10">
                    <Image
                        src={BsEmojiFrown}
                        alt="star Img"
                        width={100}
                        height={100}
                    />
                    <span className="text-secondary text-2xl font-medium">
                        لطفا مشخصات خود را تکمیل کنید
                    </span>
                    <Link
                        href="/dashboard/profile"
                        className="text-white bg-did rounded-2xl px-6 py-3 text-sm font-medium"
                    >
                        ویرایش اطلاعات
                    </Link>
                </section>}
            </div>
        </>
    );
}

export default page;
