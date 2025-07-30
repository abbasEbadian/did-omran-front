import Image from 'next/image'
import star from '@/app/components/icons/star.svg'
import eye from '@/app/components/icons/eye.svg'
import Link from 'next/link'

function FreeEducationItems() {
  return (
    <>
    <div className="flex flex-col bg-white shadow-custom-shadow rounded-2xl border border-did/10">
       
        <Image
            src={"/img/tests.jpg"}
            alt="Consultation Img"
            height={305}className="w-full object-cover rounded-t-2xl" />
    
        <div className="flex flex-col px-4 py-3 gap-4">
            <span className="text-dark text-sm">آموزش پلاگین Retouch4me در فتوشاپ، روتوش چهره در ۷ ثانیه</span>
            <div className="flex items-center">
                <div className="flex-grow border border-dashed border-secondary700 px-4"></div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <span className="text-yellow text-base">3.0</span>
                        <Image
                        src={star}
                        alt="star Img"
                        width={20}
                        height={20} />
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-secondary800 text-base">128</span>
                        <Image
                        src={eye}
                        alt="eye Img"
                        width={20}
                        height={20} />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                     <div className="rounded-full">
                     <Image
                        src={"/img/profile.png"}
                        alt="profile Img"
                        width={46}
                        height={46} />
                     </div>
                     <div className="flex flex-col items-start justify-start gap-1">
                        <span className="text-secondary text-xs font-normal"> مدرس:</span>
                        <span className="text-secondary text-sm font-bold">ارسطو اعتمادی</span>
                     </div>
                </div>
              <Link href="#" className="text-white bg-did text-sm py-3 px-8 rounded-2xl"> مشاهده</Link>

            </div>
        </div>
    </div>
    </>
  )
}

export default FreeEducationItems