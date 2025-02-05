"use client";

import Image from "next/image";
import BsPrinter from "@/app/components/icons/BsPrinter.svg";

const PrintButton = () => {
    const print = () => {
        
    }
    return (
        <>
            <button
                onClick={print}
                className="text-white bg-did rounded-2xl text-sm px-6 py-3 text-center flex items-center"
            >
                چاپ و خروجی
                <Image
                    src={BsPrinter}
                    alt="BsTextIndentLeft icone"
                    height={24}
                    width={24}
                />
            </button>
            <iframe
                id="ifmcontentstoprint"
                style={{ height: 0, width: 0, position: "absolute" }}
            ></iframe>
        </>
    );
};
export default PrintButton;
