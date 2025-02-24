"use client";

import { ComponentProps, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

type Props = ComponentProps<"div"> & {
    onClose: () => void;
    open: boolean;
};

const Modal = ({ children, open, onClose }: Props) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 },
    };
    return createPortal(
        <AnimatePresence>
            {open && (
                <motion.div
                    key={"modal"}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    className="fixed inset-0  flex items-center justify-center backdrop-blur-[5px] pointer-events-[bounding-box]"
                >
                    <div
                        className="bg-dark/50 absolute inset-0 z-[1] cursor-pointer"
                        onClick={onClose}
                    ></div>
                    <div className="bg-white size-1/4 rounded p-4 relative z-[2]">
                        <span
                            onClick={onClose}
                            className="p-2 absolute bottom-full left-0 block"
                            role="button"
                        >
                            x
                        </span>

                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default Modal;
