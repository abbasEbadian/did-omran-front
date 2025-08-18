import Image from "next/image";

function CopyLink() {
    return (
        <>
            <div className="flex gap-4 bg-secondary700 rounded-2xl px-4 py-2 items-center justify-end w-full">
                <span className="text-dark text-sm ">
                    https://www.didomran.ir/events/1
                </span>
                <button>
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
