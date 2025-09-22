import Image from "next/image";
import Link from "next/link";
import { EducationType } from "@/api/education/types";

function FreeEducationItems(item: EducationType) {
    return (
        <>
            <div className="flex flex-col bg-white shadow-custom-shadow rounded-2xl border border-did/10 hover:scale-[1.02] hover:border-did/50 transition overflow-hidden">

                <Image
                    src={item.cover.url}
                    alt={item.title}
                    height={305}
                    width={305}
                    className="w-full object-cover rounded-t-2xl"/>

                <div className="flex flex-col px-4 py-3 gap-4">
                    <span className="text-dark text-sm">{item.title}</span>
                    <div className="flex items-center">
                        <div className="flex-grow border border-dashed border-secondary700 px-4"></div>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <span className="text-yellow text-base">{item.points}</span>
                                <Image
                                    src={"/icons/star.svg"}
                                    alt="star Img"
                                    width={20}
                                    height={20}/>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-secondary800 text-base">{item.views}</span>
                                <Image
                                    src={"/icons/eye.svg"}
                                    alt="eye Img"
                                    width={20}
                                    height={20}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2 items-center">
                            <div className="rounded-full h-12 w-12">
                                <Image
                                    src={item.tutor.user.avatar}
                                    alt="profile Img"
                                    width={46}
                                    height={46}
                                    className="object-cover rounded-full"/> 
                            </div>
                            <div className="flex flex-col items-start justify-start gap-1">
                                <span className="text-secondary text-xs font-normal"> مدرس:</span>
                                <span className="text-secondary text-sm font-bold">{item.tutor.name}</span>
                            </div>
                        </div>
                        <Link href={`/free-educations/${item.id}`}
                              className="text-white bg-did text-sm py-3 px-8 rounded-2xl"> مشاهده</Link>

                    </div>
                </div>
            </div>
        </>
    );
}

export default FreeEducationItems;