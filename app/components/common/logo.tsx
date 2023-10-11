import clsx from 'clsx';

import logo from '~/assets/images/logo.png';
import Link from '../Link';

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
