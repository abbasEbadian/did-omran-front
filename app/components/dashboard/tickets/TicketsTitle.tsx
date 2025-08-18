import Image from "next/image";
import Link from "next/link";

function TicketsTitle() {
    return (
        <>
            <div className="flex items-center justify-between border-b-2 border-b-secondary700 border-dashed pb-3 ">
                <span className="text-secondary text-xl">ارسال تیکت جدید</span>
                <Link href="/dashboard/tickets"
                      className="bg-blue rounded-2xl px-5 py-2 flex items-center gap-2 text-white">
                    <Image
                        src={"/icons/BsBoxSeam.svg"}
                        alt="BsFacebook Img"
                        height={24}
                        width={24}/>
                    <span className="text-white">همه تیکت ها</span>
                </Link>
            </div>
        </>
    );
}

export default TicketsTitle;