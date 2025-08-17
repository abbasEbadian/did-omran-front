import React from "react";
import IntroLinks from "./IntroLinks";
import News from "./News";
import Calculator from "./Calculator";
import UpcomingEvent from "./UpcomingEvent";
import Consultation from "../../Consultation";
import Image from "next/image";

function Intro() {
    return (
        <React.Fragment>

            <div className="relative min-h-[50vh] md:min-h-[70vh] mb-36">
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-transparent to-white" ></div>

                <div className="absolute inset-0 -z-10">
                    <Image
                        src={'/img/bg-intro.png'}
                        alt="Consultation Img"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-2 md:gap-4 relative">
                        <div className="col-span-12 lg:col-span-9">
                            <div>
                                <IntroLinks />
                                <News />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-3">
                            <div className="flex flex-col gap-4">
                                <Calculator />
                                <UpcomingEvent />
                                <Consultation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Intro;
