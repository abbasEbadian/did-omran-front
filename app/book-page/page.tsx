import Image from 'next/image'
import React from 'react'
import bookkstoreImg from '@/public/img/bookkstore.png'
import ListRight from '@/app/components/icons/list-right.svg'
import Edit from '@/app/components/icons/edit-3.svg'
import HiOutlineFolderDownload from '@/app/components/icons/HiOutlineFolderDownload.svg'
import Link from 'next/link'

function page() {
  return (
    <div className='bg-white100'>
    <div className="container mx-auto grid grid-cols-12 gap-5 py-12">
        <div className="col-span-12 lg:col-span-4">
        <div className="w-full rounded-2xl">
            <Image
                src={bookkstoreImg}
                alt="BsPlayCircle Img"
                height={275} 
                width={180}
                className='object-cover w-full rounded-2xl'/>
        </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-col gap-4">
                <span className="text-dark text-xl font-black">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</span>
                <p className="text-secondary text-justify text-sm border-b-2 border-dashed border-b-secondary700 pb-4">لورم ایپسوم مت
                ن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیاد
                ن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیاد
                ن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی </p>
                <div className="flex items-center justify-between bg-white border border-did/10 rounded-2xl px-6 py-3">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <Image
                                src={ListRight}
                                alt="CheckSmall icone"
                                height={24} 
                                width={24}
                                />
                            <span className="text-secondary900 text-xs">تعداد صفحات: </span>
                            <span className="text-secondary900 text-xs">243</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Image
                                src={Edit}
                                alt="CheckSmall icone"
                                height={24} 
                                width={24}
                                />
                            <span className="text-secondary900 text-xs">ویرایش: </span>
                            <span className="text-secondary900 text-xs">1399</span>
                        </div>
                    </div>
                    <Link href="#" className="text-whitw bg-did rounded-2xl text-sm px-8 py-2 flex gap-1 items-center">
                        <Image
                            src={HiOutlineFolderDownload}
                            alt="HiOutlineFolderDownload Img"
                            width={24}
                            height={24} />
                            دانلود
                    </Link>
           </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default page