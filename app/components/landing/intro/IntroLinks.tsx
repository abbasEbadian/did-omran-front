"use client";
import Image from "next/image";
import Link from "next/link";

function IntroLinks() {
    return (
        <div className="flex gap-4 lg:gap-8 flex-wrap justify-center py-7 h-[265px] mt-6 ">
            {introLinks.map((introLink, index) => (
                <Link
                    key={introLink.id}
                    href={introLink.url}
                    className={`
                      float
            rounded-2xl min-w-40 text-white flex flex-col px-6 py-4 items-center gap-2 backdrop-blur-sm
            ${
                index % 2 === 0 ? "self-end" : "self-start"
            } 
            bg-did/30 hover:bg-did transition
          `}
                >
                    <Image
                        src={introLink.src}
                        alt={introLink.alt}
                        width={introLink.width}
                        height={introLink.height}
                    />
                    <span className="text-xl font-bold text-center">
                        {introLink.text}
                    </span>
                </Link>
            ))}
        </div>
    );
}

export default IntroLinks;

// Intro Links Data
const introLinks = [
    {
        id: 1,
        url: "#",
        alt: "Education",
        src: "/icons/Education.svg",
        text: "آموزش",
        width: 65,
        height: 65,
    },
    {
        id: 2,
        url: "/exams",
        alt: "Test",
        src: "/icons/test.svg",
        text: "آزمون",
        width: 65,
        height: 65,
    },
    {
        id: 3,
        url: "/book-store",
        alt: "Library",
        src: "/icons/library.svg",
        text: "کتابخانه",
        width: 65,
        height: 65,
    },
    {
        id: 4,
        url: "/courses",
        alt: "Courses",
        src: "/icons/Courses.svg",
        text: "دوره ها",
        width: 65,
        height: 65,
    },
    {
        id: 5,
        url: "#",
        alt: "Education Book",
        src: "/icons/EducationalBooks.svg",
        text: "کتب آموزشی",
        width: 65,
        height: 65,
    },
];
