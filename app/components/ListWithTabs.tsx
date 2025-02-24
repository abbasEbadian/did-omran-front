"use client";
import { BookType } from "@/api/book/types";
import { CourseType, ExamType } from "@/api/types";
import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { MoonLoader } from "react-spinners";
import { AnimatePresence } from "framer-motion";
import Filter from "./Filter";

type GenType = BookType | CourseType | ExamType;

type ListWithTabsProps<T extends GenType> = {
    data: T[];
    isLoading: boolean;
    render: (item: T) => React.ReactNode;
    error?: string;
};

type TCategory = { id: number; name: string };

const ListWithTabs = <T extends GenType>({
    data,
    isLoading,
    render,
}: ListWithTabsProps<T>) => {
    const [categories, setCategories] = useState<
        { id: number; name: string }[]
    >([]);

    const [activeCategory, setActiveCategory] = useState<TCategory>({
        id: 9999,
        name: "همه",
    });

    const [items, setItems] = useState<T[]>([]);

    useEffect(() => {
        const cats: TCategory[] = [];
        for (let item of data || []) {
            if (!cats.find((q) => q.name === item.category.name))
                cats.push(item.category);
        }
        setCategories(
            Array.from(new Set([{ id: 9999, name: "همه" }, ...cats]))
        );
        setItems(data ?? []);
    }, [data]);

    useEffect(() => {
        if (activeCategory.id === 9999) {
            setItems(data || []);
        } else {
            setItems(
                data?.filter((q) => q.category.id === activeCategory.id) || []
            );
        }
    }, [activeCategory]);

    const loaderVariants = {
        initial: { opacity: 1 },
        animate: { opacity: 0, display: "none" },
    };
    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    };
    return (
        <section className="relative container mx-auto">
            <Filter/>
            <div className="flex gap-6 items-end justify-center border-b border-did/10 mb-8 mt-5">
                {categories?.map((tab, i) => (
                    <motion.button
                        key={tab.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: "easeInOut",
                            delay: 0.1 * (i + 1) + 0.2,
                        }}
                        onClick={() => setActiveCategory(tab)}
                        className={`px-6 py-2 rounded-t-2xl transition-all duration-300 min-w-40 ${
                            activeCategory.id === tab.id
                                ? "bg-did/25 text-did h-14"
                                : "bg-did/10 text-did/40 "
                        }`}
                    >
                        {tab.name}
                    </motion.button>
                ))}
            </div>

            <motion.div
                variants={loaderVariants}
                initial={"initial"}
                animate={!isLoading ? "animate" : "initial"}
                exit={{ opacity: 0 }}
                className="min-h-[200px]"
            >
                <MoonLoader color="#aaa" className="mx-auto" />
            </motion.div>
            <AnimatePresence>
                <motion.div
                    layout
                    initial="initial"
                    variants={variants}
                    animate={isLoading ? "initial" : "animate"}
                    exit={{ opacity: 0 }}
                    className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 min-h-[500px]"
                >
                    {items.length > 0 ? (
                        items.map((item, i) => {
                            return (
                                <motion.div
                                    layout
                                    transition={{
                                        type: "easeInOut",
                                        delay: 0.1 * (i + 1) + 0.2,
                                    }}
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 25 }}
                                    className="col-span-1"
                                    key={item.id}
                                >
                                    {render(item)}
                                </motion.div>
                            );
                        })
                    ) : (
                        <motion.div
                            className="col-span-4"
                            transition={{ delay: 1 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: !isLoading ? 1 : 0 }}
                        >
                            <p className="text-did/40 text-center">
                                هیچ موردی یافت نشد
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

export default ListWithTabs;
