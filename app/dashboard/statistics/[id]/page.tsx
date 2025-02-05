import Link from "next/link";
import BsTextIndentLeft from "@/app/components/icons/BsTextIndentLeft.svg";
import ReportCard from "@/app/components/report-card/ReportCard";
import ReportTitle from "@/app/components/report-card/ReportTitle";
import Image from "next/image";
import { getUser } from "@/api";
import { getSheets } from "@/api/exam/getSheets";
import { SheetType } from "@/api/types";
import PrintButton from "@/app/components/PrintButton";

async function page({ params }: { params: { id: string } }) {
    const user = await getUser();
    const {id} = await params
    const sheets: SheetType[] = await getSheets()
    const sheet = sheets.find(q => q.id === +id)
    return (
        <>
            <div className="">
                <div className="container mx-auto">
                    <section className="bg-white px-6 py-7 rounded-2xl my-4 shadow-custom-shadow" >
                        <ReportTitle />
                        {sheet && <ReportCard sheet={sheet} user={user}/> }
                    </section>
                    <div className="flex items-end gap-9 justify-end">
                        <Link
                            href="#"
                            className="text-white bg-blue700 rounded-2xl text-sm px-6 py-3 text-center flex items-center"
                        >
                            مشاهده پاسخ نامه
                            <Image
                                src={BsTextIndentLeft}
                                alt="BsTextIndentLeft icone"
                                height={24}
                                width={24}
                            />
                        </Link>
                        <PrintButton  />
                    </div>
                </div>
            </div>
        </>
    );
}

export default page;
