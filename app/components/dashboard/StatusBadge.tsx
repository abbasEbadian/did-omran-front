import React from 'react';

type Status = 'success' | 'failure' | 'rejected' | 'accepted';

interface StatusBadgeProps {
  status: Status;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let bgColor: string;
  let textColor: string;
  let statusText: string;

  switch (status) {
    case 'success':
      bgColor = 'bg-primary';
      textColor = 'text-white';
      statusText = 'موفق';
      break;
    case 'failure':
      bgColor = 'bg-accent';
      textColor = 'text-white';
      statusText = 'ناموفق';
      break;
    case 'rejected':
      bgColor = 'bg-purple100';
      textColor = 'text-white';
      statusText = 'مردود';
      break;
    case 'accepted':
      bgColor = 'bg-blue700';
      textColor = 'text-white';
      statusText = 'قبول';
      break;
    default:
      bgColor = 'bg-blue';
      textColor = 'text-white';
      statusText = 'نامعلوم';
  }

  return (
    <span className={`inline-flex items-center px-8 py-1 rounded-2xl text-sm font-medium ${bgColor} ${textColor}`}>
      {statusText}
    </span>
  );
};

export default StatusBadge;