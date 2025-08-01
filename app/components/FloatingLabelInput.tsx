import {cn} from "@/utils/cn";
import React, {ComponentProps, forwardRef, useState} from "react";

type Props = ComponentProps<"input"> & {
    label: string;
    error?: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
};
const FloatingLabelInput = forwardRef<HTMLInputElement, Props>((
    {
        label,
        value,
        setValue,
        error,
        ...props
    }: Props, _) => {
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
                autoFocus
                type="text"
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={cn(
                    "w-full px-3 py-3 border border-did/30 rounded-2xl focus:outline-none focus:border-did/50 text-black",
                    props.className,
                    error && "border-red-500"
                )}
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
            {error && (
                <small className="text-xs text-red-500 absolute top-[110%] start-0 transition">
                    {error}
                </small>
            )}
        </div>
    );
});

FloatingLabelInput.displayName = "FloatingLabelInput"
export default FloatingLabelInput;
