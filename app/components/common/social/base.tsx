import Link from 'next/link';
import Image, {ImageProps} from 'next/image';

export interface SocialIconProps {
  className?: string;
  link?: string;
  alt?: string;
}

const SocialIcon: React.FC<SocialIconProps & {src: any}> = ({
  link = '',
  alt = '',
  className,
  src,
  ...rest
}) => {
  return link ? (
    <Link href={link} className={className} target="_blank">
      <Image priority src={src} alt={alt} className="w-full h-full" {...rest} />
    </Link>
  ) : (
    <Image
      priority
      className={className}
      src={src}
      alt={alt}
      sizes={'sm'}
      {...rest}
    />
  );
};

export default SocialIcon;
