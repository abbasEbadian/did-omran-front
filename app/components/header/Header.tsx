"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import Search from "@/app/components/icons/search.svg";
import Cart from "@/app/components/icons/cart-1.svg";
import User from "@/app/components/icons/user.svg";
import Logo from "@/app/components/icons/Logo-blue.svg";
import { getUser } from "@/api/user";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import useSWR from "swr";

function Header() {
    const { data: user } = useSWR("get-user", getUser);
    const pathname = usePathname();
    if (pathname.startsWith("/auth")) {
        return null;
    }
    return (
        <>
            <div className="bg-white p-4">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src={Logo}
                                alt="logo did omran"
                                width={46}
                                height={46}
                            />
                            <span className="text-did font-bold">
                                دیــد عمــران
                            </span>
                        </Link>
                        <div className="flex items-center gap-8">
                            {links.map((item) => {
                                const isActive =
                                    pathname &&
                                    pathname.indexOf(item.href) > -1;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "text-dark text-sm hover:text-gray-900",
                                            isActive && "text-did"
                                        )}
                                    >
                                        {item.text}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="text-xl font-bold text-gray-800 flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/dashboard/cart"
                                    className="relative"
                                >
                                    <Image
                                        src={Cart}
                                        alt="logo did omran"
                                        width={34}
                                        height={34}
                                    />
                                    <span className="absolute top-0 right-0 bg-did text-white text-xs rounded-full bg-blue-500 w-4 h-4 text-center">
                                        {user?.basket.lines.length || 0}
                                    </span>
                                </Link>
                                <Link href="/">
                                    <Image
                                        src={Search}
                                        alt="logo did omran"
                                        width={34}
                                        height={34}
                                    />
                                </Link>
                            </div>
                            {user ? (
                                <Link
                                    href="/dashboard/"
                                    className="bg-did text-white text-sm rounded-2xl px-4 py-2 flex gap-2"
                                >
                                    {user.username}
                                    <Image
                                        src={User}
                                        alt="user"
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                            ) : (
                                <Link
                                    role="button"
                                    href="/auth/"
                                    className="bg-did text-white text-sm rounded-2xl px-4 py-2 cursor-pointer"
                                >
                                    ورود / ثبت نام
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;

const links = [
    { href: "/free-package", text: "آموزش های رایگان" },
    { href: "/book-store", text: "کتاب های آموزشی" },
    { href: "/exams", text: "آزمون ها" },
    { href: "/courses", text: "دوره های آموزشی" },
    { href: "/about-us", text: "تماس باما" },
];
