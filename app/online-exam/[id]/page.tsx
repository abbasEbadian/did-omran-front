import IntroOnlineTest from "@/app/components/online-test/IntroOnlineTest";
import Timer from "@/app/components/online-test/Timer";
import OnlineExam from "@/app/components/online-test/OnlineExam";
import { ExamType } from "@/api/types";
import { getExam, getUser } from "@/api";

async function page({ params }: { params: { id: string } }) {
    const { id } = params;
    const { result, data: exam }: { result: string; data: ExamType } =
        await getExam(+id);
    const user = await getUser()
    return (
        <>
            <section className="bg-white100">
                <div className="container mx-auto py-12">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 lg:col-span-9">
                            <IntroOnlineTest exam={exam} user={user}/>
                        </div>
                        <div className="col-span-12 lg:col-span-3">
                            <Timer iniTime={120} />
                        </div>
                    </div>
                    <OnlineExam exam={exam} />
                </div>
            </section>
        </>
    );
}

export default page;
