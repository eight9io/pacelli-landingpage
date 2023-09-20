import clsx from 'clsx';
import {Link} from '@remix-run/react';

import logo from '~/assets/images/logo.png';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({className = ''}) => {
  return (
    <Link to="/" className={clsx(className)}>
      <img src={logo} alt="pacelli" width={153} height={48} />
    </Link>
  );
};

export default Logo;
