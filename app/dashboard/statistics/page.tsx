"use client";

import { getSheets } from "@/api/exam/getSheets";
import { SheetType } from "@/api/types";
import StatusBadge from "@/app/components/dashboard/StatusBadge";
import { convertToJalali } from "@/utils/jalali";
import Link from "next/link";
import useSWR from "swr";
import * as motion from 'motion/react-client';

const Page = () => {
    const { data: sheets } = useSWR<SheetType[]>("get-sheets", getSheets);
    
    return (
        <div className="p-6">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-white100 rounded-2xl">
                            <th className="py-3 px-4 text-dark rounded-s-2xl">
                                عنوان
                            </th>
                            <th className="py-3 px-4 text-dark">
                                {" "}
                                تعداد سوالات{" "}
                            </th>
                            <th className="py-3 px-4 text-dark">
                                تاریخ برگزاری{" "}
                            </th>
                            <th className="py-3 px-4 text-dark">وضعیت </th>
                            {/* <th className="py-3 px-4 text-dark">پاسخ نامه </th> */}
                            <th className="py-3 px-4 text-dark rounded-e-2xl">
                                کارنامه
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sheets?.map((sheet, index) => (
                            <motion.tr
                                initial={{ opacity: 0, x: 5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.1, delay: index * 0.05 }}

                                key={sheet.id}
                                className="hover:bg-gray-50 border-b-2 border-dashed border-b-secondary700 last:border-b-0"
                            >
                                <td className="py-3 px-4 text-center text-secondary">
                                    {sheet.exam.name}
                                </td>
                                <td className="py-3 px-4 text-center text-secondary">
                                    {sheet.exam.question_count}
                                </td>
                                <td className="py-3 px-4 text-center text-did font-semibold">
                                    {convertToJalali(sheet.create_date, true)}
                                </td>
                                <td className="py-3 px-4 text-center text-secondary">
                                    <StatusBadge
                                        status={
                                            sheet.passed
                                                ? "accepted"
                                                : "rejected"
                                        }
                                    />
                                </td>
                                <td className="py-3 px-4 text-center text-secondary hidden">
                                    <Link
                                        href="#"
                                        className="text-did text-sm font-semibold hove:text-blue   "
                                    >
                                        مشاهده
                                    </Link>
                                </td>
                                <td className="py-3 px-4 text-center text-secondary">
                                    <Link
                                        href={
                                            "/dashboard/statistics/" + sheet.id
                                        }
                                        className="text-did text-sm font-semibold hove:text-blue"
                                    >
                                        مشاهده
                                    </Link>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
