import React from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children, variant = 'default' }) => {
  if (!isOpen) return null;

  const variantClasses = {
    default: 'bg-white text-gray-900',
    success: 'bg-green-100 text-green-900',
    warning: 'bg-yellow-100 text-yellow-900',
    danger: 'bg-red-100 text-red-900',
  };

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className={clsx('w-full max-w-md p-5 rounded-lg shadow-lg', variantClasses[variant])}>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">X</button>
        </div>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Dialog;

