"use client";

import { toast } from "react-toastify";
import { Button } from "@mantine/core";

export default function CopyButton({license}: { license: string }) {
    const copyLicense = async () => {
        await window.navigator.clipboard?.writeText(license);
        toast.success("با موفقیت کپی شد");
    };
    return <Button onClick={copyLicense} className={"border rounded px-4 py-1"}>
        کپی لایسنس
    </Button>;

}