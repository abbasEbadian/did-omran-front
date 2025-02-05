import Image from "next/image";
import React from "react";
import ListRight from "@/app/components/icons/list-right.svg";
import Edit from "@/app/components/icons/edit-3.svg";
import HiOutlineFolderDownload from "@/app/components/icons/HiOutlineFolderDownload.svg";
import Link from "next/link";
import { getBook } from "@/api";
import { notFound } from "next/navigation";

async function page({ params }: { params: { id: string } }) {

    const { id } = await params;
    const book = await getBook(+id);
    if (!book) {
        return notFound();
    }
    return (
        <div className="bg-white100">
            <div className="container mx-auto grid grid-cols-12 gap-5 py-12">
                <div className="col-span-12 lg:col-span-4">
                    <div className="w-full rounded-2xl">
                        <Image
                            src={book.image}
                            alt="BsPlayCircle Img"
                            height={600}
                            width={1200}
                            className="object-contain rounded-2xl h-full max-h-[425px] "
                        />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-8">
                    <div className="flex flex-col gap-4">
                        <span className="text-dark text-xl font-black">
                            {book.title}
                        </span>
                        {book && (
                            <div
                                className="text-secondary text-justify text-sm border-b-2 border-dashed border-b-secondary700 pb-4"
                                dangerouslySetInnerHTML={{
                                    __html: book?.description,
                                }}
                            ></div>
                        )}
                        <div className="flex items-center justify-between bg-white border border-did/10 rounded-2xl px-6 py-3">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <Image
                                        src={ListRight}
                                        alt="CheckSmall icone"
                                        height={24}
                                        width={24}
                                    />
                                    <span className="text-secondary900 text-xs">
                                        صفحات:
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
                                href={book.file}
                                download={book.title}
                                target="_blank"
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
            </div>
        </div>
    );
}

export default page;
