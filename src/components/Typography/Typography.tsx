// Typography.tsx
import React from 'react';
import clsx from 'clsx';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';

type TypographyProps = {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({ variant, children, className }) => {
  const baseClasses = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-medium',
    h4: 'text-xl font-medium',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
    subtitle1: 'text-lg font-normal',
    subtitle2: 'text-base font-normal',
    body1: 'text-base font-normal',
    body2: 'text-sm font-normal',
    caption: 'text-xs font-light',
    overline: 'text-xs font-medium uppercase',
  };

  const Component = variant === 'body1' || variant === 'body2' ? 'p' : variant as keyof JSX.IntrinsicElements;

  return (
    <Component className={clsx(baseClasses[variant], className)}>
      {children}
    </Component>
  );
};

export default Typography;

