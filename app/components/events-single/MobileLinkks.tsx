import Image from 'next/image';
import Link from 'next/link';
import messageSquareDots from '@/app/components/icons/message-square-dots.svg';
import user1 from '@/app/components/icons/user-1.svg';
import ListCenter from '@/app/components/icons/list-center.svg';
import Mail from '@/app/components/icons/mail.svg';
import Settings from '@/app/components/icons/settings.svg';
import Basket from '@/app/components/icons/basket.svg';
function MobileLinkks() {
  const links = [
    {
      href: '#IntroductionEvent',
      icon: ListCenter,
      alt: 'Introduction',
      text: 'آشنایی',
    },
    {
      href: '#InstructorInfo',
      icon: user1,
      alt: 'Instructor',
      text: 'مدرس',
    },
    {
      href: '#SupportTeam',
      icon: Settings,
      alt: 'Support',
      text: 'پشتیبانی',
    },
    {
      href: '#RegisterEvent',
      icon: Basket,
      alt: 'Register',
      text: 'ثبت نام',
    },
    {
      href: '#NewComment',
      icon: messageSquareDots,
      alt: 'Comments',
      text: 'دیدگاه',
    },
    {
        href: '#NewComment',
        icon: Mail,
        alt: 'Comments',
        text: 'دیدگاه',
      },
  ];

  return (
    <div className="bg-white rounded-2xl lg:px-16 py-4 flex items-center gap-3 justify-between px-8 shadow-custom-shadow my-14 lg:hidden mx-4 lg:mx-0">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-dark text-sm flex flex-col items-center gap-1"
        >
          <Image
            src={link.icon}
            alt={link.alt}
            height={30}
            width={30}
          />
          {link.text}
        </Link>
      ))}
    </div>
  );
}

export default MobileLinkks;