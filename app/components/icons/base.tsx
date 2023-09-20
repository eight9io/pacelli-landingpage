import clsx from 'clsx';

export type IconProps = JSX.IntrinsicElements['svg'] & {
  direction?: 'up' | 'right' | 'down' | 'left';
};

export function Icon({
  children,
  className,
  fill = 'currentColor',
  stroke,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      fill={fill}
      stroke={stroke}
      className={clsx('w-5 h-5', className)}
    >
      {children}
    </svg>
  );
}
