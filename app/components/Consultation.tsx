import Image from "next/image";
import Link from "next/link";

function Consultation() {
    return (
        <div className="relative lg:h-[165px] h-[150px] rounded-2xl overflow-hidden mb-4 py-8 shadow-lg mx-3 lg:mx-0">
            {/* Image */}
            <div className="absolute inset-0 z-10">
                <Image
                    src={"/img/Consultation-img.png"}
                    alt="Consultation Img"
                    width={300}
                    height={130}
                />
            </div>

            <div className="absolute inset-0 bg-did/15 backdrop-blur-sm z-20"></div>

            {/* Content */}
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-cente text-center p-4">
                <span className="font-black  text-xl text-white py-1 rounded px-2">
                فرصت ویژه
                </span>
                <span className="text-base mt-2 text-white font-medium">
                مشاوره رایگان | مقرون‌به‌صرفه‌ترین پکیج آموزشی
                </span>
                <Link
                    href="/free-package"
                    className="bg-did text-white text-sm md:text-base rounded-2xl px-6 py-2 mt-4 transition-colors duration-300"
                    aria-label="ثبت نام"
                >
                    همین حالا ثبت‌نام کنید
                </Link>
            </div>
        </div>
    );
}

export default Consultation;
