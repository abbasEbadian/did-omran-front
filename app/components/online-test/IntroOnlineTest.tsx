import Image from "next/image";
import Profile from "@/public/img/profile2.jpg";
import { ExamType, User } from "@/api/types";

const IntroOnlineTest = ({ exam, user }: { exam: ExamType; user: User }) => {
    return (
        <>
            <section className="flex items-end gap-3">
                <div className="flex items-center gap-4 border-b-2 border-b-secondary700 border-dashed grow pb-2">
                    <Image
                        src={user?.avatar ?? Profile}
                        alt="Profile"
                        height={54}
                        width={54}
                        className="object-cover rounded-full"
                    />
                    <div className="flex-col items-start gap-2 flex">
                        <div className="flex items-start gap-1">
                            <span className="text-secondary whitespace-nowrap">
                                دانشجو:
                            </span>
                            <span className="text-dark font-bold whitespace-nowrap">
                                {user?.full_name}
                            </span>
                        </div>
                        <span className="text-purple100">لورم ساز</span>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <span className="text-secondary text-xs whitespace-nowrap">
                        عنوان آزمون:
                    </span>
                    <span className="text-dark text-xl font-bold whitespace-nowrap">
                        {exam?.name}
                    </span>
                </div>
            </section>
        </>
    );
};

export default IntroOnlineTest;
