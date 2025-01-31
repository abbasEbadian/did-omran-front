"use client";

import { cn } from "@/utils/cn";
import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { BeatLoader } from "react-spinners";

type Props = ComponentProps<"button">;

export const FormButton = ({ children, ...rest }: Props) => {
    const { pending } = useFormStatus();
    return (
        <div>
            <button type="submit" {...rest} disabled={pending} className={cn(rest.className, pending && 'opacity-50 cursor-not-allowed')}>
                {pending ? <div className="text-center"><BeatLoader color="white" size={8} className="translate-y-[2px]"/></div> : children }
            </button>
        </div>
    );
};
