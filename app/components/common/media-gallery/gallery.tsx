import clsx from 'clsx';

interface MediaGalleryProps {
  className?: string;
  children?: React.ReactNode;
}

interface PinterestGalleryItemProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'small' | 'large';
}

const variantClasses = {
  default: 'row-end-[span_11]',
  small: 'row-end-[span_10] md:row-end-[span_9]',
  large: 'row-end-[span_17] md:row-end-[span_14]',
};

const MediaGallery: React.FC<MediaGalleryProps> = ({
  className = '',
  children,
}) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[1rem]',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MediaGallery;

export const PinterestGalleryItem: React.FC<PinterestGalleryItemProps> = ({
  className = '',
  children,
  variant = 'default',
}) => {
  return (
    <div
      className={clsx(
        'p-0',
        variantClasses[variant]
          ? variantClasses[variant]
          : variantClasses['default'],
        className,
      )}
    >
      {children}
    </div>
  );
};

const;
