import Image from "next/image";
import { EducationType } from "@/api/education/types";


function IntroContent(item: EducationType) {
    return (
        <div
            className="flex lg:flex-row flex-col lg:items-center items-start
           justify-between lg:gap-4 gap-2 bg-did/15 py-2 px-6 rounded-2xl w-full"
        >
            <div className="flex items-center gap-1">
                <Image src={"/icons/filters-2.svg"} alt="filter icon" height={24} width={24}/>
                <span className="text-blue text-xs">{item.category.name}</span>
            </div>
            <div className="flex items-center gap-1">
                <Image src={"/icons/calendar.svg"} alt="calendar icon" height={24} width={24}/>
                <span className="text-blue text-xs">{new Date(item.create_date).toLocaleDateString("fa")}</span>
            </div>
            <div className="flex items-center gap-1">
                <Image src={"/icons/star-1.svg"} alt="star icon" height={24} width={24}/>
                <span className="text-blue text-xs">امتیاز: {item.points}</span>
            </div>
            <div className="flex items-center gap-1">
                <Image src={"/icons/eye.svg"} alt="eye icon" height={15} width={15}/>
                <span className="text-blue text-xs">تعداد مشاهده: {item.views}</span>
            </div>
        </div>
    );
}

export default IntroContent;