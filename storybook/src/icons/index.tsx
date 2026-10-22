import { clsx } from 'clsx';
import React from 'react';
import { iconMap } from './icons';

const Icon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Fallback for unknown icons
    return (
      <div className={clsx('w-6 h-6 relative', className)}>
        <div className="w-6 h-6 left-0 top-0 absolute inline-flex flex-col justify-center items-center gap-2.5">
          <div className="w-5 h-4 relative overflow-hidden">
            <div className="w-5 h-4 left-0 top-[1.11px] absolute bg-CTA-and-buttons-Icons-icon-secondary" />
          </div>
        </div>
      </div>
    );
  }
  return <IconComponent className={clsx(className)} />;
};

export default Icon;