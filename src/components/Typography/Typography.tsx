import React from 'react';
import clsx from 'clsx';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption';
  children: React.ReactNode;
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({ variant, children, className }) => {
  const baseStyle = 'text-gray-900';
  const styles = {
    h1: 'text-5xl font-bold',
    h2: 'text-4xl font-bold',
    h3: 'text-3xl font-semibold',
    h4: 'text-2xl font-semibold',
    h5: 'text-xl font-medium',
    h6: 'text-lg font-medium',
    body: 'text-base',
    caption: 'text-sm text-gray-600',
  };

  const Component = variant.startsWith('h') ? variant : 'p';
  return React.createElement(
    Component,
    { className: clsx(baseStyle, styles[variant], className) },
    children
  );
};

export default Typography;

