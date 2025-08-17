import Image from "next/image";
import HiOutlineFolderDownload from "@/app/components/icons/HiOutlineFolderDownload.svg";
import Eye from "@/app/components/icons/eye.svg";
import ListRight from "@/app/components/icons/list-right.svg";
import Edit from "@/app/components/icons/edit-3.svg";
import Link from "next/link";
import { BookType } from "@/api/book/types";
import { IconUser1 } from "../icons/comp/IconUser1";

function BookContent(book: BookType) {
    return (
        <>
            <div className=" bg-white shadow-custom-shadow rounded-2xl">
                <div className="w-full rounded-2xl">
                    <Image
                        src={book.image}
                        alt="BsPlayCircle Img"
                        height={800}
                        width={1200}
                        className="object-contain h-[270px] w-full rounded-2xl"
                    />
                </div>
                <div className="flex flex-col gap-4 rounded-b-2xl border border-did/10 px-4 py-6 ">
                    <div className="flex items-start justify-start gap-2 flex-col">
                        <span className="text-dark text-sm">
                           {book.title}
                        </span>
                        <div className="flex items-center justify-start gap-2 flex-row">
                            <IconUser1 fill="none" />
                            <span className="text-secondary text-xs">

                                {book.author}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="border-t-2 border-dashed border-secondary700 grow"></div>
                        <div className="flex gap-1 items-center">
                            <Image
                                src={Eye}
                                alt="eye icone"
                                height={24}
                                width={24}
                            />
                            <span className="text-secondary900 text-xs">
                                {book.download}
                            </span>
                            <span className="text-blue700 text-xs">مشاهده</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex items-center gap-1">
                                <Image
                                    src={ListRight}
                                    alt="CheckSmall icone"
                                    height={24}
                                    width={24}
                                />
                                <span className="text-secondary900 text-xs">
                                    تعداد صفحات:{" "}
                                </span>
                                <span className="text-secondary900 text-xs">
                                    {book.pages}
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Image
                                    src={Edit}
                                    alt="CheckSmall icone"
                                    height={24}
                                    width={24}
                                />
                                <span className="text-secondary900 text-xs">
                                    ویرایش:{" "}
                                </span>
                                <span className="text-secondary900 text-xs">
                                    {book.year}
                                </span>
                            </div>
                        </div>
                        <Link
                            href={"/book-store/" + book.id}
                            className="text-white bg-did rounded-2xl text-sm px-8 py-2 flex gap-1 items-center"
                        >
                            <Image
                                src={HiOutlineFolderDownload}
                                alt="HiOutlineFolderDownload Img"
                                width={24}
                                height={24}
                            />
                            دانلود
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookContent;
