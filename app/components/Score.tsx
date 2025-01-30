import Image from "next/image"
import Star1 from '@/app/components/icons/star-1.svg'
function Score() {
  return (
    <>
    <div className="flex items-center gap-2">
        <Image
            src={Star1}
            alt="CheckSmall icone"
            height={24} 
            width={24}
            />
        <span className="text-secondary900 text-xs">( 21 نظر،3.97 امتیاز) </span>
    </div>
    </>
  )
}

export default Score