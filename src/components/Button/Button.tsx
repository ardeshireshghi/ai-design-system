// Button.tsx
import React from 'react';
import classNames from 'classnames';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
}

const baseStyles = 'font-semibold rounded focus:outline-none focus:ring transition-colors';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-300',
  secondary: 'text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-300',
  success: 'text-white bg-green-500 hover:bg-green-600 focus:ring-green-300',
  danger: 'text-white bg-red-500 hover:bg-red-600 focus:ring-red-300',
};

const sizeStyles: Record<ButtonSize, string> = {
  small: 'text-xs px-2 py-1',
  medium: 'text-sm px-3 py-2',
  large: 'text-lg px-4 py-3',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  className,
  ...props
}) => {
  const combinedClasses = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
    { 'opacity-50 cursor-not-allowed': disabled }
  );

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;

