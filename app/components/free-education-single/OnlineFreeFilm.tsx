import ShareBox from "../ShareBox";
import CopyLink from "../CopyLink";
import DownloadLinkFreeFilm from "@/app/components/free-education-single/DownloadLinkFreeFilm";
import ScoreStarFreeFilm from "./ScoreStarFreeFilm";
import { EducationType } from "@/api/education/types";

function OnlineFreeFilm(education: EducationType) {
    return (
        <div className="bg-white py-8">
            <div className="container mx-auto f">
                <span className="text-dark font-bold">
                    {education.title}
                </span>
                <div className="grid grid-cols-4">
                    <div className="col-span-4 lg:col-span-3"></div>
                    <div className="col-span-4 lg:col-span-1">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-4">
                                <ShareBox/>
                                <CopyLink id={education.id} code={"free-educations"}/>
                            </div>

                            <DownloadLinkFreeFilm {...education}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnlineFreeFilm;