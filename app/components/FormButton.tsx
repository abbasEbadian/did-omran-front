"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { BeatLoader } from "react-spinners";

type Props = ComponentProps<"button">;

export const FormButton = ({ children, ...rest }: Props) => {
    const { pending } = useFormStatus();
    return (
        <div>
            {pending ? (
                <BeatLoader />
            ) : (
                <button type="submit" {...rest}>
                    {children}
                </button>
            )}
        </div>
    );
};
