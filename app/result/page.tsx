"use client";

import ReportCard from "@/app/components/report-card/ReportCard";
import ReportTitle from "@/app/components/report-card/ReportTitle";
import {getUser} from "@/api";
import {getSheets} from "@/api/exam/getSheets";
import {SheetType, UserType} from "@/api/types";
import {useEffect, useState} from "react";
import useSWR from "swr";
import {useSearchParams} from "next/navigation";

function Page() {
    const [loading, setLoading] = useState(true);
    const [sheet, setSheet] = useState<SheetType | undefined>();
    const { data: user } = useSWR<UserType | undefined>("get-user", getUser);
    const params = useSearchParams()
    const { data: sheets } = useSWR<SheetType[]>("get-sheets", getSheets);

    useEffect(() => {
        const s = sheets?.find((q) => q.id === +(params.get("id") || 0));
        if (s) {
            setSheet(s);
        }
    }, [sheets, user]);
    useEffect(() => {
        if (!loading && sheet) {
            setTimeout(print, 2000)
        }
    }, [loading, sheet]);
    useEffect(() => {
        try{
            document.querySelector("header")?.remove()
            document.querySelectorAll("main ~ *")?.forEach(q => q.remove())
            setLoading(false);
        }catch(e){}
    }, [])
    if (!sheet || !user) return <div className="w-full text-center">در حال بارگذاری</div>;

    return (
        <div className="container mx-auto" id="res">
            <a href="/dashboard/statistics">بازگشت</a>
            <section className="bg-white px-6 py-7 rounded-2xl my-4 shadow-custom-shadow">
                <ReportTitle user={user} />
                <ReportCard sheet={sheet} user={user} />
            </section>
        </div>
    );
}

export default Page;
