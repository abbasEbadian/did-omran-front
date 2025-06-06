import { TutorType } from "@/api/types";
import BsBox from "@/app/components/icons/BsBox.svg";
import Image from "next/image";
import Link from "next/link";

function Instructor(tutor: TutorType) {
    return (
        <>
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <Image
                        src={BsBox}
                        alt="CheckSmall icone"
                        height={24}
                        width={24}
                    />
                    <span className="text-secondary900 text-sm">
                        {tutor.course_count} دوره
                    </span>
                    -
                    <Link
                        className="text-did text-sm"
                        href={"/tutors/" + tutor.id}
                    >
                        مشاهده رزومه
                    </Link>
                </div>
                <p className="text-secondary text-sm">{tutor.bio}</p>
                <p className="text-did text-xs my-4">{tutor.slogan}</p>
            </div>
        </>
    );
}

export default Instructor;
