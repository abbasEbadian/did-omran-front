"use client";
import {useLayoutEffect} from "react";

export function usePageTitle(title: string) {
    useLayoutEffect(() => {
        document.title = `دیدعمران | ${title}`;
    }, [title]);
}
