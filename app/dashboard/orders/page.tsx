"use client";

import { getOrders } from "@/api/order";
import StatusBadge from "@/app/components/dashboard/StatusBadge";
import Price from "@/app/components/price";
import { convertToJalali } from "@/utils/jalali";
import useSWR from "swr";

const Page = () => {
    const { data: orders, error, isLoading } = useSWR("get-orders", getOrders);
    console.log(orders);
    
    return (
        <div className="p-6">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-white100 rounded-2xl">
                            <th className="py-3 px-4 text-dark rounded-s-2xl">
                                عنوان
                            </th>
                            <th className="py-3 px-4 text-dark">تاریخ </th>
                            <th className="py-3 px-4 text-dark">وضعیت</th>
                            <th className="py-3 px-4 text-dark rounded-e-2xl">
                                مبلغ دوره
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order) => (
                            <tr
                                key={order.id}
                                className="hover:bg-gray-50 border-b-2 border-dashed border-b-secondary700"
                            >
                                <td className="py-3 px-4 text-center text-secondary">
                                    {order.code}
                                </td>
                                <td className="py-3 px-4 text-center text-secondary">
                                    {convertToJalali(order.payment_date, true)}
                                </td>
                                <td className="py-3 px-4 text-center text-secondary">
                                    <StatusBadge status="success" />
                                </td>
                                <td className="py-3 px-4 text-center text-did font-semibold">
                                    <Price amount={Number(order.final_price)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
