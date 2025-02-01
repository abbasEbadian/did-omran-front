import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
    error?: string;
};

const TextInput: React.FC<Props> = ({ className, ...rest }) => {
    return (
        <div className="relative">
            <input
                {...rest}
                className={cn(
                    "h-12 w-full px-4 py-3 bg-blue500 placeholder:text-did/50 placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500",
                    className
                )}
            />
            {rest.error && (
                <span className="absolute text-xs text-red-500 -bottom-6 start-0">{rest.error}</span>
            )}
        </div>
    );
};

export default TextInput;
