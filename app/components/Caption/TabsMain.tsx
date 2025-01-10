"use client";

import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'همه', content: 'Content for Tab 1' },
    { id: 1, label: 'نظام مهندسی', content: 'Content for Tab 2' },
    { id: 2, label: 'کارشناسی رسمی', content: 'Content for Tab 3' },
    { id: 3, label: 'نرم افزارهای عمرانی', content: 'Content for Tab 3' },
    { id: 4, label: 'فنی ومهندسی    ', content: 'Content for Tab 3' },

  ];

  return (
    <div className="p-4">
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 ${
              activeTab === tab.id
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500'
            } focus:outline-none`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default Tabs;