import Link from "next/link";
import React from "react";
import Image from "next/image";
import Search from "@/app/components/icons/search.svg";
import Cart from "@/app/components/icons/cart-1.svg";
import User from "@/app/components/icons/user.svg";
import Logo from "@/app/components/icons/Logo-blue.svg";
import { getUser } from "@/api/user";

async function Header() {
    const user = await getUser();

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
                        <div className="flex  items-center gap-8">
                            <Link
                                href="#"
                                className="text-dark text-sm hover:text-gray-900"
                            >
                                آموزش های رایگان
                            </Link>
                            <Link
                                href="#"
                                className="text-dark text-sm hover:text-gray-900"
                            >
                                کتاب های آموزشی
                            </Link>
                            <Link
                                href="#"
                                className="text-dark text-sm hover:text-gray-900"
                            >
                                آزمون ها
                            </Link>
                            <Link
                                href="#"
                                className="text-dark text-sm hover:text-gray-900"
                            >
                                دوره های آموزشی
                            </Link>
                            <Link
                                href="#"
                                className="text-dark text-sm hover:text-gray-900"
                            >
                                تماس باما{" "}
                            </Link>
                        </div>
                        <div className="text-xl font-bold text-gray-800 flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <Link href="#">
                                    <Image
                                        src={Cart}
                                        alt="logo did omran"
                                        width={34}
                                        height={34}
                                    />
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
                                    href="/auth/"
                                    className="bg-did text-white text-sm rounded-2xl px-4 py-2"
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

export default React.memo(Header);
