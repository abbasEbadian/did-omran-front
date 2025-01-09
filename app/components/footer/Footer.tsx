import Image from 'next/image'
import Link from 'next/link'
import LogoWhite from '@/app/components/icons/logo-white.svg'
import ArrowRight from '@/app/components/icons/arrow-right.svg'
import Telegram from '@/app/components/icons/Telegram.svg'
import Youtube from '@/app/components/icons/Youtube.svg'
import aparat from '@/app/components/icons/aparat1 copy 1.png'
import Instagram from '@/app/components/icons/Instagram.svg'
import enamad from '@/public/img/enamad.png'



function Footer() {
  return (
    <>
  <div className="bg-did py-8">
    <div className="grid grid-cols-4 container mx-auto gap-8 m-4">
      <div className="col-span-1">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-start gap-3">
                <Link href="#" className="flex items-center gap-2 font-bold text-xl"> 
                <Image
                        src={LogoWhite}
                        alt="profile Img"
                        width={70}
                        height={70} />
                        دیــد عــمران
                </Link>
                <p className="text-white text-sm">
                تهران ، پونک ، باغ فیض ، عدل جنوبی ساختمان رویال رزیدنس ، واحد ۱۷
                </p>
            </div>
            <Link href="#" className="flex items-center justify-between border border-white rounded-full ps-1 pe-4 py-1">
              
                <div  className="text-white bg-blue700 text-sm p-3 rounded-full"> 
                <Image
                    src={ArrowRight}
                    alt="Arrow Right"
                    width={24}
                    height={24} />
                </div>
                <span className="">تماس باما</span>
            </Link>
            <div className="flex items-center  justify-between">
            <Link href="#" className="">
              <Image
                  src={aparat}
                  alt="profile Img"
                  width={70}
                  height={70} />
              </Link>
              <Link href="#" className="">
              <Image
                src={Instagram}
                alt="profile Img"
                width={70}
                height={70} />
              </Link>

              <Link href="#" className="">
              <Image
                src={Youtube}
                alt="profile Img"
                width={70}
                height={70} />
              </Link>
              <Link href="#" className="">
              <Image
                src={Telegram}
                alt="profile Img"
                width={70}
                height={70} />
              </Link>
            

            </div>
          </div>
      </div>
      <div className="col-span-2">
          <div className="flex  flex-col items-start px-8 gap-5 mb-5">
              <span className="text-white font-bold text-xl">
              درباره ما
              </span>
              <p className="text-base text-white font-light text-justify">
                با وجود آموزش‌های چندین ساله دانشگاهی هنوز هم ارتباط بین دانشگاه و صنعت ساختمان خلل‌هایی دارد که فارغ التحصیلان دانشگاهی به ویژه مهندسین عمران و معماری را سردرگم کرده است. ما در دید عمران این خلل‌ها را برطرف کرده و تا ورود شما به بازار کار حرفه‌ای مهندسی در کنارتان هستیم. آنچه در دید عمران بدست‌ می‌آورید دیدگاه و تخصص مهندسی است؛ نه صرفا یک پروانه مهندسی!
              </p>
          </div>
          <div className="flex items-center justify-between px-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-start gap-2">
                <span className="text-whie text-base">
                    تلفن تماس 
                </span>
                <span className="text-whie text-xl font-bold">021-28429396</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <span className="text-whie text-base">
                ایمیل ارتباطی
                </span>
                <span className="text-whie text-xl font-bold">
                didomran@gmail.com
                </span>
              </div>
            </div>
            <div className="">
            <Link href="">
            <Image
              src={enamad}
              alt="Arrow Right"
              width={107}
              height={117} />
            </Link>
            </div>
          </div>
      </div>
      <div className="col-span-1">
          <div className="flex flex-col items-center gap-5">
              <span className="text-white font-bold text-xl">
              لینک های مفید
              </span>
              <div className="flex items-start flex-col gap-6">
                <Link href="#" className="text-white bg-did text-sm">حساب من </Link>
                <Link href="#" className="text-white bg-did text-sm">دوره های آموزشی </Link>
                <Link href="#" className="text-white bg-did text-sm"> آزمون ها</Link>
                <Link href="#" className="text-white bg-did text-sm">درباره ما </Link>
                <Link href="#" className="text-white bg-did text-sm"> تماس باما</Link>

              </div>

          </div>
      </div>

    </div>
    <div className="border-t border-secondary700 flex items-center justify-center pt-4 container mx-auto mt-9">
      <span className="text-white text-sm s">Copyright © 2012 - 2024 DID.ir All Rights Reserved.</span>
    </div>
  </div>
    </>
  )
}

export default Footer