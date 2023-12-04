import clsx from 'clsx';
import Link from '~/components/Link';
import {ReactNode} from 'react';

interface Props {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  color?: 'primary' | 'danger' | 'light' | 'dark';
  size?: 'xs' | 'sm' | 'md';
  href?: string;
  disabled?: boolean;
}

const colors = {
  primary: clsx(
    'bg-secondary text-white hover:bg-primary-500 disabled:bg-primary-400',
  ),
  danger: clsx(
    'bg-danger-600 text-white hover:bg-danger-500 disabled:bg-danger-400',
  ),
  dark: clsx('bg-gray-900 text-white hover:bg-gray-800 disabled:bg-gray-700'),
  light: clsx('bg-gray-100 text-white hover:bg-gray-200 disabled:bg-gray-300'),
};

const sizes = {
  xs: clsx('px-2 py-1 text-xs'),
  sm: clsx('px-3 py-2 text-sm'),
  md: clsx('px-4 py-3 text-base'),
};

export function Button(props: Props) {
  if (props.href) {
    return (
      <Link
        to={props.href}
        className={clsx(
          'pointer-events-auto rounded-md font-semibold leading-5',
          colors[props.color || 'primary'],
          sizes[props.size || 'sm'],
          props.className,
        )}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      onClick={props.onClick}
      type="submit"
      className={clsx(
        'pointer-events-auto rounded-md font-semibold leading-5 ',
        colors[props.color || 'primary'],
        sizes[props.size || 'sm'],
        props.className,
      )}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
