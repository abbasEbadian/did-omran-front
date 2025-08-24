"use client";

import Image from "next/image";
import { toast } from "react-toastify";

function CopyLink({id, code}: { id: number, code: string }) {
    const url = `https://www.didomran.ir/${code}/${id}`
    const onCopy = () =>{
        window.navigator.clipboard.writeText(url)
        toast.success("کپی شد")
    }
    return (
        <>
            <div className="flex gap-4 bg-secondary700 rounded-2xl px-4 py-2 items-center justify-end w-full">
                <span className="text-dark text-sm ">
                    {url}
                </span>
                <button onClick={onCopy}>
                    <Image
                        src={"/icons/MdContentCopy.svg"}
                        alt="Profile Img"
                        height={24}
                        width={24}
                    />
                </button>
            </div>
        </>
    );
}

export default CopyLink;
