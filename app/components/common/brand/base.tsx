import Link from 'next/link';
import Image from 'next/image';

export interface BrandIconProps {
  className?: string;
  link?: string;
  alt?: string;
}

const BrandIcon: React.FC<BrandIconProps & {src: any}> = ({
  link = '',
  alt = '',
  className,
  src,
}) => {
  return link ? (
    <Link href={link} className={className} target="_blank">
      <Image priority src={src} alt={alt} className="w-full h-full" />
    </Link>
  ) : (
    <Image priority className={className} src={src} alt={alt} sizes={'sm'} />
  );
};

export default BrandIcon;
