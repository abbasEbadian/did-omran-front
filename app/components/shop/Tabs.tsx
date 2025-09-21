"use client";
import React, { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      label: ' همه دوره ها',
      bgColor: 'bg-blue-100', 
    },
    {
      label: ' نظام مهندسی',
      content: 'محتوای تب دوم',
      bgColor: 'bg-green-100', 
    },
    {
      label: 'کارشناسی رسمی',
      content: 'محتوای تب سوم',
      bgColor: 'bg-yellow-100', 
    },
    {
        label: 'نرم افزارهای عمرانی',
        content: 'محتوای تب سوم',
        bgColor: 'bg-yellow-100', 
    },
    {
        label: 'فنی ومهندسی',
        content: 'محتوای تب سوم',
        bgColor: 'bg-yellow-100', 
    },
  ];

  return (
    <div className="container mx-auto">
      {/* تب‌ها */}
      <div className="flex gap-6 items-center justify-center border-b border-did/10">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)} // تغییر تب فعال
            className={`lg:px-6 lg:py-2 px-3 py-1  rounded-t-2xl transition-all duration-300 lg:min-w-40 ${
              activeTab === index ? 'bg-did/25 text-did h-14' : 'bg-did/10 text-did/40 '
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* محتوای تب‌ها */}
      <div className="mt-4">
        {tabsData.map((tab, index) => (
          <div
            key={index}
            className={`p-6 rounded-b-lg transition-all duration-300 ${
              activeTab === index ? `${tab.bgColor} h-48` : 'hidden' // مخفی کردن محتوای تب‌های غیرفعال
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;