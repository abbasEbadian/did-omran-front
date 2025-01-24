import Image from "next/image";
import LogoLogin from "@/app/components/icons/logo-login.svg";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex">
            <div className="w-1/2 bg-did flex items-center justify-center relative">
                <Image
                    src={LogoLogin}
                    alt="LogoLogin Img"
                    height={420}
                    width={420}
                    className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>

            {children}
        </div>
    );
}
