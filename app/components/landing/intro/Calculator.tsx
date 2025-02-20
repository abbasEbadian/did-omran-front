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
            <div className="flex items-center flex-col mt-6">
                <div className="bg-blue700 text-white text-center py-2 rounded-2xl  z-10 text-lg font-bold  border-white border-2 mx-5 inline-table px-4">
                    <span className="">محاسبه گر نمره آزمون</span>
                </div>
                <div className="bg-secondary700 p-6 rounded-2xl z-0 -mt-4">
                    <h2 className="font-semibold mb-4 text-dark text-xs">
                        جهت محاسبه نمره لطفا موارد زیر را تکمیل نمایید
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <div className=" flex flex-col gap-1">
                                <div className="flex items-center  gap-2">
                                    <label className="text-dark whitespace-nowrap text-xs mb-2 min-w-16">
                                        پاسخ صحیح
                                    </label>
                                    <input
                                        name="correct"
                                        value={data.correct}
                                        onChange={onChange}
                                        className="w-full p-2 text-secondary border border-gray-300 rounded-lg"
                                        placeholder="0"
                                    />
                                </div>

                                <div className="flex items-center  gap-2">
                                    <label className="text-dark whitespace-nowrap text-xs mb-2 min-w-16">
                                        پاسخ غلط
                                    </label>
                                    <input
                                        name="wrong"
                                        value={data.wrong}
                                        onChange={onChange}
                                        className="w-full p-2 text-secondary border border-gray-300 rounded-lg"
                                        placeholder="0"
                                    />
                                </div>

                                <div className="flex items-center  gap-2">
                                    <label className="text-dark whitespace-nowrap text-xs mb-2 min-w-16">
                                        سفید
                                    </label>
                                    <input
                                    name="blank"
                                        value={data.blank}
                                        onChange={onChange}
                                        className="w-full p-2 text-secondary border border-gray-300 rounded-lg"
                                        placeholder="0"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 content-center">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-xs text-dark">
                                    نمره اکتسابی شما:
                                </span>
                                <span className="text-white text-2xl bg-blue600 rounded-2xl font-medium px-4 py-1">
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
