```tsx
// Dialog.tsx
import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'danger' | 'success';
};

const Dialog: FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  variant = 'default',
}) => {
  const dialogSizeClass = clsx({
    'max-w-sm': size === 'small',
    'max-w-md': size === 'medium',
    'max-w-lg': size === 'large',
  });

  const variantClass = clsx({
    'bg-white': variant === 'default',
    'bg-red-100': variant === 'danger',
    'bg-green-100': variant === 'success',
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={clsx('bg-white rounded shadow-lg', dialogSizeClass, variantClass)}>
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} className="text-black hover:text-gray-500">
            &times;
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Dialog;

