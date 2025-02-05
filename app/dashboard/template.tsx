import * as motion from "motion/react-client";
import { AnimatePresence } from "framer-motion";
export default function Template({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={"orders"}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0.2, x: 10 }}
                transition={{ duration: 0.2, type: 'spring', }}
                
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
