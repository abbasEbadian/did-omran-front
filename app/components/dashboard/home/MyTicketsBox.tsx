import Image from "next/image";
import Link from "next/link";

function MyTicketsBox() {
    return (
        <>
            <Link
                href="/dashboard/tickets"
                className="bg-blue300 rounded-2xl px-8 py-6 flex items-center gap-4 justify-center"
            >
                <Image src={"/icons/Feature.svg"} alt="star Img" width={150} height={150}/>
                <div
                    className="flex flex-col items-start px-4 border-s-2 border-dashed border-s-secondary700 gap-1 py-5">
                    <span className="text-did text-xl lg:text-2xl font-semibold whitespace-nowrap">
                        تیکت‌های من
                    </span>
                    <span className="text-secondary text-sm font-medium">
                        تیکت‌های ثبت شده
                    </span>
                </div>
            </Link>
        </>
    );
}

export default MyTicketsBox;
