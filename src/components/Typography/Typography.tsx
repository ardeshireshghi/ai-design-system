import React from 'react';  
import clsx from 'clsx';

type TypographyProps = {  
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline';  
  children: React.ReactNode;  
  className?: string;
};  

const Typography: React.FC<TypographyProps> = ({ variant, children, className }) => {  
  const baseStyles = 'font-sans';  
  const variantStyles = {  
    h1: 'text-6xl font-bold',  
    h2: 'text-5xl font-bold',  
    h3: 'text-4xl font-semibold',  
    h4: 'text-3xl font-semibold',  
    h5: 'text-2xl font-medium',  
    h6: 'text-xl font-medium',  
    body1: 'text-base',  
    body2: 'text-sm',  
    caption: 'text-xs italic',  
    overline: 'text-xs uppercase tracking-wider',  
  };  

  const Tag = variant as keyof JSX.IntrinsicElements;  
  
  return (  
    <Tag className={clsx(baseStyles, variantStyles[variant], className)}>  
      {children}  
    </Tag>  
  );  
};  

export default Typography;

