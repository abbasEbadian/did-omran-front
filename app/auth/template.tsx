import LogoLogin from "@/app/components/icons/logo-login.svg";
import * as motion from "motion/react-client";
export default function Template({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <motion.div
            initial={{y: -8, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            className="min-h-screen flex flex-row-reverse w-1/2"
        >
            {children}
        </motion.div>
    );
}
