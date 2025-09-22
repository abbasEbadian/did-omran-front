import { notFound } from "next/navigation";
import { getOrder } from "@/api/order";
import CopyButton from "@/app/dashboard/orders/copyButton";
import Link from "next/link";

async function OrderDetailPage({params}: { params: Promise<{ uuid: string }> }) {
    const {uuid} = await params;
    const order = await getOrder(uuid);

    console.log({order});
    if (!order) {
        return notFound();
    }
    const statusColors: Record<typeof order.status, string> = {
        PAID: "bg-green-100 text-green-700",
        CANCELLED: "bg-red-100 text-red-700",
        PENDING: "bg-yellow-100 text-yellow-700",
    };


    return <div className="max-w-5xl mx-auto lg:p-6 pt-0">
        <div className="mb-6">
            <h1 className="text-lg lg:text-2xl font-semibold">جزئیات سفارش</h1>
            <p className="text-sm mt-2 lg:text-base text-gray-500">کد سفارش: {order.code}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 rounded-2xl border-gray border  bg-white">
                <h2 className="text-lg font-medium mb-2">اطلاعات کلی</h2>
                <dl className="space-y-3 text-gray-700">
                    <div className={"flex items-center justify-between"}>
                        <dt className="font-medium">وضعیت:</dt>
                        <dd>
                             <span
                                 className={`px-3 py-1 text-sm font-semibold rounded-full ${statusColors[order.status]}`}
                             >
                              {order.status === "PAID"
                                  ? "پرداخت شده"
                                  : order.status === "CANCELLED"
                                      ? "لغو شده"
                                      : "در انتظار"}
                            </span>
                        </dd>
                    </div>
                    <div className={"flex items-center justify-between mt-2"}>
                        <dt className="font-medium">تاریخ ایجاد:</dt>
                        <dd dir={"ltr"}>{new Date(order.create_date).toLocaleString("fa-IR")}</dd>
                    </div>
                    <div className={"flex items-center justify-between mt-2"}>
                        <dt className="font-medium">تاریخ پرداخت:</dt>
                        <dd dir={"ltr"}>
                            {order.payment_date
                                ? new Date(order.payment_date).toLocaleString("fa-IR")
                                : "—"}
                        </dd>
                    </div>
                </dl>
            </div>

            <div className="p-4 rounded-2xl border-gray border bg-white">
                <h2 className="text-lg font-medium mb-2">اطلاعات مالی</h2>
                <dl className="space-y-3 text-gray-700">
                    <div className="flex justify-between">
                        <dt className="font-medium">مبلغ:</dt>
                        <dd>{Number(order.price).toLocaleString()} تومان</dd>
                    </div>
                    <div className="flex justify-between">
                        <dt className="font-medium">مبلغ نهایی:</dt>
                        <dd className="font-semibold">
                            {Number(order.final_price).toLocaleString()} تومان
                        </dd>
                    </div>
                </dl>
            </div>
        </div>

        {/* ردیف‌های سفارش */}
        <div className="p-4 rounded-2xl border-gray border bg-white">
            <h2 className="text-lg font-medium mb-4">اقلام سفارش</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-right">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-2 font-medium text-gray-700">#</th>
                        <th className="px-4 py-2 font-medium text-gray-700">نوع</th>
                        <th className="px-4 py-2 font-medium text-gray-700">نام</th>
                        <th className="px-4 py-2 font-medium text-gray-700">اطلاعات</th>
                        <th className="px-4 py-2 font-medium text-gray-700 text-left">
                            مبلغ
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {order.lines.map((line, idx) => {
                        console.log(line.license_key);
                        const is_course = !!line.course;
                        return <tr key={line.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2">{idx + 1}</td>
                            <td className="px-4 py-2">{is_course ? "دوره" : "رویداد"}</td>
                            <td className="px-4 py-2">
                                <Link
                                    className={"text-cyan-600"}
                                    href={is_course?`/courses/${line.course.id}`: `/events/${line.event.id}`}>
                                    {is_course ? line.course.name : line.event.title}
                                </Link>
                            </td>
                            {!is_course && <td className="px-4 py-2" dir={"ltr"}>
                                تاریخ شروع: {new Date(line.event.start_date).toLocaleString("fa-IR")}
                            </td>}
                            {is_course && <td className="px-4 py-2" dir={"rtl"}>
                                {line.license_key && <CopyButton license={line.license_key}/>}
                            </td>}

                            <td className="px-4 py-2 text-left">
                                {Number(is_course ? line.course.final_price : line.event.price).toLocaleString()} تومان
                            </td>
                        </tr>;
                    })}
                    {order.lines.length === 0 && (
                        <tr>
                            <td
                                colSpan={5}
                                className="px-4 py-4 text-center text-gray-500"
                            >
                                هیچ آیتمی در این سفارش وجود ندارد
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>;
}

export default OrderDetailPage;