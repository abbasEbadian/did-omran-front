"use client";
import React, { useEffect, useState } from "react";
import NavigateNext from "@/app/components/icons/navigate_next.svg";
import NavigateBefore from "@/app/components/icons/navigate_before.svg";
import FiSkipForward from "@/app/components/icons/FiSkipForward.svg";
import Image from "next/image";
import { ExamType } from "@/api/types";

const OnlineExam = ({ exam, ...rest }: { exam: ExamType }) => {
    const [answers, setAnswers] = useState<Record<string, string | undefined>>(
        {}
    );

    useEffect(() => {
        setAnswers(
            Object.fromEntries(
                Array.from({ length: exam.question_count }).map((_, i) => [
                    i+1,
                    undefined,
                ])
            )
        );
    }, [exam]);
    return (
        <div className=" grid grid-cols-12 gap-5 my-4">
            {/* نمایش سوال فعلی */}
            <div className="col-span-12 lg:col-span-9"></div>
            {/*  پاسخ نامه سوالات */}
            <div className="col-span-12 lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-custom-shadow px-6 py-4 ">
                    <h3 className=" text-dark font-semibold mb-4 text-center">
                        پاسخ نامه سوالات
                    </h3>
                    <div className="flex items-center gap-1 justify-center flex-col">
                        {Object.keys(answers).map((q, index) => (
                            <div className="flex items-center gap-1 " dir="ltr" key={q}>
                                <span className="me-4 text-dark">{q}</span>
                                {["a", "b", "c", "d"].map((answer) => {
                                    return (
                                        <button
                                            key={q+answer}
                                            onClick={() =>
                                                setAnswers((p) => ({
                                                    ...p,
                                                    [q]: answer,
                                                }))
                                            }
                                            className={`flex items-center px-4 py-0 text-center rounded-full border border-transparent ${
                                                answers[q] === answer
                                                    ? "bg-did text-white"
                                                    : "bg-secondary700/50 text-secondary900 hover:border-secondary900"
                                            }`}
                                        >
                                            {answer}
                                        </button>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                    {/* تعداد سوالات پاسخ داده شده و پاسخ داده نشده */}
                    <div className="text-center mt-8  flex flex-col items-center gap-2 ">
                        <p className="text-secondary900 text-sm gap-1  before:content-[' '] before:bg-did before:rounded-full before:w-4 before:h-4 before:relative flex before:-right-1 before:top-1">
                             پاسخ داده شده:{" "}
                            <span className="font-bold text-dark">
                              {Object.values(answers).filter((a) => a).length}
                            </span>
                        </p>
                        <p className="text-secondary900 text-sm gap-1  before:content-[' '] before:bg-secondary700 before:rounded-full before:w-4 before:h-4 before:relative flex before:-right-1 before:top-1">
                             پاسخ داده نشده:{" "}
                            <span className="font-bold text-dark">
                            {Object.values(answers).filter((a) => !a).length}
                            </span>
                        </p>
                    </div>
                    {/* دکمه اتمام آزمون */}
                    <div className="text-center w-4/6 mx-auto mt-8">
                        <button className="bg-blue text-white px-6 py-2 rounded-2xl w-full">
                            اتمام آزمون
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineExam;
