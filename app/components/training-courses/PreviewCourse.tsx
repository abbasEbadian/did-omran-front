import Image from 'next/image'
import Link from 'next/link'
import BsPlayCircle from '@/app/components/icons/BsPlayCircle.svg'
import Preview from '@/public/img/course-preview-img.png'


function PreviewCourse() {
  return (
    <>
    <div className="relative flex flex-col items-center justify-center gap-4 mt-9 mb-56">
        <div className="bg-gradient-to-b from-did/35 to-secondary900/30 absolute z-20 inset-0 rounded-2xl"></div>
        <div className="absolute inset-0 z-10">
            <Image
                className="w-full"
                src={Preview}
                alt="video Img"
                height={177} 
                width={360}
                objectFit='cover'/>
                
        </div>
       <div className="flex flex-col items-center justify-center gap-4 z-50 relative">
            <Link href="#" className="">
                    <Image
                        src={BsPlayCircle}
                        alt="BsPlayCircle Img"
                        height={80} 
                        width={80}/>
            </Link>
            <span className="text-white text-xs font-semibold">پیش نمایش دوره </span>
            <span className="text-white text-sm">دوره جامع افتر افکت (مقدماتی ، پیشرفته و استادی)</span>
       </div>
    </div>
    </>
  )
}

export default PreviewCourse