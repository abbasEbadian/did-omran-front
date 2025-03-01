import ReportCard from "@/app/components/report-card/ReportCard";
import ReportTitle from "@/app/components/report-card/ReportTitle";
import { getUser } from "@/api";
import { getSheets } from "@/api/exam/getSheets";
import { SheetType } from "@/api/types";
import PrintButton from "@/app/components/PrintButton";

async function page({ params }: { params: { id: string } }) {
    const user = await getUser();
    const { id } = await params;
    const sheets: SheetType[] = await getSheets();
    const sheet = sheets.find((q) => q.id === +id);
    return (
        <>
            <div className="">
                <div className="container mx-auto">
                    <section className="bg-white px-6 py-7 rounded-2xl my-4 shadow-custom-shadow">
                        <ReportTitle user={user} />
                        {sheet && <ReportCard sheet={sheet} user={user} />}
                    </section>
                    <div className="flex items-end gap-9 justify-end">
                        <PrintButton id={sheet?.id || 0} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default page;
