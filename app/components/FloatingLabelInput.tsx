import { cn } from "@/utils/cn";
import React, { ComponentProps, useState } from "react";

type Props = ComponentProps<"input"> & {
    label: string;
    setValue: React.Dispatch<React.SetStateAction<string>>
};

const FloatingLabelInput = ({ label, value, setValue,  ...props }: Props) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        if (!value) {
            setIsFocused(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="relative mt-4">
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={cn("w-full px-3 py-3 border border-did/30 rounded-2xl focus:outline-none focus:border-did/50 text-black", props.className)}
                {...props}
            />
            <label
                className={`absolute right-3 transition-all duration-200 pointer-events-none ${
                    isFocused || value
                        ? "top-0 text-xs text-did bg-white px-1 -translate-y-1/2"
                        : "top-1/2 text-did/50 -translate-y-1/2"
                }`}
            >
                {label}
            </label>
        </div>
    );
};

export default FloatingLabelInput;
