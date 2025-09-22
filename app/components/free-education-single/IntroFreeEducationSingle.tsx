import Image from "next/image";
import IntroContent from "./IntroContent";
import SocialMediaIcon from "@/app/components/SocialMediaIcon";
import { EducationType } from "@/api/education/types";

export const IntroFreeEducationSingle = (education: EducationType) => {
    const socialMediaIcons = [
        {
            href: education.tutor.linkedin,
            icon: "/icons/BsFacebook.svg",
            alt: "LinkedIn",
            className: "text-blue-600",
        },
        {
            href: education.tutor.instagram,
            icon: "/icons/FaInstagram.svg",
            alt: "Instagram",
            className: "text-pink-500",
        },
        {
            href: education.tutor.telegram,
            icon: "/icons/FaTelegramPlane.svg",
            alt: "Telegram",
            className: "text-blue-400",
        },
    ].filter(x => Boolean(x.href));

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="lg:w-1/2 w-full h-96">
                    <Image
                        src={education.cover.url}
                        alt={education.title}
                        height={290}
                        width={463}
                        className="object-cover h-full w-full object-center rounded-2xl"
                    />
                </div>
                <div className="flex flex-col items-start gap-4">
                    <div className="flex flex-col items-start justify-start gap-2">
            <span className="text-dark font-bold text-xl mb-4">
              {education.title}
            </span>
                        <div className="flex items-start gap-2">
                            <Image src={"/icons/BsStack.svg"} alt="BsStack Img" height={24} width={24}/>
                            <span className="text-secondary">چیکیده آموزش</span>
                        </div>
                        <p className="text-secondary900 text-sm text-justify">
                            {education.summary}
                        </p>
                    </div>
                    <IntroContent {...education}/>
                    <div className="border-dashed border-b-2 border-secondary700 w-full"></div>
                    <div
                        className="flex justify-between items-center bg-white rounded-2xl px-4 py-2 w-full border border-did/15">
                        <div className="flex items-center lg:gap-3 gap-1">
                            <div className="rounded-full">
                                <Image
                                    src={"/img/profile.jpg"}
                                    alt="Profile Img"
                                    height={60}
                                    width={60}
                                    className="object-cover rounded-2xl"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-dark text-base">ارسطو اعتمادی</span>
                                <span className="text-secondary900 text-sms">lormsaz</span>
                            </div>
                        </div>
                        <SocialMediaIcon icons={socialMediaIcons}/>
                    </div>

                </div>
            </div>
        </>
    );
};

export default IntroFreeEducationSingle;