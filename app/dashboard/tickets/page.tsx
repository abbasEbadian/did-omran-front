import Image from "next/image";
import Link from "next/link";
import IoAddSharp from "@/app/components/icons/IoAddSharp.svg";
import TicketsList from "@/app/components/dashboard/tickets/TicketsList";

function page() {
    return (
        <>
            <div className="flex items-end justify-between pb-3">
                <span className="text-secondary text-xl">لیست تیکت ها</span>
                <Link
                    href="/dashboard/tickets/new"
                    className="bg-blue700 rounded-2xl px-5 py-2 flex items-center gap-2 text-white"
                >
                    <Image
                        src={IoAddSharp}
                        alt="BsFacebook Img"
                        height={24}
                        width={24}
                    />
                    <span className="text-white">ثبت تیکت جدید</span>
                </Link>
            </div>
            <TicketsList />
        </>
    );
}

export default page;
