import Image from 'next/image';
import Link from 'next/link';
function MobileLinks() {
  const links = [
    {
      href: '#IntroductionEvent',
      icon: "/icons/list-center.svg",
      alt: 'Introduction',
      text: 'آشنایی',
    },
    {
      href: '#InstructorInfo',
      icon: "/icons/user-1.svg",
      alt: 'Instructor',
      text: 'مدرس',
    },
    {
      href: '#SupportTeam',
      icon: "/icons/settings.svg",
      alt: 'Support',
      text: 'پشتیبانی',
    },
    {
      href: '#RegisterEvent',
      icon: "/icons/basket.svg",
      alt: 'Register',
      text: 'ثبت نام',
    },
    {
      href: '#NewComment',
      icon: "/icons/message-square-dots.svg",
      alt: 'Comments',
      text: 'دیدگاه',
    },
    {
        href: '#NewComment',
        icon: "/icons/mail.svg",
        alt: 'Comments',
        text: 'دیدگاه',
      },
  ];

  return (
    <div className="bg-white rounded-2xl lg:px-16 py-4 flex items-center gap-2 justify-between px-3 shadow-custom-shadow my-14 lg:hidden mx-4 lg:mx-0">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-dark text-xs flex flex-col items-center gap-1"
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

export default MobileLinks;