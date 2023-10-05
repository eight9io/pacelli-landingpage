import clsx from 'clsx';

import {useTranslation} from 'react-i18next';
import Link from '~/components/Link';
import arrowRight from '~/assets/icons/arrow-right.svg';
import Heading from '../common/heading';
import bg from '~/assets/images/image_blog_hero.png';
import {Article} from '@shopify/hydrogen/storefront-api-types';
import Tag from '../common/icons/tag';

interface PinnedArticleProps {
  className?: string;
  article?: Article;
}

const PinnedArticle: React.FC<PinnedArticleProps> = ({
  className = '',
  article,
}) => {
  const {t} = useTranslation('home');

  return (
    <>
      {article ? (
        <section
          className={clsx(
            'overflow-hidden relative pt-20 md:pt-[160px] mb-15 md:mb-28',
            className,
          )}
        >
          <div className="grid grid-cols-12 base-container gap-8">
            <div className="col-span-12 md:col-span-5">
              {article.blog?.title ? (
                <span className="text-gray-400 flex text-sm mb-2 uppercase items-center gap-2">
                  <Tag className="text-gray-400" />
                  {article.blog?.title}
                </span>
              ) : null}
              <Heading className="mb-4 md:mb-8 line-clamp-3" variant="h3">
                {article.title}
              </Heading>
              <Link
                to={''}
                className="btn bg-secondary rounded-none text-white hover:bg-secondary group border-none"
              >
                Read more
                <img
                  className="group-hover:translate-x-1 duration-200"
                  src={arrowRight}
                  alt={t('home:hero.learn_more')}
                />
              </Link>
            </div>
            <div className="col-span-12 md:col-span-7">
              <img
                src={article.image?.url || bg}
                alt={article.title}
                width={500}
                height={450}
                className="w-full h-[450px]"
              />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default PinnedArticle;
