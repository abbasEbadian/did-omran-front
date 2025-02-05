import { CourseType } from "@/api/types";

function PreviewCourse(course: CourseType) {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4 z-50 relative mt-8">
                <span className="text-dark text-xs font-semibold">
                    پیش نمایش دوره
                </span>
                <span className="text-dark text-sm">{course.title}</span>
            </div>
            <div className="relative flex flex-col items-center justify-center gap-4 mt-9 mb-72">
                <div className="absolute inset-0 z-10">
                    <video
                        controls
                        className="w-full h-[200px] object-cover rounded-2xl"
                        preload="metadata"
                    >
                        <source src={course.preview} type="video/mp4" />
                    </video>
                </div>
            </div>
        </>
    );
}

export default PreviewCourse;
