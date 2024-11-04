import React from 'react';
import clsx from 'clsx';

type TypographyProps = {
  as?: React.ElementType;
  variant?: 'display' | 'headline' | 'title' | 'subtitle' | 'body' | 'caption' | 'overline';
  className?: string;
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({
  as: Component = 'p',
  variant = 'body',
  className,
  children,
}) => {
  const classes = clsx(
    className,
    {
      'text-5xl font-bold': variant === 'display',
      'text-3xl font-semibold': variant === 'headline',
      'text-2xl font-medium': variant === 'title',
      'text-xl font-medium text-gray-700': variant === 'subtitle',
      'text-base text-gray-800': variant === 'body',
      'text-sm text-gray-600': variant === 'caption',
      'text-xs text-gray-500 uppercase': variant === 'overline',
    }
  );

  return <Component className={classes}>{children}</Component>;
};

export default Typography;

