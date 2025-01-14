import Link from 'next/link'
import Check from '@/app/components/icons/check.svg'
import Image from 'next/image'

function RecentEvents() {
  return (
    <>
    <div className="container mx-auto my-32">
        <span className="text-dark text-2xl font-black text-center block mb-2">رویدادهای برگزار شده اخیر </span>
        <p className="text-secondary text-sm text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        <div className="grid grid-cols-4 gap-9 mt-24">
            <div className="col-span-1">
                <div className="bg-did700 rounded-2xl px-2 pb-11 pt-24 relative">
                    <div className="absolute -top-10 left-[38%]  bg-white rounded-full p-6">
                        <Image
                        src={Check}
                        alt="eye icone"
                        height={44} 
                        width={44}/>
                    </div>
                    <div className="flex items-center justify-center gap-2 border-b-2 border-b-white border-dashed flex-col pb-6 w-4/5 mx-auto">
                        <span className="text-dark text-xl font-black">لورم ایپسوم</span>
                        <span className="">
                            <b className="text-blue text-xl">28</b>
                            <span className="text-blue text-sm ">فروردین1403</span>
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 mt-2">
                        <span className="text-white text-sm font-black">لورم ایپسوم</span>
                        <p className="text-white text-xs mb-3">
                        لورم ایپسوم متن ساختگی با تولید سادگی
                        </p>
                        <Link href="#" className="text-white bg-did px-4 py-2 rounded-2xl text-xs shadow-custom-drop-shadow">مشاهده  رویداد</Link>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="bg-did800 rounded-2xl px-2 pb-11 pt-24 relative">
                    <div className="absolute -top-10 left-[38%]  bg-white rounded-full p-6">
                        <Image
                        src={Check}
                        alt="eye icone"
                        height={44} 
                        width={44}/>
                    </div>
                    <div className="flex items-center justify-center gap-2 border-b-2 border-b-white border-dashed flex-col pb-6 w-4/5 mx-auto">
                        <span className="text-dark text-xl font-black">لورم ایپسوم</span>
                        <span className="">
                            <b className="text-blue text-xl">28</b>
                            <span className="text-blue text-sm ">فروردین1403</span>
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 mt-2">
                        <span className="text-white text-sm font-black">لورم ایپسوم</span>
                        <p className="text-white text-xs mb-3">
                        لورم ایپسوم متن ساختگی با تولید سادگی
                        </p>
                        <Link href="#" className="text-white bg-did px-4 py-2 rounded-2xl text-xs shadow-custom-drop-shadow">مشاهده  رویداد</Link>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="bg-did rounded-2xl px-2 pb-11 pt-24 relative">
                    <div className="absolute -top-10 left-[38%]  bg-white rounded-full p-6">
                        <Image
                        src={Check}
                        alt="eye icone"
                        height={44} 
                        width={44}/>
                    </div>
                    <div className="flex items-center justify-center gap-2 border-b-2 border-b-white border-dashed flex-col pb-6 w-4/5 mx-auto">
                        <span className="text-dark text-xl font-black">لورم ایپسوم</span>
                        <span className="">
                            <b className="text-blue text-xl">28</b>
                            <span className="text-blue text-sm ">فروردین1403</span>
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 mt-2">
                        <span className="text-white text-sm font-black">لورم ایپسوم</span>
                        <p className="text-white text-xs mb-3">
                        لورم ایپسوم متن ساختگی با تولید سادگی
                        </p>
                        <Link href="#" className="text-white bg-did px-4 py-2 rounded-2xl text-xs shadow-custom-drop-shadow">مشاهده  رویداد</Link>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="bg-did900 rounded-2xl px-2 pb-11 pt-24 relative">
                    <div className="absolute -top-10 left-[38%]  bg-white rounded-full p-6">
                        <Image
                        src={Check}
                        alt="eye icone"
                        height={44} 
                        width={44}/>
                    </div>
                    <div className="flex items-center justify-center gap-2 border-b-2 border-b-white border-dashed flex-col pb-6 w-4/5 mx-auto">
                        <span className="text-dark text-xl font-black">لورم ایپسوم</span>
                        <span className="">
                            <b className="text-blue text-xl">28</b>
                            <span className="text-blue text-sm ">فروردین1403</span>
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 mt-2">
                        <span className="text-white text-sm font-black">لورم ایپسوم</span>
                        <p className="text-white text-xs mb-3">
                        لورم ایپسوم متن ساختگی با تولید سادگی
                        </p>
                        <Link href="#" className="text-white bg-did px-4 py-2 rounded-2xl text-xs shadow-custom-drop-shadow">مشاهده  رویداد</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default RecentEvents