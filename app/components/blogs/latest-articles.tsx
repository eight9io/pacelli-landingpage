import clsx from 'clsx';
import Heading from '../common/heading';
import {Article} from '@shopify/hydrogen/storefront-api-types';
import Link from '../Link';
import dayjs from 'dayjs';
import {useTranslation} from 'react-i18next';

interface LatestArticlesProps {
  className?: string;
  articles?: Article[];
}

const LatestArticles: React.FC<LatestArticlesProps> = ({
  className = '',
  articles,
}) => {
  const {t} = useTranslation('blogs');
  return (
    <div className={clsx(className)}>
      <Heading variant="h4" className="text-primary mb-6 !font-normal">
        {t('categories')}
      </Heading>
      <ul className="flex flex-col gap-6 whitespace-pre">
        {articles?.map((article) => (
          <Link
            key={article.id}
            to={`/blog/${article.blog.handle}/${article.handle}`}
            className="text-gray-900 border-b py-2 pb-6"
          >
            <span className="text-gray-400 block text-sm uppercase mb-1">
              {dayjs(article?.publishedAt).format('MMMM D, YYYY')}
            </span>
            <p className="font-bold whitespace-break-spaces line-clamp-2">
              {article.title}
            </p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default LatestArticles;
