import {defer, json, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {routeHeaders} from '~/data/cache';
import {
  ARTICLE_BY_ID_QUERY,
  BLOG_ARTICLE_DETAIL_QUERY,
  BLOG_LIST_QUERY,
  FEATURED_BLOG_QUERY,
} from '~/graphql/blogs';
import ArticleContent from '~/components/blogs/article-content';
import CategoriesList from '~/components/blogs/categories-list';
import LatestArticles from '~/components/blogs/latest-articles';

import {Image} from '@shopify/hydrogen-react';

export const headers = routeHeaders;

export async function loader({
  request,
  context: {storefront},
  params,
}: LoaderArgs) {
  const {handle, articleHandle} = params as {
    handle: string;
    articleHandle: string;
  };

  const blogData = await storefront.query(BLOG_LIST_QUERY);
  const blogArticleData = await storefront.query(BLOG_ARTICLE_DETAIL_QUERY, {
    variables: {handle, articleHandle},
  });
  const latestArticlesData = await storefront.query(FEATURED_BLOG_QUERY);

  return {
    blogs: blogData?.blogs.nodes,
    blog: blogArticleData?.blog,
    article: blogArticleData?.blog?.articleByHandle,
    latestArticles: latestArticlesData?.articles.nodes,
  };
}

export default function BlogDetailPage() {
  const {article, blogs, latestArticles} = useLoaderData<typeof loader>();

  return (
    <div className="mt-40 md:mb-32">
      <Image
        src={article.image?.url}
        {...article.image}
        className="base-container"
      />
      <div className="base-container grid grid-cols-12 gap-10">
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
