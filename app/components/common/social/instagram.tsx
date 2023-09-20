import SocialIcon, { SocialIconProps } from './base';

import clsx from 'clsx';
import img from '~/assets/icons/instagram.svg';

const InstagramIcon: React.FC<SocialIconProps> = ({ className, link, alt }) => {
  return <SocialIcon src={img} className={clsx('text-secondary', className)} link={link} alt={alt} />;
};

export default InstagramIcon;
