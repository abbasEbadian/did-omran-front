"use client";
import Intro from "@/app/components/landing/intro/Intro";
import OnlineExam from "@/app/components/landing/online-exam/OnlineExam";
import Comments from "@/app/components/Comments/Comments";
import ElectronicLibrary from "@/app/components/landing/electronic-library/ElectronicLibrary";
import EducationTabs from "@/app/components/landing/education/EducationTabs";
import FreeEducationTabs from "@/app/components/landing/free-education/FreeEducationTabs";
import {useSearchParams} from "next/navigation";
import {Suspense} from "react";

export default function Home() {
    const params = useSearchParams();
    const reload = params.get("reload");
    if (reload) {
        window.location.href = "/";
    }

    return (
        <Suspense>
            <main className="flex flex-col gap-8">
                <Intro />
                <EducationTabs />
                <OnlineExam />
                <FreeEducationTabs />
                <ElectronicLibrary />
                <Comments />
            </main>
        </Suspense>
    );
}
