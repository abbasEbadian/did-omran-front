import Image from 'next/image'
import FaBook from "@/app/components/icons/FaBook.svg";
import FilterSelectTime from './FilterSelectTime';

function Filter() {
  return (
    
    <div className="flex items-center justify-between my-5">
       <div className="flex items-center gap-1">
            <Image
                src={FaBook}
                alt="FaBook"
                width={24}
                height={24}
            />
            <span className="text-dark fot-bold">کتابخانه</span>
       </div>
        <FilterSelectTime/>
    </div>
    
  )
}

export default Filter