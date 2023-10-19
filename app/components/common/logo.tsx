import clsx from 'clsx';

import logo from '~/assets/images/logo.png';
import logo_white from '~/assets/images/logo_white.png';
import Link from '../Link';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

const Logo: React.FC<LogoProps> = ({className = '', variant = 'default'}) => {
  return (
    <Link to="/" className={clsx(className)}>
      <img
        src={variant === 'white' ? logo_white : logo}
        alt="pacelli"
        width={153}
        height={48}
      />
    </Link>
  );
};

export default Logo;
