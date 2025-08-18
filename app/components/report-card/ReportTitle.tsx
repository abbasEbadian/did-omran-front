import Image from "next/image";
import Link from "next/link";
import { UserType } from "@/api/types";

function ReportTitle({ user }: { user: UserType }) {
    return (
        <div className="flex items-center justify-between mt-4">
            <Link href="#1" className="flex items-center gap-2">
                <Image src={"/icons/Logo-blue.svg"} alt="logo did omran" width={95} height={95} />
                <span className="text-did font-black text-2xl">
                    دیــد عمــران
                </span>
            </Link>
            <div className="  flex flex-col items-center">
                <span className="text-dark font-semibold text-xl">
                    {" "}
                    کارنامه آزمون ورود به حرفه مهندسان{" "}
                </span>
                <span className="text-secondary">رشته مهندسی عمران اجرا</span>
            </div>
            <Image
                src={user.avatar ?? "/img/profile2.jpg"}
                alt="profile"
                width={100}
                height={100}
                className="rounded-full"
            />
        </div>
    );
}

export default ReportTitle;
