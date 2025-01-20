import Image from 'next/image'
import HiOutlineFolderDownload from '@/app/components/icons/HiOutlineFolderDownload.svg'
import Eye from '@/app/components/icons/eye.svg'
import ListRight from '@/app/components/icons/list-right.svg'
import Edit from '@/app/components/icons/edit-3.svg'
import bookkstoreImg from '@/public/img/bookkstore.png'
import Link from 'next/link'

function BookContent() {
  return (
    <>
    <div className=" bg-white shadow-custom-shadow rounded-b-2xl">
        <div className="w-full">
            <Image
                src={bookkstoreImg}
                alt="BsPlayCircle Img"
                height={275} 
                width={180}
                className='object-cover w-full'/>
        </div>
        <div className="flex flex-col gap-4 rounded-b-2xl border border-did/10 px-4 py-6">
            <span className="text-dark text-sm">عنوان: مبحت نهم مقررات ملی ساختمان</span>
            <div className="flex items-center gap-3">
                <div className="border-t-2 border-dashed border-secondary700 grow"></div>
                <div className="flex gap-1 items-center">
                    <Image
                    src={Eye}
                    alt="eye icone"
                    height={24} 
                    width={24}/>
                    <span className="text-secondary900 text-xs">1784</span>
                    <Link href="#" className="text-blue700 text-xs">مشاهده</Link>
                </div>
            </div>
           <div className="flex items-center justify-between">
                <div className="flex flex-col items-start gap-1">
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
                <Link href="#" className="text-white bg-did rounded-2xl text-sm px-8 py-2 flex gap-1 items-center">
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
    </>
  )
}

export default BookContent