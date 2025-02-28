import Image from 'next/image'
import Link from 'next/link'
import star2 from '@/app/components/icons/star2.svg'
function MyEventsBox() {
  return (
    <>
    <div className="bg-blue300 rounded-2xl px-8 py-6 flex items-center gap-4 justify-center h-full">
        <Image
        src={star2}
        alt="star Img"
        width={120}
        height={104} />
        <div className="flex flex-col items-start px-4 border-s-2 border-dashed border-s-secondary700 gap-1 py-5">
            <span className="text-did text-2xl font-semibold">دوره‌های من </span>
            <Link href="#" className="text-secondary text-sm font-medium">دوره‌های ثبت نام شده</Link>
        </div>
    </div>
    </>
  )
}

export default MyEventsBox