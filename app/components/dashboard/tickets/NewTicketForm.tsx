"use client";
import React, { useState } from "react";
import TextInput from "../TextInput";
import { createTicket } from "@/api";
import { toaster } from "@/utils/toaster";
import { FormButton } from "../../FormButton";

const NewTicketForm: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async (formdata: FormData) => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("text", description);
        if (file) {
            formData.append("file", file);
        }

        try {
            const result = await createTicket(formData);
            toaster(result);
            setTitle("");
            setDescription("");
            setFile(null);
        } catch (error) {
            console.error("Error creating ticket:", error);
        }
    };

    return (
        <form action={handleSubmit} className="p-6 grid grid-cols-2 gap-4">
            <div className="col-span-2 lg:col-span-1">
                <TextInput
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="عنوان تیکت را وارد کنید"
                />
            </div>
            <div className="col-span-2">
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="block w-full p-3 rounded-2xl bg-blue500 shadow-custom-shadow text-secondary text-sm placeholder:text-did/50 placeholder:text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="متن"
                    rows={6}
                />
            </div>
            <div className="col-span-2 flex items-center gap-3">
                <FormButton
                    className="px-8 py-2 bg-blue text-white rounded-2xl hover:bg-indigo-700 focus:outline-none whitespace-nowrap"
                >
                    ثبت
                </FormButton>
                <div className="grow flex justify-between border border-did/10 rounded-2xl items-center bg-white100 ps-4 pe-2 h-full ">
                    <label
                        htmlFor="file"
                        role="button"
                        className="flex text-sm font-medium text-secondary800 gap-4"
                    >
                        <p className="text-did">انتخاب</p>
                        {file ? file.name : "فرمت‌های مجاز: jpg, png"}
                    </label>
                    <input
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        className="hidden"
                    />
                </div>
            </div>
        </form>
    );
};

export default NewTicketForm;
