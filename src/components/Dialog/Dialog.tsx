import React from 'react';
import clsx from 'clsx';

export interface DialogProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  variant?: 'default' | 'danger' | 'info';
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  title,
  onClose,
  children,
  variant = 'default'
}) => {
  if (!isOpen) return null;

  const dialogClasses = clsx(
    'fixed inset-0 flex items-center justify-center z-50',
    {
      'bg-red-100': variant === 'danger',
      'bg-blue-100': variant === 'info',
      'bg-white': variant === 'default',
    }
  );

  const overlayClasses = 'fixed inset-0 bg-black opacity-50';
  const containerClasses = 'relative bg-white rounded-lg p-6 shadow-lg max-w-md w-full';
  const titleClasses = 'text-lg font-semibold mb-4';
  const closeBtnClasses = 'absolute top-3 right-3 text-gray-600 hover:text-black';

  return (
    <div className={dialogClasses}>
      <div className={overlayClasses} onClick={onClose}></div>
      <div className={containerClasses}>
        <button className={closeBtnClasses} onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2 className={titleClasses}>{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

