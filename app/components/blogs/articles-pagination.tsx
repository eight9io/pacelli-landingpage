import clsx from 'clsx';
import PinterestGalleryItem from '~/components/common/pinterest-gallery/gallery-item';
import PinterestGallery from '~/components/common/pinterest-gallery/gallery';
import {Article} from '@shopify/hydrogen/storefront-api-types';
import ArticleCard from '~/components/common/article-card';
import Heading from '../common/heading';
import {useLoaderData, useSearchParams} from '@remix-run/react';
import {loader} from '~/routes/($locale).blogs._index';
import {useCallback, useEffect, useRef} from 'react';
import AngleDown from '../icons/angle-down';
import {Button} from '../Button';
import {useInView} from 'react-intersection-observer';

interface ArticlesPaginationProps {
  className?: string;
  showMore?: boolean;
  articles?: Array<Article>;
}

const ArticlesPagination: React.FC<ArticlesPaginationProps> = ({
  className = '',
  articles = [],
}) => {
  const {blogs, selectedBlog} = useLoaderData<typeof loader>();

  const selectedItem = selectedBlog
    ? selectedBlog
    : {title: 'All', handle: undefined};

  return (
    <section
      className={clsx('base-container relative mb-15 md:mb-28', className)}
    >
      <div className="flex border-b border-gray-300 mb-8 items-center justify-between">
        <Heading variant="h3">
          {selectedBlog ? selectedBlog.title : 'All'}
        </Heading>
        <Filter items={blogs} selected={selectedItem} />
      </div>
      <PinterestGallery className="w-full gap-6 md:gap-8">
        {articles &&
          articles.length &&
          articles.map((article, index) => (
            <PinterestGalleryItem
              variant={varianCalculator(index)}
              key={article.id}
            >
              <ArticleCard
                article={article}
                variant={varianCalculator(index)}
              />
            </PinterestGalleryItem>
          ))}
      </PinterestGallery>
    </section>
  );
};

const varianCalculator = (index: number) => {
  const mod = index % 8;
  switch (mod) {
    case 1:
    case 3:
    case 4:
    case 7:
      return 'small';
    default:
      return 'large';
  }
};

export default ArticlesPagination;

interface FilterProps {
  className?: string;
  selected?: any;
  items: any[];
}

const Filter: React.FC<FilterProps> = ({className = '', selected, items}) => {
  const closeRef = useRef<HTMLDetailsElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const {ref} = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const observerRef = useRef(null);
  useEffect(() => {
    ref(observerRef.current);
  }, [ref, observerRef]);

  const closeDropdown = useCallback(() => {
    closeRef.current?.removeAttribute('open');
  }, []);

  return (
    <div
      ref={observerRef}
      className={clsx('flex gap-1 justify-center items-center', className)}
      onMouseLeave={closeDropdown}
    >
      <div className="relative">
        <details className="group rounded-none w-40" ref={closeRef}>
          <summary className="flex items-center justify-end px-4 py-1 text-sm md:text-base cursor-pointer">
            Filter
            <AngleDown className="group-open:rotate-180 transition duration-150 ml-1" />
          </summary>
          <div className="transition duration-150 absolute w-full top-full right-0 rounded overflow-auto bg-white max-w-full shadow">
            <Button
              className={clsx([
                'w-full p-2 transition flex justify-start',
                'items-center text-left text-sm cursor-pointer py-1 px-4',
                selected.handle === undefined
                  ? 'font-bold bg-gray-100 pointer-events-none'
                  : 'hover:bg-gray-100',
              ])}
              replace={true}
              onClick={() => {
                closeDropdown();
                searchParams.delete('blog');
                setSearchParams(searchParams, {
                  preventScrollReset: true,
                });
              }}
            >
              All
            </Button>
            {items &&
              items.map((item) => {
                const isSelected = item.handle === selected?.handle;

                return (
                  <Button
                    key={item.handle}
                    className={clsx([
                      'w-full p-2 transition flex justify-start',
                      'items-center text-left text-sm cursor-pointer py-1 px-4',
                      isSelected
                        ? 'font-bold bg-gray-100 pointer-events-none'
                        : 'hover:bg-gray-100',
                    ])}
                    replace={true}
                    onClick={() => {
                      closeDropdown();
                      setSearchParams(
                        {blog: item.handle},
                        {
                          preventScrollReset: true,
                        },
                      );
                    }}
                  >
                    {item.title}
                  </Button>
                );
              })}
          </div>
        </details>
      </div>
    </div>
  );
};
