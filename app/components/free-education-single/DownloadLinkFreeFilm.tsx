import Image from 'next/image'
import FiFilm from '@/app/components/icons/FiFilm.svg'
import Download from '@/app/components/icons/download.svg'
import HiOutlineChartPie from '@/app/components/icons/HiOutlineChartPie.svg'
import Link from 'next/link'
function DownloadLinkFreeFilm() {
  return (
    <>
    <div className="flex flex-col items-start gap-4 bg-did/15 p-4 rounded-2xl">
        <div className="flex items-center">
            <Image
                src={FiFilm}
                alt="FiFilm Img"
                height={24} 
                width={24}/>
                <span className="text-dark text-sm">
                دانلود فیلم آموزش پلاگین Retouch4me در فتوشاپ
                </span>
        </div>
        <div className="flex items-center">
            <Image
                src={HiOutlineChartPie}
                alt="Profile Img"
                height={24} 
                width={24}/>
                <span className="text-secondary text-sm">
                حجم: 164mb (مگابایت)
                </span>
        </div>
        <div className="mt-2 ms-auto">
            
            <Link href="#" className="text-white bg-did rounded-2xl text-sm px-6 py-2 flex gap-1 items-center">
            <Image
                src={Download}
                alt="User Check Img"
                width={24}
                height={24} />
                لینک دانلود
            </Link>
        </div>
</div>
    </>
  )
}

export default DownloadLinkFreeFilm