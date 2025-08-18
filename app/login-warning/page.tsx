import Image from "next/image";
import Link from "next/link";

function Page() {
    return (
        <>
            <div className="bg-white100">
                <div className="container mx-auto grid grid-cols-2 gap-8 py-20">
                    <div className="col-span-2 lg:col-span-1">
                        <div className="">
                            <div
                                className="flex items-center gap-2 mb-2 border-b-2 border-b-secondary700 border-dashed pb-4">
                                <Image
                                    src={"/icons/FiCheckCircle.svg"}
                                    alt="CheckSmall icone"
                                    height={24}
                                    width={24}
                                />
                                <span
                                    className="text-dark text-3xl font-blod">برای ادامه فرآیند لطفا وارد سایت شوید</span>
                            </div>
                            <span className="text-dark text-base">دسترسی مادام العمر</span>
                            <p className="text-secondary text-sm">برای دسترسی دائمی به دوره ها و پشتیبانی لازم است به
                                اکانت کاربری خود وارد شوید. برای دسترسی دائمی به دوره ها و پشتیبانی لازم است به اکانت
                                کاربری خود وارد شوید. </p>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <div
                            className="bg-white rounded-2xl px-4 py-8 flex flex-col items-center justify-center lg:max-w-[450px] mx-auto border border-did/10">
                            <span className="text-secondary text-base">ورود به دید عمران</span>
                            <div className="my-5 w-full">
                                <input
                                    type="text"
                                    className="w-full p-4 bg-blue500 placeholder:text-did/50 placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                                    placeholder="نام و نام خانوادگي"
                                />
                                <small className="text-secondary800">مثلا:09141234567</small>
                            </div>
                            <Link href="#"
                                  className="text-white bg-did rounded-2xl text-sm px-6 py-3 w-full text-center">
                                ورود به دید عمران
                            </Link>
                            <span className="text-xs text-secondary mt-1">
                    ثبت نام و ورود شما به معنای پذیرش شرایط دید عمران می باشد.
                    </span>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;