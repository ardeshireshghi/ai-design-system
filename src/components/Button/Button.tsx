import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  children,
}) => {
  const baseStyles = 'font-semibold rounded focus:outline-none focus:ring transition';

  const variantStyles = {
    primary: 'text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-300',
    secondary: 'text-blue-500 bg-white border border-blue-500 hover:bg-blue-50 focus:ring-blue-300',
    tertiary: 'text-gray-500 bg-transparent hover:text-blue-500 focus:ring-gray-300',
  };

  const sizeStyles = {
    small: 'text-sm py-1 px-2',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6',
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

