"use client";

import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Tab 1', content: 'Content for Tab 1' },
    { id: 1, label: 'Tab 2', content: 'Content for Tab 2' },
    { id: 2, label: 'Tab 3', content: 'Content for Tab 3' },
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