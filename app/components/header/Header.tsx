"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import SearchIcon from "@/app/components/icons/search.svg";
import CartIcon from "@/app/components/icons/cart-1.svg";
import UserIcon from "@/app/components/icons/user.svg";
import Logo from "@/app/components/icons/Logo-blue.svg";
import { getUser } from "@/api";

async function Header() {
    const user = await getUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white p-4 shadow-md">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={Logo}
                            alt="Logo did omran"
                            width={46}
                            height={46}
                            priority
                        />
                        <span className="text-did font-bold hidden md:block">
                            دیــد عمــران
                        </span>
                    </Link>

                    {/* Hamburger Menu (Mobile) */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-gray-800 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>

                    {/* Navigation Links (Desktop) */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="#" className="nav-link">
                            آموزش های رایگان
                        </Link>
                        <Link href="#" className="nav-link">
                            کتاب های آموزشی
                        </Link>
                        <Link href="#" className="nav-link">
                            آزمون ها
                        </Link>
                        <Link href="#" className="nav-link">
                            دوره های آموزشی
                        </Link>
                        <Link href="#" className="nav-link">
                            تماس باما
                        </Link>
                    </nav>

                    {/* User Section */}
                    <div className="hidden md:flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <Link href="#">
                                <CartIcon className="icon" />
                            </Link>
                            <Link href="/">
                                <SearchIcon className="icon" />
                            </Link>
                        </div>
                        {user ? (
                            <Link
                                href="/dashboard/"
                                className="bg-did text-white text-sm rounded-2xl px-4 py-2 flex gap-2 items-center"
                            >
                                {user.username}
                                <UserIcon className="icon" />
                            </Link>
                        ) : (
                            <Link
                                href="/auth/"
                                className="bg-did text-white text-sm rounded-2xl px-4 py-2"
                            >
                                ورود / ثبت نام
                            </Link>
                        )}
                    </div>
                </div>

                {/* Mobile Menu (Dropdown) */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4">
                        <nav className="flex flex-col gap-4">
                            <Link href="#" className="nav-link">
                                آموزش های رایگان
                            </Link>
                            <Link href="#" className="nav-link">
                                کتاب های آموزشی
                            </Link>
                            <Link href="#" className="nav-link">
                                آزمون ها
                            </Link>
                            <Link href="#" className="nav-link">
                                دوره های آموزشی
                            </Link>
                            <Link href="#" className="nav-link">
                                تماس باما
                            </Link>
                        </nav>
                        <div className="mt-4 flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <Link href="#">
                                    <CartIcon className="icon" />
                                </Link>
                                <Link href="/">
                                    <SearchIcon className="icon" />
                                </Link>
                            </div>
                            {user ? (
                                <Link
                                    href="/dashboard/"
                                    className="bg-did text-white text-sm rounded-2xl px-4 py-2 flex gap-2 items-center"
                                >
                                    {user.username}
                                    <UserIcon className="icon" />
                                </Link>
                            ) : (
                                <Link
                                    href="/auth/"
                                    className="bg-did text-white text-sm rounded-2xl px-4 py-2"
                                >                                       ورود / ثبت نام
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;