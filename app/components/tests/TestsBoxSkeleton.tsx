import Image from "next/image";
import MdTimer from "@/app/components/icons/MdTimer.svg";
import FaUserGraduate from "@/app/components/icons/FaUserGraduate.svg";
import BsTextIndentRight from "@/app/components/icons/BsTextIndentRight.svg";
import Link from "next/link";


const TestsBoxSkeleton = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="h-60">

                </div>

                <div className="bg-white rounded-b-2xl border border-did/10 px-4 py-2 pt-6">
                    <div className="flex items-center justify-between border-b-2 border-b-secondary700 border-dashed pb-4">
                        <span className="text-dark text-base">
                            test
                        </span>
                        <div className="flex items-center gap-1">
                            <span className="text-secondary800 text-sm">
                                12
                            </span>
                            <Image
                                src={FaUserGraduate}
                                alt="CheckSmall icone"
                                height={20}
                                width={20}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col items-start gap-1 mt-2">
                            <div className="flex items-center gap-1">
                                <Image
                                    src={BsTextIndentRight}
                                    alt="CheckSmall icone"
                                    height={24}
                                    width={24}
                                />
                                <span className="text-xs text-secondary900">
                                    تعداد سوالات:
                                </span>
                                <span className="text-xs text-secondary">
                                    2
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Image
                                    src={MdTimer}
                                    alt="CheckSmall icone"
                                    height={24}
                                    width={24}
                                />
                                <span className="text-xs text-secondary900">
                                    {" "}
                                    مدت زمان:
                                </span>
                                <span className="text-xs text-secondary">
                                   2دقیقه
                                </span>
                            </div>
                        </div>
                        <Link
                            href={'/exams/' }
                            className="text-white bg-did rounded-2xl text-sm px-6 py-3"
                        >
                            شروع آزمون
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestsBoxSkeleton;
