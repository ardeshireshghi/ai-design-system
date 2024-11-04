src/components/Dialog.tsx
```tsx
import React from 'react';

type DialogProps = {
  isOpen: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'danger' | 'success';
};

const sizeClasses = {
  sm: 'w-1/4',
  md: 'w-1/2',
  lg: 'w-3/4',
};

const variantClasses = {
  default: 'bg-white border-gray-300',
  danger: 'bg-red-100 border-red-400',
  success: 'bg-green-100 border-green-400',
};

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  title,
  children,
  onClose,
  size = 'md',
  variant = 'default',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`rounded shadow-lg p-4 border ${sizeClasses[size]} ${variantClasses[variant]}`}
      >
        <div className="flex justify-between items-center">
          {title && <h2 className="text-xl font-bold">{title}</h2>}
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Dialog;
```

