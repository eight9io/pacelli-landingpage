import clsx from 'clsx';

interface HTMLContentProps {
  className?: string;
  htmlString: string;
}

const HTMLContent: React.FC<HTMLContentProps> = ({
  className = '',
  htmlString,
}) => {
  return (
    <div
      className={clsx('html-block max-w-[80ch]', className)}
      dangerouslySetInnerHTML={{__html: htmlString}}
    ></div>
  );
};

export default HTMLContent;
