import Image from "next/image";
import Link from "next/link";
import ScoreStarFreeFilm from "@components/free-education-single/ScoreStarFreeFilm";

function QuestionBox() {
    return (
        <>
            <div
                className="flex flex-col bg-secondary700/40 rounded-2xl lg:px-16 px-4 py-8 container mx-auto my-36 gap-16">
                <div className="flex flex-col lg:items-start items-center
         gap-2">
           <span className="text-dark text-2xl font-black">
           گفتگو و سوالات شما
           </span>
                    <p className="text-secondary900 text-base text-center lg:text-start">
                        در این قسمت میتوانید نظر یا سوال خود را در مورد مقاله یا آموزش مطرح کنید.
                    </p>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-dark text-base font-bold">
                دیدگاهتان را بنویسید
                </span>
                        <p className="text-secondary text-sm">
                            با عنوان کاربر دید عمران وارد حساب کاربری خود شده اید ...
                        </p>
                    </div>
                    <div className="flex items-center gap-4 lg:flex-row  flex-col">
                        <div className="flex flex-col gap-3 items-center justify-center">
                            <Image
                                src={"/icons/profile-demo.svg"}
                                alt="Profile Img"
                                height={100}
                                width={100}/>

                            <Link href="#"
                                  className="text-white bg-did rounded-2xl text-sm px-6 py-2 flex gap-1 items-center whitespace-nowrap">

                                ارسال دیدگاه
                            </Link>
                        </div>
                        <div className="mb-4 grow w-full">
                
                    <textarea
                        className="w-full p-4 bg-white bordr border-did/15 placeholder:text-did placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                        rows={7}

                        placeholder="ما گوش می کنیم..."
                    ></textarea>
                        </div>


                    </div>
                    <ScoreStarFreeFilm/>
                </div>
            </div>
        </>
    );
}

export default QuestionBox;