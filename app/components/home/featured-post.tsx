import {Article} from '@shopify/hydrogen-react/storefront-api-types';
import {ArticleConnection} from '@shopify/hydrogen/storefront-api-types';
import Link from '~/components/Link';
import Tag from '~/components/common/icons/tag';
import clsx from 'clsx';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

interface FeaturedPostsProps {
  className?: string;
  articles?: Array<Article>;
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({
  className = '',
  articles = [],
}) => {
  return (
    <section className={clsx('bg-base-100 py-[90px]', className)}>
      <div className="base-container">
        <div className="flex justify-between items-center mb-4 md:mb-12">
          <h2 className="font-semibold text-[40px] md:text-[64px] text-gray-900 text-center">
            News
          </h2>
          <Link
            to="/blog"
            className="underline text-xl md:text-[32px] text-secondary font-light"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              to={`/blog/${article.blog.handle}/${article.handle}`}
              className="col-span-3 md:col-span-1"
              key={article.id}
            >
              <img
                src={article.image?.url || ''}
                alt={article.title}
                width={article.image?.width || 300}
                height={380}
                className="object-cover mb-6 w-full h-[190px] md:h-[380px]"
              />
              <div className="flex flex-wrap justify-start gap-8">
                <span className="text-gray-400 block text-sm mb-2 uppercase">
                  {dayjs(article.publishedAt).format('LL')}
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
              <p className="text-gray-900 text-base line-clamp-2 font-normal leading-7">
                {article.content}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
