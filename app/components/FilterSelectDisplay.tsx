"use client";
import React, { useState } from 'react';
import Image from 'next/image';
const FilterSelectDisplay: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div className="flex items-center space-x-2 border border-did rounded-2xl px-2">
        <Image
        src={"/icons/filters-3.svg"}
        alt="filters1 icone"
        width={24}
        height={24} />
      <select
        id="filter"
        name="filter"
        value={selectedFilter}
        onChange={handleFilterChange}
        className="block w-full pl-2 pr-1 py-1 text-base text-secondary focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="">فیلتر نمایش</option>
        <option value="filter1">فیلتر ۱</option>
        <option value="filter2">فیلتر ۲</option>
        <option value="filter3">فیلتر ۳</option>
      </select>
    </div>
  );
};

export default FilterSelectDisplay;