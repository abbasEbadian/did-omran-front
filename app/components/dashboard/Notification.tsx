import React from 'react';
import pin2 from '@/app/components/icons/pin-2.svg'
import InfoCircle from '@/app/components/icons/info-circle.svg'
import ShieldCross from '@/app/components/icons/shield-cross.svg'
import Image from 'next/image';

const Notification: React.FC<NotificationProps> = ({ title, message, date, type }) => {
  // تعیین کلاس CSS بر اساس نوع اطلاعیه
  const getNotificationClass = () => {
    switch (type) {
      case 'success':
        return 'text-primary';
      case 'warning':
        return 'text-accent';
      case 'info':
        return 'text-blue';

    }
  };
  const getNotificationIcon = () => {
    switch (type) {
      case 'success':
        return ShieldCross;
      case 'warning':
        return InfoCircle;
      case 'info':
        return pin2;

    }
  };

  return (
    <div className={`bg-white100 border border-did/15 rounded-2xl px-4 py-2 flex items-center gap-4 mb-2 `}>
        
        <Image src={getNotificationIcon()}  width={35} height={35} alt='icon'/>
        <div className="flex flex-col items-start gap-1">
            <h3 className={`font-bold ${getNotificationClass()}` }>{title}</h3>
            <p className="text-sm text-secondary">{message}</p>
            <p className="text-xs text-secondary800 mt-2">{date}</p>
        </div>
    </div>
  );
};
interface NotificationProps {
    title: string;
    message: string;
    date: string;
    type: 'success' | 'warning' | 'info';
  }
export default Notification;