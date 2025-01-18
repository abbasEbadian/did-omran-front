import Image from 'next/image'
import Feature from '@/app/components/icons/Feature.svg'
import Link from 'next/link'

function MyTiketsBox() {
  return (
    <>
    <div className="bg-blue300 rounded-2xl px-8 py-6 flex items-center gap-4 justify-center">
        <Image
        src={Feature}
        alt="star Img"
        width={150}
        height={150} />
        <div className="flex flex-col items-start px-4 border-s-2 border-dashed border-s-secondary700 gap-1 py-5">
            <span className="text-did text-2xl font-semibold">تیک های من</span>
            <Link href="#" className="text-secondary text-sm font-medium">تیکت های ثبت شده</Link>
        </div>
    </div>
    </>
  )
}

export default MyTiketsBox