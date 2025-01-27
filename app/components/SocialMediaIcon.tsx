import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SocialMediaIconProps {
  icons: {
    href: string;
    icon: string;
    alt: string;
    className?: string;
  }[];
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ icons }) => {
  return (
    <div className="flex gap-4">
      {icons.map((icon, index) => (
        <Link
          key={index}
          href={icon.href}
          aria-label={icon.alt}
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:opacity-80 transition-opacity duration-200 ${icon.className || ''}`}
        >
          <Image
            src={icon.icon}
            alt={icon.alt}
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaIcon;