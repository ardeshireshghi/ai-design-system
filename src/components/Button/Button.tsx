```tsx
// Button.tsx
import React from 'react';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseStyles = 'font-bold rounded focus:outline-none focus:ring';
const sizeStyles = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-md',
  large: 'px-6 py-3 text-lg',
};
const variantStyles = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-300',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-300',
  danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-300',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className,
  ...props
}) => {
  const styles = clsx(baseStyles, sizeStyles[size], variantStyles[variant], className);
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;

