import React from 'react';
import { IconType } from 'react-icons';

interface IconBadgeProps {
  Icon: IconType;
  bgColor?: string;
}

export default function IconBadge({ 
  Icon, 
  bgColor = 'bg-orange-300', 
}: IconBadgeProps) {
  return (
    <div className={`w-8 h-8 ${bgColor} rounded-full grid place-content-center`}>
      <Icon className={`w-5 h-5 text-white`} />
    </div>
  );
}

