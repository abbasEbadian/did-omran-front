import React from "react";
import { getEducation } from "@/api";
import { notFound } from "next/navigation";
import IntroFreeEducationSingle from "@components/free-education-single/IntroFreeEducationSingle";
import OnlineFreeFilm from "@components/free-education-single/OnlineFreeFilm";
import QuestionBox from "@components/Comments/QuestionBox";

async function EducationSinglePage({params}: { params: Promise<{ id: string }> }) {

    const {id} = await params;
    const education = await getEducation(+id);
    if (!education) {
        return notFound();
    }
    return (
        <div className="bg-white100 py-16 px-4 lg:px-0">
            <div className="container mx-auto  pb-12">
                <IntroFreeEducationSingle {...education}/>

                <div className="flex flex-col items-start gap-4 mt-8 text-justify ">
                <div dangerouslySetInnerHTML={{
                    __html: education.description
                }} />
                </div>
            </div>
            <OnlineFreeFilm {...education}/>
            <QuestionBox/>

        </div>
    );
}


export default EducationSinglePage;
