"use client";
import MyTicketsBox from "@components/dashboard/home/MyTicketsBox";
import MyEventsBox from "@components/dashboard/home/MyEventsBox";
import Notification from "@components/dashboard/Notification";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { getUser } from "@/api";
import { convertToJalali } from "@/utils/jalali";
import { UserType } from "@/api/types";

function Page() {
    const { data: user } = useSWR<UserType>("get-user", getUser);

    return (
        <>
            <div className="gap-4 flex flex-col">
                <section className="grid grid-cols-2 gap-4 items-stretch">
                    <div className="col-span-2 lg:col-span-1">
                        <MyTicketsBox />
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <MyEventsBox />
                    </div>
                </section>
                {user?.unseen_notifications?.length ? (
                    <section>
                        <div className="bg-blue300 rounded-2xl px-5 py-3 flex items-center justify-between ">
                            <span className="text-did text-base font-semibold">
                                اطلاعیه ها
                            </span>
                            <Link href="/dashboard/notifications">
                                <span className="bg-did text-white px-2 rounded-md mx-2">
                                    {user.unseen_notifications.length}
                                </span>
                                <span className="text-secondary900 text-sm">
                                    {"اطلاعیه جدید خوانده نشده"}
                                </span>
                            </Link>
                        </div>
                        <div className="border-b-2 border-b-secondary700 border-dashed w-full my-4 px-5"></div>
                        {user.unseen_notifications.map((notif) => (
                            <Notification
                                key={notif.id}
                                title={notif.title}
                                message={notif.message}
                                date={convertToJalali(notif?.create_date, true)}
                                type={notif.type}
                            />
                        ))}
                    </section>
                ) : null}
                {!user?.first_name && (
                    <section className="flex flex-col items-center gap-3 justify-center my-10">
                        <Image
                            src={"/icons/BsEmojiFrown.svg"}
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
                    </section>
                )}
            </div>
        </>
    );
}

export default Page;
