
import { SheetType, UserType } from "@/api/types";
import React from "react";

export const Dashboard = ({
    user,
    sheet,
}: {
    user: UserType;
    sheet: SheetType;
}) => {
    // داده‌های جدول
    const tableData = [
        {
            label1: "نام:",
            value1: user.first_name,
            label2: "نام خانوادگی:",
            value2: user.last_name,
        },
        {
            label1: "تعداد کل سوالات:",
            value1: sheet.exam.question_count,
            label2: "حد نصاب قبول:",
            value2: sheet.exam.minimum_to_pass,
        },
        {
            label1: "تعداد سفید (پاسخ نداده):",
            value1: sheet.unanswered,
            label2: "تعداد پاسخ صحیح:",
            value2: sheet.correct,
        },
        {
            label1: "تعداد پاسخ غلط:",
            value1: sheet.incorrect,
            label2: "نمره داوطلب از 100 (گرد شده به بالا):",
            value2: Math.ceil(
                (sheet.correct / sheet.exam.question_count) * 100
            ),
        },
    ];

    return (
        <div className="p-6 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white p-6 ">
                <table className="w-full">
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr
                                key={index}
                                className="border border-secondary800"
                            >
                                <td className="py-3 px-4 text-right text-secondary800 border-s border-secondary800 last:border-s-0">
                                    {row.label1}
                                </td>
                                <td className="py-3 px-4 text-left text-dark">
                                    {row.value1 === "قبول" ? (
                                        <span className="text-primary font-semibold">
                                            {row.value1}
                                        </span>
                                    ) : (
                                        row.value1
                                    )}
                                </td>
                                <td className="py-3 px-4 text-right text-secondary800 border-s border-secondary800 last:border-s-0">
                                    {row.label2}
                                </td>
                                <td className="py-3 px-4 text-left text-dark">
                                    {row.value2}
                                </td>
                            </tr>
                        ))}
                        <tr className="border border-secondary800">
                            <td className="text-center py-3" colSpan={4}>
                                <span className="text-secondary900 text-font-extrabold">
                                    نتیجه آزمون:{" "}
                                </span>
                                <span className="text-primary font-semibold">
                                    {sheet.passed ? "قبول" : "مردود"}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
