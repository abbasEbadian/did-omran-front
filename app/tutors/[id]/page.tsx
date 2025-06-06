"use client";

import { getTutor } from "@/api";
import { CourseType, TutorType } from "@/api/types";
import Head from "next/head";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MoonLoader } from "react-spinners";
import useSWR from "swr";

export default function TutorResume() {
    const { id } = useParams();

    const { data: tutor, isLoading } = useSWR<TutorType>(
        "get-tutor-" + id,
        () => getTutor(Number(id) || 0)
    );

    if (isLoading) {
        return (
            <div className="min-h-[300px] grid place-items-center">
                <MoonLoader size={30} />
            </div>
        );
    }
    return (
        <div className={`flex justify-center items-center p-4`}>
            <Head>
                <title>رزومه مدرس - {tutor?.name}</title>
            </Head>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
                <div className="flex items-center mb-6">
                    <img
                        src={tutor?.user.avatar}
                        alt={tutor?.name}
                        className="w-24 h-24 rounded-full ml-4"
                    />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">
                            {tutor?.name}
                        </h1>
                        <p className="text-gray-600">{tutor?.title}</p>
                    </div>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-700">
                        درباره مدرس
                    </h2>
                    <p className="text-gray-600 mt-2">{tutor?.bio}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-700">
                        شعار
                    </h2>
                    <p className="text-gray-600 mt-2">{tutor?.slogan}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-700">
                        دوره‌ها
                    </h2>
                    {tutor?.courses?.length ? (
                        <ul className="list-disc ps-6 text-did900 leading-8 pt-2 [&>li]:">
                            {tutor.courses.map((course) => {
                                return (
                                    <li
                                        key={course.id}
                                        className="hover:text-did800"
                                    >
                                        <Link href={"/course/" + course.id}>
                                            {course.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <p className="text-gray-600">به زودی منتظر می‌گردد</p>
                    )}
                </div>
                {[tutor?.telegram, tutor?.instagram, tutor?.linkedin].some(
                    Boolean
                ) && (
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-gray-700">
                            شبکه‌های اجتماعی
                        </h2>
                        <div className="flex gap-4 mt-2">
                            {tutor?.telegram && (
                                <a
                                    href={tutor?.telegram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    تلگرام
                                </a>
                            )}
                            {tutor?.instagram && (
                                <a
                                    href={tutor?.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    اینستاگرام
                                </a>
                            )}
                            {tutor?.linkedin && (
                                <a
                                    href={tutor?.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    لینکدین
                                </a>
                            )}
                        </div>
                    </div>
                )}
                {tutor?.resume && (
                    <>
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                            رزومه
                        </h2>
                        <div
                            dangerouslySetInnerHTML={{ __html: tutor?.resume }}
                        ></div>
                    </>
                )}
            </div>
        </div>
    );
}
