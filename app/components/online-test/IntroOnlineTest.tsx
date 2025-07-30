import Image from "next/image";
import { ExamType, UserType } from "@/api/types";

const IntroOnlineTest = ({ exam, user }: { exam: ExamType; user: UserType }) => {
    return (
        <>
            <section className="flex items-end gap-3 flex-col">
                <div className="flex items-center gap-4 border-b-2 border-b-secondary700 border-dashed grow pb-2 w-full justify-between">
                    <Image
                        src={user?.avatar ?? '/img/profile2.jpg'}
                        alt="Profile"
                        height={1024}
                        width={1024}
                        className="object-cover rounded-full w-16 h-16 border border-slate-200"
                    />
                    <span className="text-dark font-bold whitespace-nowrap">
                        {user?.full_name}
                    </span>
                </div>
                <div className="flex items-center justify-between w-full">
                    <span className="text-secondary text-xs whitespace-nowrap">
                        عنوان آزمون:
                    </span>
                    <span className="text-dark  font-bold whitespace-nowrap">
                        {exam?.name}
                    </span>
                </div>
            </section>
        </>
    );
};

export default IntroOnlineTest;
