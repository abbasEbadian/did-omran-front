"use client";
import Image from "next/image";
import LogoLogin from "@/app/components/icons/logo-login.svg";
import Link from "next/link";
import CircularText from "../components/animated/CircularText";
import TrueFocus from "@components/animated/TrueFocus";
import { cn } from "@/utils/cn";
import { Suspense } from "react";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex flex-row-reverse -mt-[77px] overflow-clip ~sm:flex-col ~sm:bg-white">
            <div className="w-full sm:w-[40%] bg-did flex items-center justify-center relative ~sm:g-[h-[200px],mb-8] ~sm:hidden">
                <Link
                    href={"/"}
                    className={cn(
                        "absolute",
                        "sm:g-[right-0,top-1/2,translate-x-1/2,-translate-y-1/2] grid"
                    )}
                >
                    <CircularText
                        text="DID*OMRAN*LEARNING*CENTER*"
                        onHover="speedUp"
                        spinDuration={20}
                        className="sm:g-[col-start-1,col-end-2,row-start-1,row-end-2,-top-3,relative,left-2] z-10"
                    />
                    <Image
                        src={LogoLogin}
                        alt="LogoLogin Img"
                        height={420}
                        width={420}
                        className="size-[220px] sm:g-[size-[330px],scale-x-[-1],col-start-1,col-end-2,row-start-1,row-end-2] z-0"
                    />
                </Link>
            </div>
            <div className="w-full sm:w-[60%] bg-white ~sm:h-full">
                <div className="w-full p-8  rounded-lg flex items-center justify-center flex-col mx-auto h-full">
                    <h2 className="text-2xl mb-8 font-bold text-center text-secondary800 flex justify-center gap-6">
                        ورود به
                        <TrueFocus
                            sentence="دید عمران"
                            manualMode={false}
                            blurAmount={2}
                            borderColor="did"
                            animationDuration={1}
                            pauseBetweenAnimations={0.5}
                        />
                    </h2>
                    <Suspense>
                    {children}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
