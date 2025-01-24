import Image from 'next/image';
import Link from 'next/link';
import Courses from '@/app/components/icons/Courses.svg';
import Test from '@/app/components/icons/test.svg';
import Library from '@/app/components/icons/library.svg';
import EducationBook from '@/app/components/icons/EducationalBooks.svg';
import Education from '@/app/components/icons/Education.svg';

function IntroLinks() {
  return (
    <div className="flex gap-4 lg:gap-8 flex-wrap justify-center py-7 h-64 mt-6">
      {introLinks.map((introLink, index) => (
        <Link
          key={introLink.id}
          href={introLink.url}
          className={`
            rounded-2xl min-w-40 text-white flex flex-col px-6 py-4 items-center gap-2
            transition-all duration-300
            ${index % 2 === 0 ? 'self-end' : 'self-start'} // یک در میان بالا و پایین
            bg-did/50 hover:bg-did // رنگ کم‌رنگ در حالت عادی و پررنگ در هاور
          `}
        >
          <Image
            src={introLink.src}
            alt={introLink.alt}
            width={introLink.width}
            height={introLink.height}
          />
          <span className="text-xl font-bold text-center">{introLink.text}</span>
        </Link>
      ))}
    </div>
  );
}

export default IntroLinks;

// Intro Links Data
const introLinks = [
  {
    id: 1,
    url: '#',
    alt: 'Education',
    src: Education,
    text: 'آموزش',
    width: 65,
    height: 65,
  },
  {
    id: 2,
    url: '#',
    alt: 'Test',
    src: Test,
    text: 'آزمون',
    width: 65,
    height: 65,
  },
  {
    id: 3,
    url: '#',
    alt: 'Library',
    src: Library,
    text: 'کتابخانه',
    width: 65,
    height: 65,
  },
  {
    id: 4,
    url: '#',
    alt: 'Courses',
    src: Courses,
    text: 'دوره ها',
    width: 65,
    height: 65,
  },
  {
    id: 5,
    url: '#',
    alt: 'Education Book',
    src: EducationBook,
    text: 'کتب آموزشی',
    width: 65,
    height: 65,
  },
];