import Image from "next/image";
import { useState } from "react";
import Star1 from "@/app/components/icons/star-1.svg";
import StarFill from "@/app/components/icons/StarFill.svg";

function Score({rating: defaultRating}: {rating?: number}) {
    const [rating, setRating] = useState(defaultRating); // امتیاز فعلی
    const [hoverRating, setHoverRating] = useState(defaultRating); // امتیاز هنگام hover

    // تعداد ستاره‌ها
    const totalStars = 5;

    // تابع برای مدیریت کلیک روی ستاره‌ها
    const handleRatingClick = (index: number) => {
        setRating(defaultRating || index + 1);
    };

    // تابع برای مدیریت hover روی ستاره‌ها
    const handleRatingHover = (index: number) => {
        setHoverRating(defaultRating??index + 1);
    };

    // تابع برای مدیریت خروج hover از ستاره‌ها
    const handleRatingLeave = () => {
        setHoverRating(defaultRating?? 0);
    };

    return (
        <div className="flex items-center gap-2 flex-col">
            {/* ستاره‌ها */}
            <div
                className="flex items-center"
                aria-label={`Rating: ${rating} out of 5`}
            >
                {[...Array(totalStars)].map((_, index) => {
                    const isFilled = (hoverRating ?? rating ?? 0) > index;
                    return (
                        <button
                            key={index}
                            onClick={() => handleRatingClick(index)}
                            onMouseEnter={() => handleRatingHover(index)}
                            onMouseLeave={handleRatingLeave}
                            className="focus:outline-none"
                            aria-label={`Rate ${
                                index + 1
                            } out of ${totalStars}`}
                        >
                            <Image
                                src={isFilled ? StarFill : Star1}
                                alt={isFilled ? "Filled Star" : "Empty Star"}
                                height={15}
                                width={15}
                                className="transition-transform transform hover:scale-110"
                            />
                        </button>
                    );
                })}
            </div>

            {/* متن امتیاز و نظرات */}
            <span className="text-secondary900 text-xs">
                ({rating ?? 0 > 0 ? `${rating?.toFixed(1)} امتیاز` : "بدون امتیاز"}،
                21 نظر)
            </span>
        </div>
    );
}

export default Score;
