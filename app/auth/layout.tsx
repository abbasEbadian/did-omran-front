"use client";
import Image from "next/image";
import LogoLogin from "@/app/components/icons/logo-login.svg";
import Link from "next/link";
import CircularText from "../components/animated/CircularText";
import TrueFocus from "../components/animated/TrueFocus";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex flex-row-reverse">
            <div className="w-[45%] bg-did flex items-center justify-center relative">
                <div
                    style={{
                        width: "100%",
                        height: "600px",
                        position: "relative",
                    }}
                >
                    {/* <Particles
                        particleColors={["#ffffff", "#ffffff"]}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                    /> */}
                </div>
                <Link
                    href={"/"}
                    className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 grid"
                >
                    <CircularText
                        text="DID*OMRAN*LEARNING*CENTER*"
                        onHover="speedUp"
                        spinDuration={20}
                        className="col-start-1 col-end-2 row-start-1 row-end-2 -top-3 relative left-2 z-10"
                    />
                    <Image
                        src={LogoLogin}
                        alt="LogoLogin Img"
                        height={420}
                        width={420}
                        className="2xl:w-80 2xl:h-80 w-60 h-60 scale-x-[-1] col-start-1 col-end-2 row-start-1 row-end-2 z-0"
                    />
                </Link>
            </div>
            <div className="w-[55%] bg-white">
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
                    {children}
                </div>
            </div>
        </div>
    );
}
