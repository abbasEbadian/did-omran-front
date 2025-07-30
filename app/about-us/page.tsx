import Image from 'next/image'
import AboutUs from '@/app/components/icons/about-us.svg'

function Page() {
  return (
    <>
  
        <div className="bg-white rounded-2xl container mx-auto  px-11 pb-14 shadow-[20px_20px_30px_0px_rgba(102,106,245,0.13)] pt-6">
                <div className="grid grid-cols-2 gap-6 items-start">
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex flex-col gap-4 items-center lg:items-start">
                            <span className="text-2xl text-did font-black">درباره ما</span>
                            <p className="text-sm text-secondary text-justify">
                            با وجود آموزش‌های چندین ساله دانشگاهی هنوز هم ارتباط بین دانشگاه و صنعت ساختمان خلل‌هایی دارد که فارغ التحصیلان دانشگاهی به ویژه مهندسین عمران و معماری را سردرگم کرده است. ما در دید عمران این خلل‌ها را برطرف کرده و تا ورود شما به بازار کار حرفه‌ای مهندسی در کنارتان هستیم. آنچه در دید عمران بدست‌ می‌آورید دیدگاه و تخصص مهندسی است؛ نه صرفا یک پروانه مهندسی!
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <div className="w-3/4 mx-auto">
                            <Image
                        src={AboutUs}
                        alt="about us Img"
                        height={30}
                        width={306} className="w-full"/>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col gap-8">
                    <div className="border-dashed border-b-2 border-b-secondary700 pb-3 flex flex-col items-start gap-2">
                        <span className="text-2xl text-did font-black">
                        تماس با ما 
                        </span>
                        <p className="text-sm text-secondary900">
                        سوال یا تذکری دارید؟ برای ما پیام بنویسید
                        </p>
                    </div>
                    <div className="">
                        
                        <form>
                            <div className="flex items-center gap-4 lg:flex-row flex-col">
                                <div className="w-full">
                                    <input
                                        type="text"
                                        className="w-full p-4 bg-blue500 placeholder:text-did placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                                        placeholder="نام و نام خانوادگی خود را وارد کنید"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="email"
                                        className="w-full p-4 bg-blue500 placeholder:text-did placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                                        placeholder="ایمیل خود را وارد کنید"
                                    />
                                </div>

                            </div>
                            <div className="my-4">
                            
                                <textarea
                                    className="w-full p-4 bg-blue500 placeholder:text-did placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500" rows={5}
                                
                                    placeholder="ما گوش می کنیم..."
                                ></textarea>
                            </div>

                        <div className=" lg:w-2/4 flex ms-auto">
                        <button
                            type="submit"
                            className="w-full bg-did text-white py-3 px-4 rounded-2xl"
                            >
                            ارسال
                            </button>
                        </div>
                            
                        </form>
                    </div>
                </div>
        </div>

    </>
  )
}

export default Page