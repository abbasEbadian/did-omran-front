import Image from 'next/image'
import BsBox from '@/app/components/icons/BsBox.svg'
import FaLinkedinIn from '@/app/components/icons/FaLinkedinIn.svg'
import FaInstagram from '@/app/components/icons/FaInstagram.svg'
import FaTelegramPlane from '@/app/components/icons/FaTelegramPlane.svg'
import Link from 'next/link'

function Instructor() {
  return (
    <>
        <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
            <Image
                src={BsBox}
                alt="CheckSmall icone"
                height={24} 
                width={24}
                />
            <span className="text-secondary900 text-sm"> 14 دوره</span>
        </div>
        <p className="text-secondary text-sm">
        لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از  طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است   و برای شرایط فعلی تکنولوژی مورد نیاز   و  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد   کتابهای زیادی در  شصت و سه درصد گذشته حال و آینده  
        </p>
        <p className="text-did text-xs">
        به تعهد خود به ارتقای دانش و  مهارت‌هایم پایبند هستم و تا زمانی که بتوانم، به مطالعه و یادگیری ادامه  خواهم داد و در دیدعمران با شما به اشتراک خواهم گذاشت.
        </p>
        <div className="flex items-center justify-end gap-4 mt-4">
            <Link href="#Decription" className="text-dark text-sm">
                <Image
                    src={FaLinkedinIn}
                    alt="FaLinkedinIn icone"
                    height={24} 
                    width={24}
                    />
            </Link>
            <Link href="#Decription" className="text-dark text-sm">
                <Image
                    src={FaInstagram}
                    alt="FaInstagram icone"
                    height={24} 
                    width={24}
                    />
            </Link>
            <Link href="#Decription" className="text-dark text-sm">
                <Image
                    src={FaTelegramPlane}
                    alt="FaTelegramPlane icone"
                    height={24} 
                    width={24}
                    />
            </Link>
        </div>
    </div>
    </>
  )
}

export default Instructor