import clsx from 'clsx';

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

const PinterestGalleryItem: React.FC<PinterestGalleryItemProps> = ({
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

export default PinterestGalleryItem;
