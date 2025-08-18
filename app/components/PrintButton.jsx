"use client";

import Image from "next/image";
import Link from "next/link";

const PrintButton = ({id}) => {

    return (
        <>
            <Link
                href={"/result?id=" + id}
                className="text-white bg-did rounded-2xl text-sm px-6 py-3 text-center flex items-center gap-2.5"
            >
                چاپ
                <Image
                    src={"/icons/BsPrinter.svg"}
                    alt="BsTextIndentLeft icone"
                    height={24}
                    width={24}
                />
            </Link>
        </>
    );
};
export default PrintButton;
