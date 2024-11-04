import React from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium focus:outline-none transition duration-300 ease-in-out';
  
  const variantStyles = {
    primary: 'text-white bg-blue-500 hover:bg-blue-600',
    secondary: 'text-gray-700 bg-gray-200 hover:bg-gray-300',
    danger: 'text-white bg-red-500 hover:bg-red-600',
    success: 'text-white bg-green-500 hover:bg-green-600',
  };

  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], { 'w-full': fullWidth }, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

