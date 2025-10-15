
import React from 'react';

interface AdPlaceholderProps {
  message: string;
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ message, className = '' }) => {
  return (
    <div className={`bg-gray-200 dark:bg-gray-700 border-2 border-dashed border-gray-400 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 ${className}`}>
      <div className="text-center">
        <p className="font-semibold">Advertisement</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default AdPlaceholder;
