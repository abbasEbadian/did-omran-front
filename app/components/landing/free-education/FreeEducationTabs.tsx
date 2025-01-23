"use client";
import EducationSlider from '@/app/components/landing/education/EducationSlider'
import { useState } from 'react';
import FreeEducationSlider from './FreeEducationSlider';

const FreeEducationTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'همه', content: <FreeEducationSlider/>},
    { id: 1, label: 'نظارت اجرا', content: ''},
    { id: 2, label: 'محاسبات ', content: ''},
    { id: 3, label: 'کارشناسی رسمی', content:''},
    { id: 4, label: 'نرم افزار', content:''},
    { id: 5, label: 'فنی و مهندسی', content:'' },
  ];

  return (
    <div className="p-4">
      {/* Tab Buttons (Horizontal) */}
      <div className="flex items-center justify-center my-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 py-2 ${
              activeTab === tab.id
                ? 'text-did font-semibold'
                : 'text-secondary hover:text-did transition-colors duration-200'
            } focus:outline-none`}
          >
            {tab.label}
            {/* Active Tab Indicator (Vertical Line) */}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-8 w-1 bg-did rounded"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="">
       {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default FreeEducationTabs;