"use client";

import React from "react";
import BookContent from "../components/book-store/BookContent";
import { getBooks } from "@/api";
import { BookType } from "@/api/book/types";
import useSWR from "swr";
import ListWithTabs from "../components/ListWithTabs";

function Page() {
    const { data, isLoading, error } = useSWR<BookType[]>("get-books", getBooks);
    
    return (
        <ListWithTabs<BookType>
            data={data || []}
            isLoading={isLoading}
            error={error}
            render={(item: BookType) => <BookContent {...item} />}
        />
    );
}

export default Page;
