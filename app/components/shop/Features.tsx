import Image from "next/image";

function Features() {
    return (
        <>
            <div className="container mx-auto grid grid-cols-4 gap-4 my-12">
                <div className="col-span-4 lg:col-span-1">
                    <div
                        className="bg-white rounded-2xl hover:bg-blue500 px-8 py-20 flex flex-col items-center justify-center gap-2 shadow-custom-shadow">
                        <Image
                            src={"/icons/data-screen.svg"}
                            alt="CheckSmall icone"
                            height={70}
                            width={70}
                        />
                        <span className="text-did text-3xl font-semibold">+300</span>
                        <span className="text-dark text-xl">دانشجو</span>
                    </div>
                </div>
                <div className="col-span-4 lg:col-span-1">
                    <div
                        className="bg-white rounded-2xl hover:bg-blue500 px-8 py-20 flex flex-col items-center justify-center gap-2 shadow-custom-shadow">
                        <Image
                            src={"/icons/event-2319.svg"}
                            alt="CheckSmall icone"
                            height={70}
                            width={70}
                        />
                        <span className="text-did text-3xl font-semibold">+5000</span>
                        <span className="text-dark text-xl">تست</span>
                    </div>
                </div>
                <div className="col-span-4 lg:col-span-1">
                    <div
                        className="bg-white rounded-2xl hover:bg-blue500 px-8 py-20 flex flex-col items-center justify-center gap-2 shadow-custom-shadow">
                        <Image
                            src={"/icons/pencil-2317.svg"}
                            alt="CheckSmall icone"
                            height={70}
                            width={70}
                        />
                        <span className="text-did text-3xl font-semibold">+20000</span>
                        <span className="text-dark text-xl">دقیقه</span>
                    </div>
                </div>
                <div className="col-span-4 lg:col-span-1">
                    <div
                        className="bg-white rounded-2xl hover:bg-blue500 px-8 py-20 flex flex-col items-center justify-center gap-2 shadow-custom-shadow">
                        <Image
                            src={"/icons/Group.svg"}
                            alt="CheckSmall icone"
                            height={70}
                            width={70}
                        />
                        <span className="text-did text-3xl font-semibold">+20</span>
                        <span className="text-dark text-xl">کتاب</span>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Features;