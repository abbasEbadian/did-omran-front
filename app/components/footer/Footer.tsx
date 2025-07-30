"use client";

import Image from "next/image";
import Link from "next/link";
import LogoWhite from "@/app/components/icons/logo-white.svg";
import ArrowRight from "@/app/components/icons/arrow-right.svg";
import {usePathname} from "next/navigation";

const paths = ["/online-exam", "/auth", "/dashboard"];
function Footer() {
    const pathname = usePathname();
    for (let p of paths)
        if (pathname?.startsWith(p)) {
            return null;
        }

    return (
        <>
            <div className="relative 2xl:mt-[900px] lg:mt-[600px] mt-[400px]">
                <div className="absolute -bottom-20 w-full z-20 hidden lg:block">
                    <Image
                        src={"/footerBg.png"}
                        alt="FooterBg"
                        width={1432}
                        height={1000}
                        className="object-contain w-full xl:translate-y-4"
                    />
                </div>
                <div
                    className="absolute -top-40 left-0 w-full h-40 bg-did z-10"
                    style={{
                        clipPath: "ellipse(150% 100% at 50% 100%)",
                    }}
                ></div>
            </div>
            <div className="bg-gradient-to-b from-did to-[#023653] py-8">
                <div className="grid grid-cols-4 container mx-auto gap-8 px-4">
                    <div className="lg:col-span-1 col-span-4">
                        <div className="flex flex-col gap-5">
                            {/* Logo and Address */}
                            <div className="flex flex-col lg:items-start items-center gap-3 text-white">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 font-bold whitespace-nowrap text-2xl "
                                >
                                    <Image
                                        src={LogoWhite}
                                        alt="DID Omran Logo"
                                        width={70}
                                        height={70}
                                        className="w-full object-cover"
                                    />
                                    دیــد عــمران
                                </Link>
                                <p className="text-white text-sm">
                                    تهران ، پونک ، باغ فیض ، عدل جنوبی ساختمان
                                    رویال رزیدنس ، واحد ۱۷
                                </p>
                            </div>

                            <Link
                                href="#"
                                className="flex items-center justify-between border border-white rounded-full ps-1 pe-4 py-1 hover:bg-did/45 hover:text-blue700/90 transition-all duration-300"
                            >
                                <div className="text-white bg-blue700 text-sm p-3 rounded-full">
                                    <Image
                                        src={ArrowRight}
                                        alt="Arrow Right"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <span className="text-white">تماس باما</span>
                            </Link>

                            <div className="flex items-center justify-between">
                                <Link href="#">
                                    <Image
                                        src={"/aparat.png"}
                                        alt="Aparat"
                                        width={80}
                                        height={80}
                                    />
                                </Link>
                                <Link href="#">
                                    <Image
                                        src={"/Instagram.svg"}
                                        alt="Instagram"
                                        width={80}
                                        height={80}
                                    />
                                </Link>
                                <Link href="#">
                                    <Image
                                        src={"/youtube.png"}
                                        alt="Youtube"
                                        width={80}
                                        height={80}
                                    />
                                </Link>
                                <Link href="#">
                                    <Image
                                        src={"/Telegram.png"}
                                        alt="Telegram"
                                        width={80}
                                        height={80}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 col-span-4">
                        <div className="flex flex-col items-start px-8 gap-5 mb-5">
                            <span className="text-white font-bold text-xl">
                                درباره ما
                            </span>
                            <p className="text-base text-white font-light text-justify">
                                با وجود آموزش‌های چندین ساله دانشگاهی هنوز هم
                                ارتباط بین دانشگاه و صنعت ساختمان خلل‌هایی دارد
                                که فارغ التحصیلان دانشگاهی به ویژه مهندسین عمران
                                و معماری را سردرگم کرده است. ما در دید عمران این
                                خلل‌ها را برطرف کرده و تا ورود شما به بازار کار
                                حرفه‌ای مهندسی در کنارتان هستیم. آنچه در دید
                                عمران بدست‌ می‌آورید دیدگاه و تخصص مهندسی است؛
                                نه صرفا یک پروانه مهندسی!
                            </p>
                        </div>

                        <div className="flex items-center justify-between px-8">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col items-start gap-2">
                                    <span className="text-white font-bold text-base">
                                        تلفن تماس
                                    </span>
                                    <span className="text-white text-sm hover:text-blue700 transition-all duration-300">
                                        021-28429396
                                    </span>
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <span className="text-white font-bold text-base">
                                        ایمیل ارتباطی
                                    </span>
                                    <span className="text-white text-sm hover:text-blue700 transition-all duration-300">
                                        didomran@gmail.com
                                    </span>
                                </div>
                            </div>
                            <div>
                                <Link href="#" className="">
                                    <Image
                                        src={"/enamad.png"}
                                        alt="Enamad"
                                        width={107}
                                        height={117}
                                        className="bg-white rounded-2xl p-4 object-cover w-full"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Useful Links */}
                    <div className="lg:col-span-1 col-span-4">
                        <div className="flex flex-col items-center gap-5">
                            <span className="text-white font-bold text-base">
                                لینک‌های مفید
                            </span>
                            <div className="flex items-start flex-col gap-4">
                                <Link
                                    href="#"
                                    className="text-white text-sm hover:text-blue700 transition-all duration-300"
                                >
                                    حساب من
                                </Link>
                                <Link
                                    href="#"
                                    className="text-white text-sm hover:text-blue700 transition-all duration-300"
                                >
                                    دوره‌های آموزشی
                                </Link>
                                <Link
                                    href="#"
                                    className="text-white text-sm hover:text-blue700 transition-all duration-300"
                                >
                                    آزمون ها
                                </Link>
                                <Link
                                    href="/faq"
                                    className="text-white text-sm hover:text-blue700 transition-all duration-300"
                                >
                                    سوالات متداول
                                </Link>
                                <Link
                                    href="#"
                                    className="text-white text-sm hover:text-blue700 transition-all duration-300"
                                >
                                    درباره ما
                                </Link>
                                <Link
                                    href=""
                                    className="text-white text-sm hover:text-blue700 transition-all duration-300"
                                >
                                    تماس باما
                                </Link>
                               
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom: Copyright */}
                <div className="border-t border-secondary700 flex items-center justify-center pt-4 container mx-auto mt-9">
                    <span className="text-white text-sm">
                        Copyright © 2012 - 2025 DIDomran.ir All Rights Reserved.
                    </span>
                </div>
            </div>
        </>
    );
}

export default Footer;
