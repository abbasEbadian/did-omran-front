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
    <div className="p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-6 ">
        <table className="w-full">
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border border-secondary800">
                <td className="py-3 px-4 text-right text-dark border-s border-secondary800 last:border-s-0">{row.label1}</td>
                <td className="py-3 px-4 text-left text-secondary800">
                  {row.value1 === 'قبول' ? (
                    <span className="text-primary font-semibold">{row.value1}</span>
                  ) : (
                    row.value1
                  )}
                </td>
                <td className="py-3 px-4 text-right text-dark border-s border-secondary800 last:border-s-0">{row.label2}</td>
                <td className="py-3 px-4 text-left text-secondary800" colSpan={row.colSpan || 1}>
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