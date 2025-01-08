import Image from 'next/image'
import Link from 'next/link'
import ConsultationImg from '@/public/img/Consultation-img.png'

function Consultation() {
  return (
    <>
   <div className="relative">
  
    <div className="absolute left-0 bottom-0 right-0">
        <Image
            src={ConsultationImg}
            alt="Consultation Img"
            height={130} />
    </div>
    <div className="bg-did/5 absolute bottom-0 right-0"></div>
    
    <div className="">
        <span className="">
        لورم ایپسوم متن
        </span>
        <span className="">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
        </span>
        <Link href="#" className="text-dark text-sm hover:text-gray-900">ثبت نام </Link>

    </div>
   
    </div> 
    </>
  )
}

export default Consultation