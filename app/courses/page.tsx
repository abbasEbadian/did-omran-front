"use client";

import useSWR from "swr";
import { getCourses } from "@/api/course";
import { CourseType } from "@/api/types";
import EducationItems from "../components/landing/education/EducationItems";
import ListWithTabs from "../components/ListWithTabs";
import Filter from "../components/Filter";

function page() {
    const { data, isLoading, error } = useSWR<CourseType[]>("get-courses", () =>
        getCourses()
    );

    return (
        <>
            <Filter title="دوره‌ها" />

            <ListWithTabs<CourseType>
                data={data || []}
                isLoading={isLoading}
                error={error}
                render={(item: CourseType) => <EducationItems {...item} />}
            />
        </>
    );
}

export default page;
