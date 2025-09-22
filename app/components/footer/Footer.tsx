"use client";

import Image from "next/image";
import Link from "next/link";
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
            {/* <div className="2xl:mt-[900px] lg:mt-[600px] mt-[400px]">
                <div className="absolute -bottom-20 w-full z-20 hidden lg:block">
                    <Image
                        src={"/img/footerBg.png"}
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
            </div> */}
            <div className="pt-20 bg-white shadow-custom-shadow mt-16">
                <div className="grid grid-cols-4 container mx-auto gap-8 px-4">
                    <div className="lg:col-span-1 col-span-4">
                        <div className="flex flex-col gap-5">
                            {/* Logo and Address */}
                            <div className="flex flex-col lg:items-start items-center gap-3 text-gray-700">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 font-bold whitespace-nowrap text-2xl  text-did"
                                >
                                    <Image
                                        src={"/icons/Logo-blue.svg"}
                                        alt="DID Omran Logo"
                                        width={70}
                                        height={70}
                                        className="w-full object-cover"
                                    />
                                    دیــد عــمران
                                </Link>
                                <p className="text-gray-500 text-base text-center lg:text-start">
                                    تهران ، پونک ، باغ فیض ، عدل جنوبی ساختمان
                                    رویال رزیدنس ، واحد ۱۷
                                </p>
                            </div>

                            <Link
                                href="#"
                                className="flex items-center justify-between border border-blue700 rounded-full pe-1 ps-4 py-1 hover:bg-gray-100 hover:text-blue700/90 transition-all duration-300"
                            >
                                <span className="text-gray-700">تماس باما</span>
                                <div className="text-gray-700 bg-blue700 text-sm p-3 rounded-full">
                                    <Image
                                        src={"/icons/arrow-right.svg"}
                                        alt="Arrow Right"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </Link>

                            <div className="flex items-center lg:justify-start justify-center gap-1">
                                <Link href="#">
                                    <Image
                                        src={"/aparat.png"}
                                        alt="Aparat"
                                        width={54}
                                        height={54}
                                    />
                                </Link>
                                <Link href="#">
                                    <Image
                                        src={"/Instagram.png"}
                                        alt="Instagram"
                                        width={54}
                                        height={54}
                                    />
                                </Link>
                                <Link href="#">
                                    <Image
                                        src={"/youtube.png"}
                                        alt="Youtube"
                                        width={54}
                                        height={54}
                                    />
                                </Link>
                                <Link href="#">
                                    <Image
                                        src={"/Telegram.png"}
                                        alt="Telegram"
                                        width={54}
                                        height={54}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 col-span-4 lg:order-1 order-2">
                        <div className="flex flex-col lg:items-start items-center lg:px-8 px-2 gap-5 mb-5">
                            <span className="text-gray-700100 font-medium text-xl text-start">
                                درباره ما
                            </span>
                            <p className="text-base text-gray-500 font-light text-justify">
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
                                    <span className="text-gray-700 font-medium text-xl">
                                        تلفن تماس
                                    </span>
                                    <span className="text-gray-500 text-base hover:text-blue700 transition-all duration-300">
                                        021-28429396
                                    </span>
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <span className="text-gray-700 font-medium text-xl">
                                        ایمیل ارتباطی
                                    </span>
                                    <span className="text-gray-500 text-base hover:text-blue700 transition-all duration-300">
                                        didomran@gmail.com
                                    </span>
                                </div>
                            </div>
                            <div>
                                <Link href="#" className="">
                                    <Image
                                        src={"/img/enamad.png"}
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
                    <div className="lg:col-span-1 col-span-4 lg:order-2 order-1">
                        <div className="flex flex-col gap-5 items-center mt-6 lg:mt-0">
                            <span className="text-gray-700100 font-medium text-xl text-start">
                                لینک‌های مفید
                            </span>
                            <div className=" gap-4 flex-col justify-between flex items-center lg:items-start">
                                <Link
                                    href="#"
                                    className="text-gray-500 text-base hover:text-blue700 transition-all duration-300"
                                >
                                    حساب من
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-500 text-base hover:text-blue700 transition-all duration-300"
                                >
                                    دوره‌های آموزشی
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-500 text-base hover:text-blue700 transition-all duration-300"
                                >
                                    آزمون ها
                                </Link>
                                <Link
                                    href="/faq"
                                    className="text-gray-500 text-base hover:text-blue700 transition-all duration-300"
                                >
                                    سوالات متداول
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-500 text-base hover:text-blue700 transition-all duration-300"
                                >
                                    درباره ما
                                </Link>
                                <Link
                                    href=""
                                    className="text-gray-500 text-base hover:text-blue700 transition-all duration-300"
                                >
                                    تماس باما
                                </Link>
                               
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom: Copyright */}
                <div className="border-t border-secondary700 flex items-center justify-center pt-4 container mx-auto mt-9 pb-4">
                    <span className="text-gray-500 text-sm">
                        Copyright © 2012 - 2025 didomran.ir All Rights Reserved.
                    </span>
                </div>
            </div>
        </>
    );
}

export default Footer;
