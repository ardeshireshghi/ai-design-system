// Typography.tsx
import React from 'react';

type TypographyProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
  children: React.ReactNode;
  className?: string;
};

const baseStyles = {
  h1: 'text-3xl font-bold',
  h2: 'text-2xl font-semibold',
  h3: 'text-xl font-medium',
  h4: 'text-lg font-medium',
  h5: 'text-base font-medium',
  h6: 'text-sm font-medium',
  body1: 'text-base',
  body2: 'text-sm',
};

const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  children,
  className = '',
}) => {
  const Component = variant.startsWith('h') ? variant : 'p';
  return (
    <Component className={`${baseStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;

