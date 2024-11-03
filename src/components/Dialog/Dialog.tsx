// Dialog.tsx
import React from 'react';

interface DialogProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, title, children, onClose }) => {
  return (
    <div className={`${isOpen ? 'fixed' : 'hidden'} inset-0 flex items-center justify-center z-50`}>
      <div className="bg-black opacity-50 fixed inset-0" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">{title}</h2>
          <button className="text-gray-400 hover:text-gray-600" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Dialog;

