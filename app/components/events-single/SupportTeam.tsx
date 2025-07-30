import React from "react";
import WarningCircle from "@/app/components/icons/warning-circle.svg";
import Tell from "@/app/components/icons/tell.svg";
import Image from "next/image";
function SupportTeam() {
    return (
        <>
            <div
                className="flex gap-4 px-4 lg:px-0"
                id="SupportTeam"
            >
                <div className="grow">
                    <div className="flex flex-col lg:items-start items-center gap-4 grow">
                        <span className="text-did text-xl font-black text-center lg:text-start border-b-2 border-dashed border-secondary700 w-full pb-4">
                            پشتیبانی و پاسخگویی در دید عمران
                        </span>
                        <div className="flex flex-col items-start justify-start gap-4 bg-white rounded-2xl p-8 shadow-custom-shadow">
                            <p className="text-secondary text-sm mb-8">
                                اگر در زمان تهیه بلیط وبینار، با مشکلات فنی
                                روبرو شدید حتما با مهندس زهرا دشتی از طریق شماره
                                تماس 09336474385 (شنبه تا چهارشنبه از 8 تا 13 و
                                پنج شنبه از 8 تا 10) در ارتباط باشید.
                            </p>
                            <div className="flex items-center  justify-start gap-1  ">
                                <Image
                                    src={WarningCircle}
                                    alt="Profile Img"
                                    height={24}
                                    width={24}
                                />
                                <span className="text-secondary text-sm">
                                    اگر در زمان تهیه بلیط وبینار، با مشکلات فنی
                                    روبرو شدید
                                </span>
                            </div>
                            <div className="flex items-center justify-start gap-1   ">
                                <Image
                                    src={Tell}
                                    alt="Profile Img"
                                    height={24}
                                    width={24}
                                />
                                <span className="text-secondary text-base">
                                    شماره تماس پشتیبانی:  
                                </span>
                                <span className="text-dark text-xl font-bold">
                                    09336474385
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    src={"/img/support.png"}
                    alt="Profile Img"
                    height={242}
                    width={367}
                    className="object-cover rouned-2xl h-full"
                />
            </div>
        </>
    );
}

export default SupportTeam;
