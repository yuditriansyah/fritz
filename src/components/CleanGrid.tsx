import React, { ReactNode } from 'react';

interface CleanGridProps {
  children: ReactNode;
  columns?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CleanGrid: React.FC<CleanGridProps> = ({ 
  children, 
  columns = { default: 1, sm: 2, lg: 3 }, 
  gap = 'md',
  className = ''
}) => {
  const gapClasses = {
    sm: 'gap-3',
    md: 'gap-4 sm:gap-6',
    lg: 'gap-6 sm:gap-8'
  };

  const getColumnClasses = () => {
    let classes = `grid-cols-${columns.default}`;
    if (columns.sm) classes += ` sm:grid-cols-${columns.sm}`;
    if (columns.md) classes += ` md:grid-cols-${columns.md}`;
    if (columns.lg) classes += ` lg:grid-cols-${columns.lg}`;
    if (columns.xl) classes += ` xl:grid-cols-${columns.xl}`;
    return classes;
  };

  return (
    <div className={`grid ${getColumnClasses()} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

export default CleanGrid;
