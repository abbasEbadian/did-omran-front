import Image from 'next/image';
import Link from 'next/link';
import ConsultationImg from '@/public/img/Consultation-img.png';

function Consultation() {
  return (
    <div className="relative">
      {/* Background Div */}
      <div className="bg-did/35 absolute bottom-0 right-0 w-full h-full z-30 "></div>

      {/* Image */}
      <div className="absolute z-20 w-full">
        <Image
          src={ConsultationImg}
          alt="Consultation Img"
          width={200} // Add width
          height={130}
          className='object-cover w-full'
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center z-50 relative">
        <span className="text-center text-white font-semibold">
          لورم ایپسوم متن
        </span>
        <span className="text-center text-white text-sm">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
        </span>
        <Link href="#"
          className="bg-white text-sm text-did rounded-2xl px-4 py-2 mt-4">
            ثبت نام

        </Link>
      </div>
    </div>
  );
}

export default Consultation;