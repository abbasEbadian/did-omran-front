import { getExam } from "@/api";
import { ExamType } from "@/api/types";
import Link from "next/link";

async function page({ params }: { params: { id: string } }) {
    const { id } = params;
    const {result, data: exam}: {result: string, data: ExamType} = await getExam(+id);
    
    return (
        <>
            <section className="bg-white100 py-16">
                <div className="max-w-[360px] mx-auto  ">
                    <div className="bg-white rounded-2xl shadow-custom-shadow px-6 py-4">
                        <h3 className=" text-dark font-semibold mb-4 text-center">
                            {exam?.name}
                        </h3>
                        <div className="text-center my-4">
                            <p className="text-secondary900 text-sm gap-1 mb-5 before:content-[' '] before:bg-did before:rounded-full before:w-4 before:h-4 before:relative flex before:-right-1 before:top-0.5">
                                تعداد سوالات: 
                                <span className="font-bold text-dark">{exam.question_count}</span>
                            </p>
                            <p className="text-secondary900 text-sm gap-1 mb-5 before:content-[' '] before:bg-did before:rounded-full before:w-4 before:h-4 before:relative flex before:-right-1 before:top-0.5">
                                مدت زمان: 
                                <span className="font-bold text-dark">{exam.duration} دقیقه</span> 
                            </p>
                            <p className="text-secondary900 text-sm gap-1 mb-5 before:content-[' '] before:bg-did before:rounded-full before:w-4 before:h-4 before:relative flex before:-right-1 before:top-0.5">
                               دسته‌بندی:
                                <span className="font-bold text-dark">{exam.category.name}</span> 
                            </p>
                            <p className="text-secondary900 text-sm gap-1 mb-5 before:content-[' '] before:bg-did before:rounded-full before:w-4 before:h-4 before:relative flex before:-right-1 before:top-0.5">
                               کاربران شرکت‌کرده:
                                <span className="font-bold text-dark">24</span> 
                            </p>
                        </div>
                        <div className="text-center w-4/6 mx-auto mt-12 pb-4">
                            <Link href={'/online-exam/'+exam.id} className="bg-blue text-white px-6 py-1 rounded-2xl w-full">
                                شروع آزمون
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default page;
