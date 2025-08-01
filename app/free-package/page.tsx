"use client";

import Image from "next/image";
import OnlineTest from "@/app/components/icons/undraw_online_test.svg";
import AndrawAnalysis from "@/app/components/icons/undraw_detailed_analysis.svg";
import Counter from "@components/Counter";

function Page() {
    const date = new Date();
    date.setDate(new Date().getDate() + 5);
    const timestamp = date.getTime();
    return (
        <>
            <div className="bg-white rounded-2xl pt-12 pb-14 lg:px-28 px-4 container mx-auto ">
                <div className="flex flex-col items-center gap-8 pb-11">
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-did text-3xl font-medium">
                            مهلت دریافت رایگان
                        </span>
                        <Counter date={timestamp} />
                    </div>
                </div>
                <div className="flex flex-col border-t-2 border-dashed border-t-secondary700 pt-11 lg:gap-12 gap-5">
                    <div className="flex flex-col lg:items-start items-center gap-3">
                        <span className="text-did lg:text-2xl text-xl font-bold">
                            دریافت پکیج رایگان روش قبولی در آزمون محاسبات
                        </span>
                        <span className="lg:text-base text-sm  text-secondary900 lg:text-start text-center">
                            لطفا جهت دریافت فوری و در لحظه‌‌‌‌‌‌‌‌‌‌ی پکیج روش
                            قبولی در آزمون محاسبات، اطلاعات خواسته شده در فرم
                            زیر را تکمیل کنید.
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="lg:col-span-1 col-span-2">
                            <form action="">
                                <div className="mb-5 w-full">
                                    <input
                                        type="text"
                                        className="w-full p-4 bg-blue500 placeholder:text-did placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                                        placeholder="نام و نام خانوادگی خود را وارد کنید"
                                    />
                                </div>
                                <div className="mb-5 w-full">
                                    <input
                                        type="text"
                                        className="w-full p-4 bg-blue500 placeholder:text-did placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                                        placeholder="تلفن خود را وارد کنید"
                                    />
                                </div>
                                <div className="mb-5 w-full">
                                    <input
                                        type="text"
                                        className="w-full p-4 bg-blue500 placeholder:text-did placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                                        placeholder="ایمیل خود را وارد کنید"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-did text-white p-4 rounded-2xl text-xs"
                                >
                                    ثبت و دریافت ایمیل
                                </button>
                            </form>
                        </div>
                        <div className="lg:col-span-1 col-span-2 flex justify-center">
                            <Image
                                src={OnlineTest}
                                alt="about us Img"
                                height={261}
                                width={301}
                                className=" w-4/5 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col gap-8 mt-10 mb-96 lg:px-0 px-4 ">
                <div className="border-dashed border-b-secondary700 lg:w-1/2 py-3 border-b-2">
                    <span className="text-dark font-black lg:text-base text-sm lg:text-start text-center block">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است
                    </span>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className="w-full">
                        <Image
                            src={AndrawAnalysis}
                            alt="AndrawAnalysis Img"
                            height={289}
                            width={467}
                            className="lg:w-full w-4/5 mx-auto"
                        />
                    </div>

                    <p className="text-secondary lg:text-base text-xs px-4 text-justify">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                        و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                        متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                        برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                        پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                        سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                        دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                        طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Page;
