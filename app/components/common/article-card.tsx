import {Article} from '@shopify/hydrogen/storefront-api-types';
import clsx from 'clsx';
import {Link} from '~/components/Link';
import dayjs from 'dayjs';
import Tag from '~/components/common/icons/tag';

interface ArticleCardProps {
  className?: string;
  article?: Article;
  variant?: 'default' | 'small' | 'large';
}

const imageClasses = {
  default: 'h-[225px] md:h-[380px]',
  small: 'h-[225px]',
  large: 'h-[450px]',
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  className = '',
  article,
  variant = 'default',
}) => {
  return (
    <>
      {article ? (
        <Link
          to={`/blog/${article.handle}`}
          className={clsx(
            'overflow-hidden col-span-3 md:col-span-1',
            className,
          )}
          key={article.id}
        >
          <img
            src={article.image?.url || ''}
            alt={article.title}
            width={article.image?.width || 300}
            height={380}
            className={clsx(
              'object-cover mb-6 w-full',
              imageClasses[variant]
                ? imageClasses[variant]
                : imageClasses['default'],
            )}
          />
          <div className="flex flex-wrap justify-start gap-8">
            <span className="text-gray-400 block text-sm mb-2 uppercase">
              {dayjs(article?.publishedAt).format('MMMM D, YYYY')}
            </span>
            {article.blog?.title ? (
              <span className="text-gray-400 flex text-sm mb-2 uppercase items-center gap-2">
                <Tag className="text-gray-400" />
                {article.blog?.title}
              </span>
            ) : null}
          </div>

          <h4 className="font-bold text-gray-900 text-2xl line-clamp-2 mb-2">
            {article.title}
          </h4>
          {variant === 'large' ? (
            <p className="text-gray-900 text-base line-clamp-2 font-normal leading-7">
              {article.content}
            </p>
          ) : null}
        </Link>
      ) : null}
    </>
  );
};

export default ArticleCard;
