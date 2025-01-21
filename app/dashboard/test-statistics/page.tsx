"use client"; // برای استفاده از state و useEffect در Next.js

import StatusBadge from '@/app/components/dashboard/StatusBadge';
import Link from 'next/link';
import { useState } from 'react';

interface User {
  id: number;
  name: string;
  date: number;
  NumberQuestions : string;
}

const Page = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'لورم ایپسوم متن', date: 1403/5/22, NumberQuestions : '50' },
    { id: 2, name: 'لورم ایپسوم متن', date: 1403/5/4, NumberQuestions : '100' },
    { id: 3, name: 'لورم ایپسوم متن', date: 1403/5/22, NumberQuestions : '100' },
   
  ]);

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-white100 rounded-2xl">
              <th className="py-3 px-4 text-dark rounded-s-2xl">عنوان</th>
              <th className="py-3 px-4 text-dark"> تعداد سوالات </th>
              <th className="py-3 px-4 text-dark">تاریخ برگزاری </th>
              <th className="py-3 px-4 text-dark">وضعیت </th>
              <th className="py-3 px-4 text-dark">پاسخ نامه </th>
              <th className="py-3 px-4 text-dark rounded-e-2xl">کارنامه</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 border-b-2 border-dashed border-b-secondary700 last:border-b-0">
                <td className="py-3 px-4 text-center text-secondary">{user.name}</td>
                <td className="py-3 px-4 text-center text-secondary">{user.NumberQuestions}</td>
                <td className="py-3 px-4 text-center text-did font-semibold">{user.date}</td>
                <td className="py-3 px-4 text-center text-secondary">
                  <StatusBadge status="rejected"/>
                </td>
                <td className="py-3 px-4 text-center text-secondary">
                  <Link href='#' className='text-did text-sm font-semibold hove:text-blue   '>مشاهده</Link>
                </td> 
                <td className="py-3 px-4 text-center text-secondary">
                  <Link href='#' className='text-did text-sm font-semibold hove:text-blue   '>مشاهده</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;