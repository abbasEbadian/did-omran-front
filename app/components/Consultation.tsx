import Image from "next/image";
import Link from "next/link";
import ConsultationImg from "@/public/img/Consultation-img.png";

function Consultation() {
    return (
        <div className="relative h-[130px] rounded-2xl overflow-hidden mb-4 py-8">
            {/* Image */}
            <div className="absolute inset-0 z-10">
                <Image
                    src={ConsultationImg}
                    alt="Consultation Img"
                    width={300}
                    height={130}
                    placeholder="blur"
                />
            </div>

            {/* Background Color Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-did/95 to-dark/0 z-20"></div>

            {/* Content */}
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-white text-center p-4">
                <span className="font-semibold text-sm">
                    دریافت مشاوره رایگان
                </span>
                <span className="text-xs mt-2">
                  به‌صرفه‌ترین پکیج آموزشی
                </span>
                <Link
                    href="/free-package"
                    className="bg-white text-did text-sm md:text-base rounded-2xl px-6 py-2 mt-4 hover:bg-did hover:text-white transition-colors duration-300"
                    aria-label="ثبت نام"
                >
                    ثبت نام
                </Link>
            </div>
        </div>
    );
}

export default Consultation;
