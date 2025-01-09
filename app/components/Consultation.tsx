import Image from 'next/image'
import Link from 'next/link'
import ConsultationImg from '@/public/img/Consultation-img.png'

function Consultation() {
  return (
    <>
   <div className="relative">
    <div className="bg-did/5 absolute bottom-0 right-0 z-40"></div>
    <div className="absolute z-20">
        <Image
              src={ConsultationImg}
              alt="Consultation Img"
              height={130} />
  </div>
    <div className="flex flex-col items-center justify-center z-50">

        <span className="">
        لورم ایپسوم متن
        </span>
        <span className="">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
        </span>
        <Link href="#" className="bg-white text-sm text-darkk rounded-2xl ">ثبت نام </Link>

    </div>
   
    </div> 
    </>
  )
}

export default Consultation