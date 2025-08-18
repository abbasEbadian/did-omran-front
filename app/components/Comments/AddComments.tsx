import Image from "next/image";
import Link from "next/link";
function AddComments() {
    return (
        <>
            <div className="bg-did/10 px-4  py-7 rounded-2xl shadow-md max-w-md mx-auto">
                <span className="text-3xl font-medium text-secondary mb-8 text-center block mx-auto">
                    ثبت نظر
                </span>

                <form>
                    <div className="mb-5">
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-did/15 placeholder:text-secondary800 placeholder:text-xs rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="ایمیل خود را وارد کنید"
                        />
                    </div>

                    <div className="mb-4">
                        <textarea
                            className="w-full px-4 py-2 border border-did/15 placeholder:text-secondary800 placeholder:text-xs rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="متن نظر خود را وارد کنید"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue600 text-white py-3 px-4 rounded-2xl"
                    >
                        ارسال
                    </button>
                </form>

                <div className="flex items-center gap-1 mt-2">
                    <Image
                        src={"/icons/user-check.svg"}
                        alt="User Check Img"
                        width={20}
                        height={24}
                    />
                    <Link
                        href="#"
                        className="text-secondary  text-sm rounded-2xl"
                    >
                        ورود به عنوان دانشجو
                    </Link>
                </div>
            </div>
        </>
    );
}

export default AddComments;
