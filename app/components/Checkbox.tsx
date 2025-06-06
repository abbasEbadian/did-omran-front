import React from "react";

interface CheckboxProps {
    children: React.ReactNode;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ children, checked, onChange }) => {
    return (
        <label className="inline-flex items-center space-x-2 cursor-pointer">
            <input
                type="checkbox"
                className="form-checkbox size-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            {children}
        </label>
    );
};

export default Checkbox;
