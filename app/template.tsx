import * as motion from "motion/react-client";
export default function Template({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}

            >
                {children}
            </motion.div>
        </section>
    );
}
