"use client";

import {getTutor} from "@/api";
import {TutorType} from "@/api/types";
import Head from "next/head";
import Link from "next/link";
import {useParams} from "next/navigation";
import {MoonLoader} from "react-spinners";
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
        <div className={`flex  flex-col justify-center items-center p-4`}>
            <Head>
                <title>رزومه مدرس - {tutor?.name}</title>
            </Head>
            <div className="flex  items-center bg-did/20 mb-36 w-full relative h-44 rounded-2xl ">
                  <div className="absolute flex lg:flex-row flex-col items-end justify-end gap-3 right-20 top-0">
                  <img
                        src={tutor?.user.avatar}
                        alt={tutor?.name}
                        className="ml-4 h-[170px] w-[170px] items-center justify-center rounded-2xl mt-12"
                    />
                    <div>
                        <h1 className="text-2xl font-bold text-dark">
                            {tutor?.name}
                        </h1>
                        <p className="text-secondary900">{tutor?.title}</p>
                    </div>
                  </div>
                </div>
            <div className=" p-6 w-full mt-10">
               
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-dark">
                        درباره مدرس
                    </h2>
                    <p className="text-secondary900 mt-2">{tutor?.bio}</p>
                </div>
                <div className="mb-4 border-dashed border-b-2 border-b-secondary700 pb-4">
                    <h2 className="text-lg font-semibold text-dark">
                        شعار
                    </h2>
                    <p className="text-secondary900 mt-2">{tutor?.slogan}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-dark">
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
                                        <Link href={"/courses/" + course.id}>
                                            {course.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <p className="text-secondary900">به زودی منتظر می‌گردد</p>
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
