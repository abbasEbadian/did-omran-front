import Image from "next/image";
import BsBox from "@/app/components/icons/BsBox.svg";
import FaLinkedinIn from "@/app/components/icons/FaLinkedinIn.svg";
import FaInstagram from "@/app/components/icons/FaInstagram.svg";
import FaTelegramPlane from "@/app/components/icons/FaTelegramPlane.svg";
import Link from "next/link";

function Instructor(tutor: { bio: string; course_count: number, slogan: string }) {
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
                        {" "}
                        {tutor.course_count} دوره
                    </span>
                </div>
                <p className="text-secondary text-sm">{tutor.bio}</p>
                <p className="text-did text-xs">{tutor.slogan}</p>
                <div className="flex items-center justify-end gap-4 mt-4">
                    <Link href="#Decription" className="text-dark text-sm">
                        <Image
                            src={FaLinkedinIn}
                            alt="FaLinkedinIn icone"
                            height={24}
                            width={24}
                        />
                    </Link>
                    <Link href="#Decription" className="text-dark text-sm">
                        <Image
                            src={FaInstagram}
                            alt="FaInstagram icone"
                            height={24}
                            width={24}
                        />
                    </Link>
                    <Link href="#Decription" className="text-dark text-sm">
                        <Image
                            src={FaTelegramPlane}
                            alt="FaTelegramPlane icone"
                            height={24}
                            width={24}
                        />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Instructor;
