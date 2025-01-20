import Image from 'next/image'
import FaChalkboardTeacher from '@/app/components/icons/FaChalkboardTeacher.svg'
import UsersMore from '@/app/components/icons/users-more.svg'
import IoTimeOutline from '@/app/components/icons/IoTimeOutline.svg'
import Check from '@/app/components/icons/check.svg'
import Link from 'next/link'


function AllEventsInfo() {
  return (
    <>
    <div className="container mx-auto my-16 flex flex-col gap-4">
       <div className="bg-did700 rounded-2xl pe-4 py-5 ps-12 flex flex-col items-starts justify-end gap-2 relative hover:bg-blue400 hover:transition-[0.2] hover:shadow-custom-shadow">
            <div className="absolute top-[15%] -right-9 shadow-custom-shadow bg-white rounded-full p-4">
                <Image
                src={Check}
                alt="eye icone"
                height={34} 
                width={34}/>
            </div>
            <span className="text-dark text-sm font-semibold">لورم ایپسوم متن ساختگی با تولید سادگی</span>
                <div className="flex items-center justify-between">
                    <span className="flex gap-1 items-center">
                        <b className="text-blue text-xl">28</b>
                        <span className="text-blue text-sm font-medium">فروردین1403</span>
                    </span>
                    <div className="flex items-center gap-1">
                        <Image
                            src={FaChalkboardTeacher}
                            alt="CheckSmall icone"
                            height={24} 
                            width={24}
                                />
                        <span className="text-dark text-sm">توسط:</span>
                        <span className="text-blue text-sm font-black">ارسطو اعتمادی</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image
                            src={UsersMore}
                            alt="CheckSmall icone"
                            height={24} 
                            width={24}
                                />
                        <span className="text-dark text-sm">شرکت کننده:</span>
                        <span className="text-blue text-sm font-black">100نفر</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image
                            src={IoTimeOutline}
                            alt="CheckSmall icone"
                            height={24} 
                            width={24}
                                />
                        <span className="text-dark text-sm">مدت زمان:</span>
                        <span className="text-blue text-sm font-black">50دقیقه </span>
                    </div>
                    <Link href="#" className="text-white bg-blue700 rounded-2xl text-sm px-8 py-2 flex gap-1 items-center">
                        مشاهده رویداد
                    </Link>
                </div>
       </div>
       <div className="bg-did700 rounded-2xl pe-4 py-5 ps-12 flex flex-col items-starts justify-end gap-2 relative hover:bg-blue400 hover:transition-[0.2] hover:shadow-custom-shadow">
            <div className="absolute top-[15%] -right-9 shadow-custom-shadow bg-white rounded-full p-4">
                <Image
                src={Check}
                alt="eye icone"
                height={34} 
                width={34}/>
            </div>
            <span className="text-dark text-sm font-semibold">لورم ایپسوم متن ساختگی با تولید سادگی</span>
                <div className="flex items-center justify-between">
                    <span className="flex gap-1 items-center">
                        <b className="text-blue text-xl">28</b>
                        <span className="text-blue text-sm font-medium">فروردین1403</span>
                    </span>
                    <div className="flex items-center gap-1">
                        <Image
                            src={FaChalkboardTeacher}
                            alt="CheckSmall icone"
                            height={24} 
                            width={24}
                                />
                        <span className="text-dark text-sm">توسط:</span>
                        <span className="text-blue text-sm font-black">ارسطو اعتمادی</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image
                            src={UsersMore}
                            alt="CheckSmall icone"
                            height={24} 
                            width={24}
                                />
                        <span className="text-dark text-sm">شرکت کننده:</span>
                        <span className="text-blue text-sm font-black">100نفر</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image
                            src={IoTimeOutline}
                            alt="CheckSmall icone"
                            height={24} 
                            width={24}
                                />
                        <span className="text-dark text-sm">مدت زمان:</span>
                        <span className="text-blue text-sm font-black">50دقیقه </span>
                    </div>
                    <Link href="#" className="text-white bg-blue700 rounded-2xl text-sm px-8 py-2 flex gap-1 items-center">
                        مشاهده رویداد
                    </Link>
                </div>
       </div>
    </div>
    </>
  )
}

export default AllEventsInfo