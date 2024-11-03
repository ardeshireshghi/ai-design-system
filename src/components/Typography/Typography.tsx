// Typography.tsx
import React from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({ variant = 'p', children, className = '' }) => {
  switch (variant) {
    case 'h1':
      return <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>;
    case 'h2':
      return <h2 className={`text-3xl font-semibold ${className}`}>{children}</h2>;
    case 'h3':
      return <h3 className={`text-2xl font-semibold ${className}`}>{children}</h3>;
    case 'span':
      return <span className={`text-base ${className}`}>{children}</span>;
    case 'p':
    default:
      return <p className={`text-base ${className}`}>{children}</p>;
  }
};

export default Typography;

