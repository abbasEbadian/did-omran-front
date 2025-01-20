import Image from 'next/image'
import FiShare2 from '@/app/components/icons/FiShare2.svg'
import FaInstagram from '@/app/components/icons/FaInstagram.svg'
import FaTelegram from '@/app/components/icons/FaTelegramPlane.svg'
import BsFacebook from '@/app/components/icons/BsFacebook.svg'
import Link from 'next/link'


function ShareBox() {
  return (
    <>
    <div className="flex items-start gap-3">
        <Link href="#" className="">
            <Image
                src={FiShare2}
                alt="FiShare2 Img"
                height={24} 
                width={24}/>
        </Link>
        <span className="text-dark text-sm">
        اشتراک گذاری این صفحه
        </span>
        <Link href="#" className="">
            <Image
                src={BsFacebook}
                alt="BsFacebook Img"
                height={24} 
                width={24}/>
        </Link>
        <Link href="#" className="">
            <Image
                src={FaInstagram}
                alt="FaInstagram Img"
                height={24} 
                width={24}/>
        </Link>
        <Link href="#" className="">
            <Image
                src={FaTelegram}
                alt="FaTelegram Img"
                height={24} 
                width={24}/>
        </Link>
    </div>
    </>
  )
}

export default ShareBox