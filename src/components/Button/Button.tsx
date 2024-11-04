import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  onClick, 
  children 
}) => {
  const baseClasses = 'rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = clsx({
    'bg-blue-500 text-white hover:bg-blue-600': variant === 'primary',
    'bg-gray-500 text-white hover:bg-gray-600': variant === 'secondary',
    'bg-red-500 text-white hover:bg-red-600': variant === 'danger',
  });

  const sizeClasses = clsx({
    'px-2 py-1 text-sm': size === 'sm',
    'px-4 py-2': size === 'md',
    'px-6 py-3 text-lg': size === 'lg',
  });

  const disabledClasses = 'opacity-50 cursor-not-allowed';

  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses,
        sizeClasses,
        { [disabledClasses]: disabled }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

