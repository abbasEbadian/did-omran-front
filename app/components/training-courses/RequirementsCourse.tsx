import Image from "next/image";
import {CourseType} from "@/api/types";

function RequirementsCourse(course: CourseType) {
    return (
        <>
            <div className="bg-white px-8 py-6 rounded-2xl border border-did/15 shadow-custom-shadow">
                <div className="flex lg:flex-row flex-col gap-4 justify-between ">
                    <div className="flex flex-col items-start w-full gap-4">
                        <div
                            className="flex items-center gap-1 border-b-2 border-dashed border-secondary700 pb-3 w-3/4">
                            <Image
                                src={"/icons/document-filled.svg"}
                                alt="left list icone"
                                height={24}
                                width={24}
                            />
                            <span className="text-dark text-base">
                                {" "}
                                ملزومات دوره
                            </span>
                        </div>
                        {course.prerequisite
                            ?.split("--")
                            .filter((q) => q.trim() !== "")
                            .map((q) => (
                                <div
                                    className="flex items-center gap-1"
                                    key={q}
                                >
                                    <Image
                                        src={"/icons/check-small.svg"}
                                        alt="CheckSmall icone"
                                        height={24}
                                        width={24}
                                    />
                                    <span className="text-secondary  text-base">
                                        {q}
                                    </span>
                                </div>
                            ))}
                    </div>

                    <div className="flex flex-col items-start w-full gap-4">
                        <div className="flex items-center border-b-2 border-dashed border-secondary700 pb-3 w-3/4">
                            <Image
                                src={"/icons/list-pointers.svg"}
                                alt="left list icone"
                                height={24}
                                width={24}
                            />
                            <span className="text-dark text-base">
                                سرانجام دوره
                            </span>
                        </div>
                        {course.outcomes
                            ?.split("--")
                            .filter((q) => q.trim() !== "")
                            .map((q) => (
                                <div className="flex items-center gap-1" key={q}>
                                    <Image
                                        src={"/icons/check-small.svg"}
                                        alt="left list icone"
                                        height={24}
                                        width={24}
                                    />
                                    <span className="text-secondary text-sm">
                                        {q}
                                    </span>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default RequirementsCourse;
