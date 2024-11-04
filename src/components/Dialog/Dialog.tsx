import React, { ReactNode } from 'react';
import clsx from 'clsx';

type DialogProps = {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  variant?: 'default' | 'info' | 'warning' | 'error';
};

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  title,
  children,
  onClose,
  variant = 'default',
}) => {
  if (!isOpen) return null;

  const dialogClasses = clsx(
    'fixed inset-0 flex items-center justify-center p-4',
    {
      'bg-white text-black': variant === 'default',
      'bg-blue-500 text-white': variant === 'info',
      'bg-yellow-200 text-black': variant === 'warning',
      'bg-red-500 text-white': variant === 'error',
    }
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className={dialogClasses}>
        <div className="w-full max-w-md p-6 bg-white rounded shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">{title}</h3>
            <button onClick={onClose} className="text-xl font-bold">
              &times;
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;

