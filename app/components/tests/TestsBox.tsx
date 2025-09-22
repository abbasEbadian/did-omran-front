import Image from "next/image";
import Link from "next/link";
import { ExamType } from "@/api/types";

type Props = ExamType;

const TestsBox = (props: Props) => {
    return (
        <>
            <div className="flex flex-col">
                <Image
                    src={props.image}
                    alt={props.name}
                    height={1024}
                    width={1024}
                    className="w-full object-cover rounded-t-2xl h-[247px]"
                />

                <div className="bg-white rounded-b-2xl border border-did/10 px-4 py-2 pt-6">
                    <div className="flex items-center justify-between border-b-2 border-b-secondary700 border-dashed pb-4">
                        <span className="text-dark text-base truncate">
                            {props.name}
                        </span>
                        <div className="flex items-center gap-1">
                            <span className="text-secondary800 text-sm">
                                12
                            </span>
                            <Image
                                src={"/icons/FaUserGraduate.svg"}
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
                                    src={"/icons/BsTextIndentRight.svg"}
                                    alt="CheckSmall icone"
                                    height={24}
                                    width={24}
                                />
                                <span className="text-xs text-secondary900">
                                    تعداد سوالات:
                                </span>
                                <span className="text-xs text-secondary">
                                    {props.question_count}
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Image
                                    src={"/icons/MdTimer.svg"}
                                    alt="CheckSmall icone"
                                    height={24}
                                    width={24}
                                />
                                <span className="text-xs text-secondary900">
                                    {" "}
                                    مدت زمان:
                                </span>
                                <span className="text-xs text-secondary">
                                    {props.duration}دقیقه
                                </span>
                            </div>
                        </div>
                        <Link
                            href={"/exams/" + props.id}
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

export default TestsBox;
