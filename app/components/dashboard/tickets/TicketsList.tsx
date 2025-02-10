"use client"; // این خط را اضافه کنید

import { useState } from 'react';

type Ticket = {
  id: number;
  title: string;
  status: 'بسته شده' | 'در انتظار پاسخ' | 'پاسخ داده شده';
  date: string;
};

const TicketsList = () => {
  const [tickets, setTickets] = useState<Ticket[]>([
    { id: 1, title: 'مشکل در ورود به سیستم', status: 'در انتظار پاسخ', date: '۱۴۰۲/۰۷/۲۵' },
    { id: 2, title: 'خرابی در پرداخت', status: 'پاسخ داده شده', date: '۱۴۰۲/۰۷/۲۴' },
    { id: 3, title: 'سوال درباره قابلیت‌های جدید', status: 'بسته شده', date: '۱۴۰۲/۰۷/۲۳' },
    { id: 4, title: 'مشکل در آپلود فایل', status: 'در انتظار پاسخ', date: '۱۴۰۲/۰۷/۲۲' },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'بسته شده':
        return 'bg-blue600 text-secondary800';
      case 'در انتظار پاسخ':
        return 'bg-yellow text-yellow-800';
      case 'پاسخ داده شده':
        return 'bg-primary text-blue-800';
      default:
        return 'bg-secendary text-gray-800';
    }
  };

  return (
   
      <div className="container mx-auto py-5">
        <div className="">
          <table className="min-w-full">
            <thead className="bg-secondary600">
              <tr>
                <th className="px-6 py-3 text-center text-dark rounded-s-2xl">عنوان تیکت</th>
                <th className="px-6 py-3 text-center text-dark">وضعیت</th>
                <th className="px-6 py-3 text-center text-dark rounded-e-2xl">تاریخ</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-b-2 border-dashed border-b-secondary700">
                  <td className="px-6 py-4 text-center text-secondary">{ticket.title}</td>
                  <td className="px-6 py-4 text-center justify-items-center">
                    <span className={`px-2 py-2 rounded-full text-sm text-white  max-w-32 w-32 min-w-32 block  ${getStatusColor(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-secondary">{ticket.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

  );
};

export default TicketsList;