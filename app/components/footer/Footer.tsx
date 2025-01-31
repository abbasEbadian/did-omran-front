import Image from 'next/image';
import Link from 'next/link';
import LogoWhite from '@/app/components/icons/logo-white.svg';
import ArrowRight from '@/app/components/icons/arrow-right.svg';
import Telegram from '@/public/Telegram.png';
import Youtube from '@/public/YT2OctDenoiserBeauty_002 copy.png';
import aparat from '@/public/aparat1 copy 1.png';
import Instagram from '@/public/Instagram.png';
import enamad from '@/public/img/enamad.png';
import FooterBg from '@/public/img/footerBg.png'

function Footer() {
  return (
    <>

      <div className="relative mt-96">
        <div className="absolute -bottom-20 w-full z-20">
        <Image
          src={FooterBg}
          alt="FooterBg"
          width={1432}
          height={66}
          className="object-contain w-full"
        />
        </div>
        {/* بخش گنبدی بالای فوتر */}
        <div
            className="absolute -top-40 left-0 w-full h-40 bg-did z-10"
            style={{
              clipPath: 'ellipse(150% 100% at 50% 100%)', // ایجاد شکل گنبدی
            }}
        ></div>
      </div>
      <div className="bg-gradient-to-b from-did to-[#023653] py-8">

        <div className="grid grid-cols-4 container mx-auto gap-8 px-4">
          {/* Column 1: Logo, Address, Contact Button, Social Icons */}
          <div className="lg:col-span-1 col-span-4">
            <div className="flex flex-col gap-5">
              {/* Logo and Address */}
              <div className="flex flex-col items-start gap-3">
                <Link href="#" className="flex items-center gap-2 font-bold text-xl">
                  <Image src={LogoWhite} alt="DID Omran Logo" width={70} height={70} />
                  دیــد عــمران
                </Link>
                <p className="text-white text-sm">
                  تهران ، پونک ، باغ فیض ، عدل جنوبی ساختمان رویال رزیدنس ، واحد ۱۷
                </p>
              </div>

              {/* Contact Button */}
              <Link
                href="#"
                className="flex items-center justify-between border border-white rounded-full ps-1 pe-4 py-1 hover:bg-white hover:text-did transition-all duration-300"
              >
                <div className="text-white bg-blue700 text-sm p-3 rounded-full">
                  <Image src={ArrowRight} alt="Arrow Right" width={24} height={24} />
                </div>
                <span className="text-white">تماس باما</span>
              </Link>

              {/* Social Icons */}
              <div className="flex items-center justify-between">
                <Link href="#">
                  <Image src={aparat} alt="Aparat" width={80} height={80} />
                </Link>
                <Link href="#">
                  <Image src={Instagram} alt="Instagram" width={80} height={80} />
                </Link>
                <Link href="#">
                  <Image src={Youtube} alt="Youtube" width={80} height={80} />
                </Link>
                <Link href="#">
                  <Image src={Telegram} alt="Telegram" width={80} height={80} />
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: About Us */}
          <div className="lg:col-span-2 col-span-4">
            <div className="flex flex-col items-start px-8 gap-5 mb-5">
              <span className="text-white font-bold text-xl">درباره ما</span>
              <p className="text-base text-white font-light text-justify">
                با وجود آموزش‌های چندین ساله دانشگاهی هنوز هم ارتباط بین دانشگاه و صنعت ساختمان خلل‌هایی دارد که فارغ التحصیلان دانشگاهی به ویژه مهندسین عمران و معماری را سردرگم کرده است. ما در دید عمران این خلل‌ها را برطرف کرده و تا ورود شما به بازار کار حرفه‌ای مهندسی در کنارتان هستیم. آنچه در دید عمران بدست‌ می‌آورید دیدگاه و تخصص مهندسی است؛ نه صرفا یک پروانه مهندسی!
              </p>
            </div>

            {/* Contact Info and Enamad */}
            <div className="flex items-center justify-between px-8">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col items-start gap-2">
                  <span className="text-white text-base">تلفن تماس</span>
                  <span className="text-white text-xl font-bold">021-28429396</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="text-white text-base">ایمیل ارتباطی</span>
                  <span className="text-white text-xl font-bold">didomran@gmail.com</span>
                </div>
              </div>
              <div>
                <Link href="#">
                  <Image src={enamad} alt="Enamad" width={107} height={117} />
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3: Useful Links */}
          <div className="lg:col-span-1 col-span-4">
            <div className="flex flex-col items-center gap-5">
              <span className="text-white font-bold text-xl">لینک های مفید</span>
              <div className="flex items-start flex-col gap-4">
                <Link href="#" className="text-white text-sm hover:text-blue700 transition-all duration-300">حساب من</Link>
                <Link href="#" className="text-white text-sm hover:text-blue700 transition-all duration-300">دوره های آموزشی</Link>
                <Link href="#" className="text-white text-sm hover:text-blue700 transition-all duration-300">آزمون ها</Link>
                <Link href="#" className="text-white text-sm hover:text-blue700 transition-all duration-300">درباره ما</Link>
                <Link href="#" className="text-white text-sm hover:text-blue700 transition-all duration-300">تماس باما</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="border-t border-secondary700 flex items-center justify-center pt-4 container mx-auto mt-9">
          <span className="text-white text-sm">
            Copyright © 2012 - 2024 DID.ir All Rights Reserved.
          </span>
        </div>
      </div>
    
    </>

  );
}

export default Footer;