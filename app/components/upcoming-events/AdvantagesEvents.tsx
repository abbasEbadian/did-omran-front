import Image from "next/image";
import Saly1 from "/Saly1.png";
import Saly2 from "/Saly2.png";
import Saly3 from "/Saly3.png";
import Saly4 from "/Saly4.png";
import Link from "next/link";

function AdvantagesEvents() {
    return (
        <section>
            <div className="flex items-center justify-center gap-1">
                <span className="text-xl text-dark font-extrabold">
                    مزایای شرکت در رویداد‌های{" "}
                </span>
                <Link href="#" className="text-did font-black text-xl">
                    دیدعمران
                </Link>
            </div>
            <div className="flex lg:flex-row flex-col items-center justify-center gap-20 my-12">
                <div className="flex flex-col items-center gap-4">
                    <div className="rounded-full w-36 h-36 relative bg-gradient-to-b from-did/5 to-did">
                        <Image
                            className="absolute -right-4 bottom-4"
                            src={"/Saly4.png"}
                            alt="eye icone"
                            height={100}
                            width={130}
                        />
                    </div>
                    <span className="text-secondary text-xl font-black">
                        انتقال تجربه
                    </span>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="rounded-full w-36 h-36 relative bg-gradient-to-b from-did/5 to-[#A2B6F8]">
                        <Image
                            className="absolute -right-4 bottom-4"
                            src={"/Saly3.png"}
                            alt="eye icone"
                            height={130}
                            width={130}
                        />
                    </div>
                    <span className="text-secondary text-xl font-black">
                        به‌روزرسانی دانش مهندسی
                    </span>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="rounded-full w-36 h-36 relative bg-gradient-to-b from-did/5 to-[#71C9CE]">
                        <Image
                            className="absolute -right-4 bottom-4"
                            src={"/Saly2.png"}
                            alt="eye icone"
                            height={70}
                            width={130}
                        />
                    </div>
                    <span className="text-secondary text-xl font-black">
                        آشنایی با اساتید برجسته{" "}
                    </span>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="rounded-full w-36 h-36 relative bg-gradient-to-b from-did/5 to-[#8D66DE]">
                        <Image
                            className="absolute -right-4 bottom-4"
                            src={"/Saly1.png"}
                            alt="eye icone"
                            height={120}
                            width={120}
                        />
                    </div>
                    <span className="text-secondary text-xl font-black">
                        کسب مهارت
                    </span>
                </div>
            </div>
        </section>
    );
}

export default AdvantagesEvents;
