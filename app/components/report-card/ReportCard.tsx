"use client";
import React from 'react';

const Dashboard: React.FC = () => {
  // داده‌های جدول
  const tableData = [
    { label1: 'نام:', value1: 'علی', label2: 'نام خانوادگی:', value2: 'مرادی گاوترودی' },
    { label1: 'تعداد کل سوالات:', value1: '40', label2: 'حد نصاب قبول:', value2: '50' },
    { label1: 'تعداد سفید (پاسخ نداده):', value1: '20', label2: 'تعداد پاسخ صحیح:', value2: '32' },
    { label1: 'تعداد پاسخ غلط:', value1: '8', label2: 'نمره داوطلب از 100 (گرد شده به بالا):', value2: '49' },
    { label1: 'نتیجه آزمون:', value1: 'قبول', value2: '', colSpan: 3 }, // ردیف آخر با colSpan
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">کارنامه آزمون</h1>
        <table className="w-full">
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-3 px-4 text-right">{row.label1}</td>
                <td className="py-3 px-4 text-left">
                  {row.value1 === 'قبول' ? (
                    <span className="font-bold text-green-600">{row.value1}</span>
                  ) : (
                    row.value1
                  )}
                </td>
                <td className="py-3 px-4 text-right">{row.label2}</td>
                <td className="py-3 px-4 text-left" colSpan={row.colSpan || 1}>
                  {row.value2}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;