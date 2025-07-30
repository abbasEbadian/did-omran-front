import OnlineExam from "@/app/components/online-test/OnlineExam";
import { ExamType } from "@/api/types";
import { getExam } from "@/api";

async function page({ params }: { params:  Promise<{ id: string }> }) {
    const { id } = await params;
    const exam: ExamType = await getExam(+id);
    return (
        <>
            <section className="bg-white100">
                <OnlineExam exam={exam} />
            </section>
        </>
    );
}

export default page;
