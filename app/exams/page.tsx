"use client";

import React from "react";
import TestsBox from "../components/tests/TestsBox";
import { getExams } from "@/api";
import useSWR from "swr";
import { ExamType } from "@/api/types";
import ListWithTabs from "../components/ListWithTabs";
import Filter from "../components/Filter";

function page() {
    const { data, error, isLoading } = useSWR<ExamType[]>("get-exams", () =>
        getExams()
    );

    return (
        <>
            <Filter title="آزمون‌ها" src="/exam.png" />
            <ListWithTabs<ExamType>
                data={data || []}
                isLoading={isLoading}
                error={error}
                render={(item: ExamType) => <TestsBox {...item} />}
            />
        </>
    );
}

export default page;
