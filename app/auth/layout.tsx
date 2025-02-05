import Image from "next/image";
import LogoLogin from "@/app/components/icons/logo-login.svg";
import Link from "next/link";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-row-reverse">
            <div className="w-1/2 bg-did flex items-center justify-center relative">
                <Link href={"/"}>
                    <Image
                        src={LogoLogin}
                        alt="LogoLogin Img"
                        height={420}
                        width={420}
                        className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 2xl:w-80 2xl:h-80 w-60 h-60 scale-x-[-1]"
                    />
                </Link>
            </div>

            {children}
        </div>
    );
}
