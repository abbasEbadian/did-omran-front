import Image from 'next/image';
import FreeImg from '@/public/img/freeimg.png';
import BsStack from '@/app/components/icons/BsStack.svg';
import ProfileImg from '@/public/img/profile.jpg';
import IntroContent from './IntroContent';
import SocialMediaIcon from '@/app/components/SocialMediaIcon';
import FaInstagram from '@/app/components/icons/FaInstagram.svg';
import FaTelegram from '@/app/components/icons/FaTelegramPlane.svg';
import BsFacebook from '@/app/components/icons/BsFacebook.svg';

const IntroFreeEducationSingle: React.FC = () => {
  const socialMediaIcons = [
    {
      href: '#',
      icon: BsFacebook,
      alt: 'Facebook',
      className: 'text-blue-600', 
    },
    {
      href: '#',
      icon: FaInstagram,
      alt: 'Instagram',
      className: 'text-pink-500',
    },
    {
      href: '#',
      icon: FaTelegram,
      alt: 'Telegram',
      className: 'text-blue-400',
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2 w-full">
          <Image
            src={FreeImg}
            alt="Free Education Img"
            height={290}
            width={463}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start justify-start gap-2">
            <span className="text-dark font-bold text-xl mb-4">
              آموزش پلاگین Retouch4me در فتوشاپ، روتوش چهره در ۷ ثانیه
            </span>
            <div className="flex items-start gap-2">
              <Image src={BsStack} alt="BsStack Img" height={24} />
              <span className="text-secondary">چیکیده آموزش</span>
            </div>
            <p className="text-secondary900 text-sm text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </div>
          <IntroContent />
          <div className="border-dashed border-b-2 border-secondary700 w-full"></div>
          <div className="flex justify-between items-center bg-white rounded-2xl px-4 py-2 w-full border border-did/15">
            <div className="flex items-center lg:gap-3 gap-1">
              <div className="rounded-full">
                <Image
                  src={ProfileImg}
                  alt="Profile Img"
                  height={60}
                  width={60}
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="text-dark text-base">ارسطو اعتمادی</span>
                <span className="text-secondary900 text-sms">lormsaz</span>
              </div>
            </div>
            <SocialMediaIcon icons={socialMediaIcons} />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default IntroFreeEducationSingle;