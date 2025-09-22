import Image from 'next/image';
import Link from 'next/link';
import SocialMediaIcon from './SocialMediaIcon';

const ShareBox: React.FC = () => {
  const socialMediaIcons = [
    {
      href: '#',
      icon: "/icons/BsFacebook.svg",
      alt: 'Facebook',
      className: 'text-blue-600',
    },
    {
      href: '#',
      icon: "/icons/FaInstagram.svg",
      alt: 'Instagram',
      className: 'text-pink-500',
    },
    {
      href: '#',
      icon: "/icons/FaTelegramPlane.svg",
      alt: 'Telegram',
      className: 'text-blue-400',
    },
  ];

  return (
    <div className="flex items-center justify-between w-full gap-3 ">
      <div className="flex items-center gap-2">
        <Link href="#" className="flex items-center gap-2">
          <Image src={"/icons/FiShare2.svg"} alt="FiShare2 Img" height={24} width={24} />
          <span className="text-dark text-sm">اشتراک گذاری این صفحه</span>
        </Link>
      </div>
      <SocialMediaIcon icons={socialMediaIcons} />
    </div>
  );
};

export default ShareBox;