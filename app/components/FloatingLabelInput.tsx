import React, { useState } from 'react';

const FloatingLabelInput: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

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
        className="w-full px-3 py-2  border border-did/30 rounded-2xl focus:outline-none focus:border-indigo-500"
      />
      <label
        className={`absolute right-3 transition-all duration-200 ${
          isFocused || value
            ? 'top-0 text-xs text-did bg-white px-1 -translate-y-1/2'
            : 'top-1/2 text-did/50 -translate-y-1/2'
        }`}
      >
        نام کاربری
      </label>
    </div>
  );
};

export default FloatingLabelInput;