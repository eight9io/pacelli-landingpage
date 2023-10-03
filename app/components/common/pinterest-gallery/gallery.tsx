import clsx from 'clsx';

interface PinterestGalleryProps {
  className?: string;
  children?: React.ReactNode;
}

const PinterestGallery: React.FC<PinterestGalleryProps> = ({
  className = '',
  children,
}) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[1rem]',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default PinterestGallery;
