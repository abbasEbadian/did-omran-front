"use client";
import {UserType} from "@/api/types";
import {getUser} from "@/api/user";
import {updateUser} from "@/api/user/update";
import TextInput from "@/app/components/dashboard/TextInput";
import {FormButton} from "@/app/components/FormButton";
import {toaster} from "@/utils/toaster";
import Image from "next/image";
import React, {useCallback, useEffect, useState} from "react";
import {z} from "zod";
import {useRouter} from "next/navigation";
import * as motion from "motion/react-client";
import Head from "next/head";
import {usePageTitle} from '@/app/hooks/usePageTitle';

type Profile = {
    first_name: string | undefined;
    last_name: string | undefined;
    email: string | undefined;
    username: string;
    avatar: string | undefined;
    file?: File | undefined;
};

function Page() {
    usePageTitle("پروفایل");
    const router = useRouter();
    const [user, setUser] = useState<Profile | undefined>(undefined);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const userSchema = z.object({
        first_name: z.string().nonempty("نام نمیتواند خالی باشد"),
        last_name: z.string().nonempty("نام خانوادگی نمیتواند خالی باشد"),
        email: z.string().email("ایمیل وارد شده صحیح نمیباشد"),
        avatar: z.string().optional(),
    });

    const submit = async (formData: FormData) => {
        const fd = new FormData();
        for (let f of ["first_name", "last_name", "email"])
            if (formData.get(f)) fd.append(f, formData.get(f) as string);
        if (
            typeof formData.get("avatar") === "object" &&
            (formData.get("avatar") as File).size !== 0
        )
            fd.append("avatar", formData.get("avatar") as string);
        const validationResult = userSchema.safeParse({
            first_name: formData.get("first_name"),
            last_name: formData.get("last_name"),
            email: formData.get("email"),
        });

        if (!validationResult.success) {
            const errorMessages: Record<string, string> = {};
            validationResult.error.errors.forEach((error) => {
                if (error.path.length > 0) {
                    errorMessages[error.path[0]] = error.message;
                }
            });
            setErrors(errorMessages);
            return;
        }
        const result = await updateUser(fd);
        if (result) {
            toaster(result);
            getUserData();
            router.refresh();
        }
    };
    const getUserData = useCallback(async () => {
        const user: UserType = await getUser();
        setUser({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            username: user.username,
            avatar: user.avatar,
        });
    }, []);

    useEffect(() => {
        getUserData();
    }, []);

    if (!user) return null;

    return (
        <>
            <Head>
                <title>دیدعمران | پروفایل</title>
            </Head>
            <motion.form
                action={submit}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-2  py-4 ">
                        <div>
                            <label
                                htmlFor="files"
                                className="flex justify-center items-center flex-col gap-4 cursor-pointer text-did/60"
                            >
                                <Image
                                    src={
                                        (user.file
                                            ? URL.createObjectURL(user.file)
                                            : undefined) ??
                                        user.avatar ??
                                        "/img/profile2.jpg"
                                    }
                                    alt="profile"
                                    height={1024}
                                    width={1024}
                                    className="w-36 h-36 object-cover rounded-full"
                                />
                                {user.file
                                    ? user.file.name
                                    : " آپلود تصویر جدید"}
                            </label>
                            <input
                                id="files"
                                className="hidden"
                                type="file"
                                name="avatar"
                                accept="image/png, image/jpeg"
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        file: e.target.files?.[0],
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <TextInput
                            type="text"
                            value={user?.first_name}
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    first_name: e.target.value,
                                })
                            }
                            className="w-full px-4 py-3 bg-blue500 placeholder:text-did placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                            placeholder="نام"
                            name="first_name"
                            error={errors.first_name}
                        />
                    </div>
                    <div className="col-span-1">
                        <TextInput
                            type="text"
                            value={user.last_name}
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    last_name: e.target.value,
                                })
                            }
                            placeholder="نام خانوادگی"
                            name="last_name"
                            error={errors.last_name}
                        />
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <TextInput
                            type="text"
                            disabled
                            defaultValue={user.username}
                            placeholder="شماره تماس"
                        />
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <TextInput
                            type="email"
                            value={user.email}
                            onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                            }
                            placeholder="ایمیل"
                            name="email"
                            error={errors.email}
                        />
                    </div>
                    <div className="col-span-1 col-start-2">
                        <FormButton className="w-full bg-did text-white py-3 px-4 rounded-2xl">
                            ارسال
                        </FormButton>
                    </div>
                </div>
            </motion.form>
        </>
    );
}

export default Page;
