"use client";

import React from "react";
import BookContent from "../components/book-store/BookContent";
import { getBooks, getEducations } from "@/api";
import { BookType } from "@/api/book/types";
import useSWR from "swr";
import ListWithTabs from "../components/ListWithTabs";
import Filter from "../components/Filter";
import { EducationType } from "@/api/education/types";
import FreeEducationItems from "@components/landing/free-education/FreeEducationItems";

function Page() {
    const { data, isLoading, error } = useSWR<EducationType[]>(
        "get-educations",
        getEducations
    );

    return (
        <>
            <Filter title="آموزش‌های رایگان" />
            <ListWithTabs<EducationType>
                data={data || []}
                isLoading={isLoading}
                error={error}
                render={(item: EducationType) => <FreeEducationItems {...item}  />}
            />
        </>
    );
}

export default Page;
