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
            className="w-full flex items-center justify-center"
        >
            {children}
        </motion.div>
    );
}
