import React from 'react';
import clsx from 'clsx';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption';
  className?: string;
  children: React.ReactNode;
};

export const Typography: React.FC<TypographyProps> = ({ variant, className, children }) => {
  const baseClasses = 'text-gray-900';
  const variantClasses = clsx({
    'text-4xl font-bold': variant === 'h1',
    'text-3xl font-semibold': variant === 'h2',
    'text-2xl font-medium': variant === 'h3',
    'text-xl font-medium': variant === 'h4',
    'text-lg font-medium': variant === 'h5',
    'text-base font-medium': variant === 'h6',
    'text-base': variant === 'body',
    'text-sm text-gray-600': variant === 'caption',
  });

  return React.createElement(
    variant === 'body' || variant === 'caption' ? 'p' : variant,
    { className: clsx(baseClasses, variantClasses, className) },
    children
  );
};

