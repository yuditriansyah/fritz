import React, { ReactNode } from 'react';

interface CleanCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

const CleanCard: React.FC<CleanCardProps> = ({ 
  children, 
  className = '', 
  onClick, 
  hover = true 
}) => {
  const baseClasses = `
    bg-white
    border
    border-gray-200
    rounded-lg
    shadow-sm
    overflow-hidden
    transition-all
    duration-200
    ${hover ? 'hover:shadow-md hover:-translate-y-1' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `;

  return (
    <div 
      className={baseClasses.trim().replace(/\s+/g, ' ')}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default CleanCard;
