import BrandIcon, { BrandIconProps } from './base';

import img from '~/assets/icons/facebook.svg';

const FacebookIcon: React.FC<BrandIconProps> = ({ className, link, alt }) => {
  return <BrandIcon src={img} className={className} link={link} alt={alt} />;
};

export default FacebookIcon;
