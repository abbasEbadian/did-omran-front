import Image from 'next/image'
import Link from 'next/link'
import Telegram from '@/public/Telegram.png';
import Youtube from '@/public/YT2OctDenoiserBeauty_002 copy.png';
import Instagram from '@/public/Instagram.png';
import Saly from '@/app/components/icons/Saly-24.svg'
function SocialMedia() {
  return (
    <>
    <div className="flex flex-col items-center gap-4 bg-gradient-to-b from-white to-accent100 rounded-2xl pb-6 px-4 relative pt-28 mt-56 translate-y-16 ">
        <div className="absolute right-[154px] -top-28">
            <Image
                src={Saly}
                alt="CheckSmall icone"
                height={196} 
                width={177}
                />
        </div>
        <span className="text-dark text-xl font-semibold">
        راه‌های ارتباطی با دید عمران
        </span>
        <span className="text-accent text-sm">
        راه‌های ارتباطی با دید عمرانراه‌های ارتباطی با دید عمران
        </span>
        <div className="flex items-center gap-4">
            <Link href="#" className="">
                <Image
                    src={Instagram}
                    alt="Instagram Img"
                    height={85} 
                    width={85}/>
            </Link>
            <Link href="#" className="">
                <Image
                    src={Youtube}
                    alt="Youtube Img"
                    height={85} 
                    width={85}/>
            </Link>
            <Link href="#" className="">
                <Image
                    src={Telegram}
                    alt="Telegram Img"
                    height={85} 
                    width={85}/>
            </Link>
        </div>
    </div>
    </>
  )
}

export default SocialMedia