"use client";

import React, { useEffect, useReducer, useState } from "react";

function Calculator() {
    const [score, setScore] = useState(0);
    const [data, setData] = useState({
        correct: 0,
        wrong: 0,
        blank: 0,
    });
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (!isNaN(Number(value))) {
            const new_val =  Math.abs(Number(value))
            setData({ ...data, [name]: new_val });
        }

    };
    const calculateScore = () => {
        const { correct, wrong, blank } = data;
        const total = correct + wrong + blank;
        const score = (correct / total) * 100;
        setScore(Math.ceil(score));
    };
    useEffect(() => {
        calculateScore();
    }, [data]);
    return (
        <>
            <div className="flex items-center flex-col mt-2 px-3 lg:px-0">
                <div className="  text-center py-2 text-lg font-bold mx-5 px-4">
                    <span className="text-gray-700">محاسبه گر نمره آزمون</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-custom-shadow">
                    <h2 className="font-medium mb-4 text-secondary text-sm">
                        جهت محاسبه نمره لطفا موارد زیر را تکمیل نمایید
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <div className=" flex flex-col gap-1">
                                <div className="flex items-center  gap-2">
                                    <label className="text-secondary800 font-normal whitespace-nowrap text-xs mb-2 min-w-16">
                                        پاسخ صحیح
                                    </label>
                                    <input
                                        name="correct"
                                        value={data.correct}
                                        onChange={onChange}
                                        className="w-full py-1 p-2 text-secondary border border-gray-300 rounded-xl"
                                        placeholder="0"
                                    />
                                </div>

                                <div className="flex items-center  gap-2">
                                    <label className="text-secondary800 font-normal whitespace-nowrap text-xs mb-2 min-w-16">
                                        پاسخ غلط
                                    </label>
                                    <input
                                        name="wrong"
                                        value={data.wrong}
                                        onChange={onChange}
                                        className="w-full py-1 p-2 text-secondary border border-gray-300 rounded-xl"
                                        placeholder="0"
                                    />
                                </div>

                                <div className="flex items-center  gap-2">
                                    <label className="text-secondary800 font-normal whitespace-nowrap text-xs mb-2 min-w-16">
                                        سفید
                                    </label>
                                    <input
                                    name="blank"
                                        value={data.blank}
                                        onChange={onChange}
                                        className="w-full py-1 p-2 text-secondary border border-gray-300 rounded-xl"
                                        placeholder="0"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 content-center">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-xs text-secondary900">
                                    نمره اکتسابی شما:
                                </span>
                                <span className="text-white text-2xl bg-blue600 rounded-2xl font-medium px-4 py-1 min-w-[64px] text-center">
                                    {score || 0}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Calculator;
