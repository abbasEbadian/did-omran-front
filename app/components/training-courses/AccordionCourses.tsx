"use client" 
import { useState } from 'react';

const AccordionCourses = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (ContentCourse) => {
    setActiveIndex(activeIndex === ContentCourse ? null : ContentCourse);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {items.map((item, ContentCourse) => (
        <div key={ContentCourse} className="mb-2 border rounded-lg">
          <button
            onClick={() => handleClick(ContentCourse)}
            className="flex justify-between w-full px-4 py-2 text-left text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg focus:outline-none"
          >
            <span>{item.title}</span>
            <span>{activeIndex === ContentCourse ? '-' : '+'}</span>
          </button>
          {activeIndex === ContentCourse && (
            <div className="px-4 py-2 text-gray-600">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionCourses;