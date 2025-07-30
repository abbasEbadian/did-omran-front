import React from "react";
import Image from "next/image";
import Instructor from "@/app/components/Instructor";
import { TutorType } from "@/api/types";

function InstructorInfo({ instructor }: { instructor: TutorType }) {
    return (
        <>
            <div
                className="flex lg:flex-row flex-col items-center justify-center gap-12  bg-did/5 rounded-2xl px-8  py-8 my-24"
                id="InstructorInfo"
            >
                <div className="flex items-center gap-4">
                    <div className="w-full">
                        <Image
                            src={instructor.user.avatar}
                            alt="Profile"
                            height={250}
                            width={250}
                            className="object-cover w-full lg:min-w-64 lg:min-h-64 rounded-full"
                        />
                    </div>
                    <div className="flex-col items-center gap-2 flex">
                        <span className=" text-xl text-did font-black">
                            مدرس دوره
                        </span>
                        <span className="text-dark text-2xl font-bold whitespace-nowrap">
                            {instructor.name}
                        </span>
                        <span className="text-secondary text-xs whitespace-nowrap">
                            {instructor.title}
                        </span>
                    </div>
                </div>
                <Instructor {...instructor} />
            </div>
        </>
    );
}

export default InstructorInfo;
