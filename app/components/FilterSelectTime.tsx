"use client";
import React from "react";
import Image from "next/image";

export interface FilterOption {
    label: string;
    value: string;
}

interface FilterSelectBoxProps {
    options?: FilterOption[];
    onChange?: (value: string) => void;
}

const FilterSelectBox: React.FC<FilterSelectBoxProps> = ({
                                                             options,
                                                             onChange,
                                                         }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className="flex items-center space-x-2 border border-did rounded-2xl px-2">
            <Image src={"/icons/filters-1.svg"} alt="filters1 icon" width={24} height={24}/>
            <select
                className="block w-full pl-2 pr-1 py-1 text-base text-secondary focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                onChange={handleChange}
            >
                {options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterSelectBox;
