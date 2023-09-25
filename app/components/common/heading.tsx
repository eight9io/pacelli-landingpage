import clsx from 'clsx';
import React from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: React.ReactNode;
}

const variantClasses = {
  h1: 'text-gray-900 text-[84px] font-bold leading-[100px]',
  h2: 'text-gray-900 text-[40px] md:text-[64px] font-semibold leading-[60px] md:leading-[78px] tracking-tight',
  h3: 'text-gray-600 text-[32px] md:text-5xl font-semibold leading-[48px] md:leading-[72px] md:tracking-tight',
  h4: 'text-gray-600 text-[40px] font-semibold leading-[34px] md:leading-[50px]',
  h5: 'text-gray-600 text-2xl font-bold leading-9',
  h6: 'text-base font-semibold leading-6',
};

const Heading: React.FC<HeadingProps> = ({
  className = '',
  variant = 'h2',
  children,
  ...props
}) => {
  const Component = React.createElement(
    `${variant}`,
    {...props, className: clsx(`${variantClasses[variant] || ''}`, className)},
    children,
  );

  return Component;
};

export default Heading;
