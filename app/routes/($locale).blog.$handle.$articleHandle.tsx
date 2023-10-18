import {defer, json, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {routeHeaders} from '~/data/cache';
import {
  BLOG_ARTICLE_DETAIL_QUERY,
  BLOG_LIST_QUERY,
  FEATURED_BLOG_QUERY,
} from '~/graphql/blogs';
import ArticleContent from '~/components/blogs/article-content';
import CategoriesList from '~/components/blogs/categories-list';
import LatestArticles from '~/components/blogs/latest-articles';

import {Image} from '@shopify/hydrogen-react';
import {cacheNoneInStaging, getFixedT} from '~/lib/utils';
import {seoPayload} from '~/lib/seo.server';

export const headers = routeHeaders;

export async function loader({request, context, params}: LoaderArgs) {
  const {storefront} = context;
  const {handle, articleHandle} = params as {
    handle: string;
    articleHandle: string;
  };

  const blogData = await storefront.query(BLOG_LIST_QUERY, {
    cache: cacheNoneInStaging(context),
  });
  const blogArticleData = await storefront.query(BLOG_ARTICLE_DETAIL_QUERY, {
    variables: {handle, articleHandle},
    cache: cacheNoneInStaging(context),
  });
  const latestArticlesData = await storefront.query(FEATURED_BLOG_QUERY, {
    cache: cacheNoneInStaging(context),
  });

  const t = await getFixedT(context.storefront, 'blogs');
  const seo = seoPayload.article({
    article: blogArticleData?.blog?.articleByHandle,
    url: request.url,
    t,
  });

  return {
    blogs: blogData?.blogs.nodes,
    blog: blogArticleData?.blog,
    article: blogArticleData?.blog?.articleByHandle,
    latestArticles: latestArticlesData?.articles.nodes,
    currentUrl: request.url,
    seo,
  };
}

export default function BlogDetailPage() {
  const {article, blogs, latestArticles} = useLoaderData<typeof loader>();

  return (
    <div className="mt-12 md:mt-40 md:mb-32">
      <Image
        src={article.image?.url}
        {...article.image}
        className="base-container max-h-[600px] object-cover px-0"
      />
      <div className="md:base-container grid grid-cols-12 px-4 gap-y-10 md:gap-10">
        <div className="col-span-12 md:col-span-9">
          <ArticleContent article={article} />
        </div>
        <div className="col-span-12 md:col-span-3">
          <CategoriesList className="pt-32" blogs={blogs} />
          <LatestArticles className="pt-20" articles={latestArticles} />
        </div>
      </div>
    </div>
  );
}

export const handle = {
  i18n: ['common', 'header', 'blogs'],
};
