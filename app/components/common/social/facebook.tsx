import SocialIcon, {SocialIconProps} from './base';

import img from '~/assets/icons/facebook.svg';

const FacebookIcon: React.FC<SocialIconProps> = ({className, link, alt}) => {
  return <SocialIcon src={img} className={className} link={link} alt={alt} />;
};

export default FacebookIcon;
