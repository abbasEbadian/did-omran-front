import Image from 'next/image';
import Link from 'next/link';
import FiShare2 from '@/app/components/icons/FiShare2.svg';
import FaInstagram from '@/app/components/icons/FaInstagram.svg';
import FaTelegram from '@/app/components/icons/FaTelegramPlane.svg';
import BsFacebook from '@/app/components/icons/BsFacebook.svg';
import SocialMediaIcon from './SocialMediaIcon';

const ShareBox: React.FC = () => {
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
    <div className="flex items-center justify-between w-full gap-3 ">
      <div className="flex items-center gap-2">
        <Link href="#" className="flex items-center gap-2">
          <Image src={FiShare2} alt="FiShare2 Img" height={24} width={24} />
          <span className="text-dark text-sm">اشتراک گذاری این صفحه</span>
        </Link>
      </div>
      <SocialMediaIcon icons={socialMediaIcons} />
    </div>
  );
};

export default ShareBox;