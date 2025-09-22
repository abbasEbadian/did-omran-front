"use client";
import React, { useEffect, useState } from "react";
import { ExamType } from "@/api/types";
import Timer from "./Timer";
import IntroOnlineTest from "./IntroOnlineTest";
import { applyAnswer, getUser } from "@/api";
import useSWR from "swr";
import { toaster } from "@/utils/toaster";
import { redirect } from "next/navigation";

const OnlineExam = ({ exam, ...rest }: { exam: ExamType }) => {
    const [answers, setAnswers] = useState<Record<string, string | undefined>>(
        {}
    );
    const { data } = useSWR("get-user", getUser);

    useEffect(() => {
        setAnswers(
            Object.fromEntries(
                Array.from({ length: exam.question_count }).map((_, i) => [
                    i + 1,
                    undefined,
                ])
            )
        );
    }, [exam]);

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        event.stopPropagation()

        const data = {
            exam: exam.id,
            answers: answers
        }
        const response = await applyAnswer(data)
        response && toaster(response)
        if(response?.result === 'ok'){
            redirect('/dashboard/statistics/')
        }
    };
    return (
        <div className=" grid grid-cols-12 gap-5 my-4 container py-8 mx-auto">
            <div className="col-span-12 lg:col-span-9">
                <iframe
                    src={"/pdf/pdf?url=" + exam.file}
                    width={"100%"}
                    height={"100%"}
                    allowFullScreen={true}
                    className="min-h-[700px]"
                />
            </div>
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 ">
                <Timer iniTime={exam.duration} />
                <div className="bg-white rounded-2xl shadow-custom-shadow px-6 py-4">
                    <IntroOnlineTest exam={exam} user={data} />
                </div>
                <form className="bg-white rounded-2xl shadow-custom-shadow px-6 py-4" onSubmit={e => submit(e)}>
                    <h3 className=" text-dark font-semibold mb-4 text-center">
                        پاسخ نامه سوالات
                    </h3>
                    <div className="flex items-center gap-1 justify-center flex-col">
                        {Object.keys(answers).map((q, index) => (
                            <div
                                className="flex items-center gap-1 "
                                dir="ltr"
                                key={q}
                            >
                                <span className="me-4 text-dark">{q}</span>
                                {["a", "b", "c", "d"].map((answer) => {
                                    return (
                                        <button
                                        type="button"
                                            key={q + answer}
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
                                {
                                    Object.values(answers).filter((a) => !a)
                                        .length
                                }
                            </span>
                        </p>
                    </div>
                    {/* دکمه اتمام آزمون */}
                    <div className="text-center w-4/6 mx-auto mt-8">
                        <button
                            className="bg-blue text-white px-6 py-2 rounded-2xl w-full"
                        >
                            اتمام آزمون
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OnlineExam;
