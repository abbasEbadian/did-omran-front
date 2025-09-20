"use client";

import React, { useState } from "react";
import { IconClose } from "@components/icons/comp/IconClose";
import Sidebar from "@components/dashboard/Sidbar";


const DashboardBase = ({children}: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="container mx-auto grid grid-cols-12 gap-4">


            <aside
                className={`hidden lg:block h-full md:h-auto w-64 md:w-auto bg-white shadow-md md:shadow-none transform transition-transform duration-300 z-40 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 col-span-3`}
            >
                <Sidebar closeSidebar={() => setIsOpen(false)}/>
            </aside>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <section className="col-span-12 md:col-span-9 bg-white rounded-e-2xl px-5 py-8">
                {children}
            </section>
        </div>
    );
};
export default DashboardBase;