import Image from 'next/image'
import Link from 'next/link'
import Courses from '@/app/components/icons/Courses.svg'
import Test from '@/app/components/icons/test.svg'
import Library from '@/app/components/icons/library.svg'
import EducationBook from '@/app/components/icons/EducationalBooks.svg'
import Education from '@/app/components/icons/Education.svg'

function IntroLinks() {
  return (
    <>
    <div className="flex items-center gap-8 lg:flex-row flex-col  justify-around py-7">
        {
            introLinks.map(introLink => {
                return <Link key={introLink.id} href={introLink.url} className='bg-did rounded-2xl text-white flex flex-col px-6 py-2 items-center  gap-2'>
                <Image
                    src={introLink.src}
                    alt={introLink.alt}
                    width={introLink.width}
                    height={introLink.height} />
                    <span className="text-2xl font-bold text-center">
                        {introLink.text}
                    </span>
            </Link>
            })
        }   
    </div>
    </>
  )
}

export default IntroLinks;

const introLinks = [
    {
        id: 1,
        url: '#',
        alt: 'Education',
        src: Education,
        text: 'آموزش',
        width: 65,
        height: 65
    },
    {
        id: 2,
        url: '#',
        alt: 'test',
        src: Test,
        text: ' آزمون',
        width: 65,
        height: 65
    },
    {
        id: 3,
        url: '#',
        alt: 'Library',
        src: Library,
        text: 'کتابخانه',
        width: 65,
        height: 65
    },
    {
        id: 4,
        url: '#',
        alt: 'Courses',
        src: Courses,
        text: 'دوره ها',
        width: 65,
        height: 65
    },
    {
        id: 5,
        url: '#',
        alt: 'Education book',
        src: EducationBook,
        text: 'کتب آموزشی',
        width: 65,
        height: 65
    },

]