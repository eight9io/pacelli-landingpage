import {defer, json, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {routeHeaders} from '~/data/cache';
import Hero from '~/components/blogs/pinned-article';
import invariant from 'tiny-invariant';
import {NonNullableFields} from '~/lib/type';
import {
  ARTICLE_BY_ID_QUERY,
  BLOG_LIST_QUERY,
  FEATURED_BLOG_QUERY,
} from '~/graphql/blogs';
import ArticlesPagination from '~/components/blogs/articles-pagination';
import {Article} from '@shopify/hydrogen/storefront-api-types';
import {cacheNoneInStaging, getFixedT, parseObject} from '~/lib/utils';
import {seoPayload} from '~/lib/seo.server';

export const headers = routeHeaders;

export async function loader({request, context}: LoaderArgs) {
  const {storefront, env} = context;
  const pinnedArticleData = await storefront.query(ARTICLE_BY_ID_QUERY, {
    variables: {
      id: env.PUBLIC_PINNDED_ARTICLE_ID || 'gid://shopify/Article/606763745578',
    },
    cache: cacheNoneInStaging(context),
  });
  const data = await storefront.query(BLOG_LIST_QUERY, {
    cache: cacheNoneInStaging(context),
  });
  const articleData = await storefront.query(FEATURED_BLOG_QUERY, {
    variables: {first: 8},
    cache: cacheNoneInStaging(context),
  });

  invariant(data, 'No data returned from Shopify API');
  const blogs = Object.values(
    data.blogs.nodes as NonNullableFields<typeof data.blogs.nodes>,
  ).filter(Boolean);

  if (!blogs || !blogs.length) {
    throw new Response('Not found', {status: 404});
  }

  const t = await getFixedT(context.storefront, 'blogs');
  const seo = seoPayload.blog({
    blog: {} as any,
    url: request.url,
    t,
  });

  const articles = parseObject(articleData, 'articles.nodes') || [];

  const pageInfo = articleData?.articles?.pageInfo
    ? articleData.articles?.pageInfo
    : {
        hasNextPage: false,
        hasPreviousPage: false,
      };

  const pinnedArticle = parseObject(pinnedArticleData, 'article');

  return json({
    blogs,
    articles,
    pageInfo,
    selectedBlog: undefined,
    pinnedArticle,
    seo,
  });
}

export default function BlogPage() {
  const {articles, pinnedArticle} = useLoaderData<typeof loader>();

  return (
    <>
      <Hero article={pinnedArticle} />
      <ArticlesPagination articles={articles as Array<Article>} />
    </>
  );
}

export const handle = {
  i18n: ['common', 'header', 'blogs'],
};

export const shouldRevalidate = () => true;
