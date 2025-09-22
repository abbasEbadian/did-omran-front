"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { getUser } from "@/api/user";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import useSWR from "swr";
import { IconClose } from "../icons/comp/IconClose";
import Sidebar from "@components/dashboard/Sidbar";

function Header() {
    const {data: user} = useSWR("get-user", getUser);
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // ✅ مدیریت باز/بسته بودن جست‌وجوی تمام صفحه
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    if (pathname.startsWith("/auth")) {
        return null;
    }

    const handleSearch = () => {
        setIsSearchOpen(false);
        // اینجا میتونی ریدایرکت یا API Call بزنی
    };

    return (
        <header className="bg-white p-2 fixed top-0 z-50 inset-x-0 shadow-custom-shadow">
            <div className="container mx-auto max-w-[1440px]">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={"/icons/Logo-blue.svg"} alt="logo did omran" width={46} height={46}/>
                        <span className="text-did font-bold">دیــد عمــران</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {links.map((item) => {
                            const isActive = pathname && pathname.indexOf(item.href) > -1;
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
                            <Link href="/dashboard/cart" className="relative">
                                <Image src={"/icons/cart-1.svg"} alt="cart" width={100} height={100}
                                       className={"size-7 lg:size-8"}/>
                                <span
                                    className="absolute top-0 right-0 bg-did text-white text-xs rounded-full w-4 h-4 text-center">
                                    {user?.basket.lines.length || 0}
                                </span>
                            </Link>
                            {user && <Link href="/dashboard/notifications" className="relative">
                                <Image
                                    src={user?.unseen_notifications.length ? "/icons/bell-on.svg" : "/icons/bell.svg"}
                                    alt="bell"
                                    width={100}
                                    height={100}
                                    className={"size-7 lg:size-8"}
                                />
                            </Link>}

                            {/* ✅ آیکون جستجو که مودال تمام صفحه باز می‌کند */}
                            <button onClick={() => setIsSearchOpen(true)}>
                                <Image src={"/icons/search.svg"} alt="search" width={100} height={100}
                                       className={"size-7 lg:size-8"}/>
                            </button>
                        </div>
                        {/* Mobile Hamburger */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Image src={"/icons/menu.svg"} alt="menu" width={28} height={28}/>
                        </button>

                        {/* User */}
                        {user ? (
                            <Link
                                href="/dashboard/"
                                className="hidden md:flex bg-did text-white text-sm rounded-2xl px-4 py-2 gap-2 items-center"
                            >
                                {user.username}
                                <Image src={"/icons/user.svg"} alt="user" width={24} height={24}/>
                            </Link>
                        ) : (
                            <Link
                                role="button"
                                href="/auth/"
                                className="hidden md:flex bg-did text-white text-sm rounded-xl px-4 py-2 cursor-pointer"
                            >
                                ورود / ثبت نام
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto",
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {
                    pathname.startsWith("/dashboard") ?
                        <Sidebar closeSidebar={() => setIsMenuOpen(false)}/>
                        : <>
                            <div className="flex justify-between items-center p-4 border-b">
                                <span className="font-bold text-lg">منو</span>
                                <button onClick={() => setIsMenuOpen(false)}>
                                    <Image src={"/icons/close.svg"} alt="close" width={24} height={24}/>
                                </button>
                            </div>
                            <nav className="flex flex-col p-4 gap-4">
                                {links.map((item) => {
                                    const isActive = pathname && pathname.indexOf(item.href) > -1;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "text-dark text-sm hover:text-gray-900",
                                                isActive && "text-did"
                                            )}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.text}
                                        </Link>
                                    );
                                })}
                            </nav>
                            <div className="p-4 border-t">
                                {user ? (
                                    <Link
                                        href="/dashboard/"
                                        className="bg-did text-white text-sm rounded-2xl px-4 py-2 flex gap-2 items-center"
                                    >
                                        {user.username}
                                        <Image src={"/icons/user.svg"} alt="user" width={24} height={24}/>
                                    </Link>
                                ) : (
                                    <Link
                                        role="button"
                                        href="/auth/"
                                        className="bg-did text-white text-sm rounded-2xl px-4 py-2 cursor-pointer block text-center"
                                    >
                                        ورود / ثبت نام
                                    </Link>
                                )}
                            </div>
                        </>

                }
            </div>

            {/* Overlay منو */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}


            {isSearchOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center animate-fadeIn">
                    {/* دکمه بستن */}
                    <button
                        className="absolute top-6 right-8"
                        onClick={() => setIsSearchOpen(false)}
                    >
                        <IconClose className="text-white"/>
                    </button>

                    {/* فرم جستجو */}
                    <div className="flex items-center w-full max-w-2xl border-b-2 border-did px-2 pb-2">
                        <input
                            type="text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="چی میخوای پیدا کنی؟"
                            className="flex-1 bg-transparent outline-none text-white text-2xl placeholder-gray-400"
                            autoFocus
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-did700 rounded-full p-3 flex items-center justify-center hover:bg-did transition"
                        >
                            <Image src={"/icons/search.svg"} alt="search" width={24} height={24}/>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;

const links = [
    {href: "/courses", text: "دوره‌های آموزشی"},
    {href: "/book-store", text: "کتاب‌های آموزشی"},
    {href: "/free-educations", text: "آموزش رایگان"},
    {href: "/exams", text: "آزمون ها"},
    {href: "/events", text: "رویدادها"},
    {href: "/about-us", text: "تماس باما"},
];
