import {defer, json, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {routeHeaders} from '~/data/cache';
import Hero from '~/components/blogs/pinned-article';
import invariant from 'tiny-invariant';
import {NonNullableFields} from '~/lib/type';
import {
  ARTICLE_BY_ID_QUERY,
  BLOG_LIST_QUERY,
  BLOG_QUERY,
  FEATURED_BLOG_QUERY,
} from '~/graphql/blogs';
import ArticlesPagination from '~/components/blogs/articles-pagination';
import {Article} from '@shopify/hydrogen/storefront-api-types';
import {cacheNoneInStaging, getFixedT, parseObject} from '~/lib/utils';
import {seoPayload} from '~/lib/seo.server';

export const headers = routeHeaders;

export async function loader({request, context, params}: LoaderArgs) {
  const {storefront, env} = context;
  const {handle} = params as {handle: string};
  let articleData: any;

  const pinnedArticleData = await storefront.query(ARTICLE_BY_ID_QUERY, {
    variables: {
      id: env.PUBLIC_PINNDED_ARTICLE_ID || 'gid://shopify/Article/606763745578',
    },
  });

  const data = await storefront.query(BLOG_LIST_QUERY, {
    cache: cacheNoneInStaging(context),
  });
  const selectedBlog = await storefront.query(BLOG_QUERY, {
    variables: {handle},
    cache: cacheNoneInStaging(context),
  });

  if (handle && !selectedBlog.blog) {
    throw new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }

  if (!handle) {
    articleData = await storefront.query(FEATURED_BLOG_QUERY, {
      variables: {first: 8},
      cache: cacheNoneInStaging(context),
    });
  }

  invariant(data, 'No data returned from Shopify API');
  invariant(selectedBlog, 'No data returned from Shopify API');
  const blogs = Object.values(
    data.blogs.nodes as NonNullableFields<typeof data.blogs.nodes>,
  ).filter(Boolean);

  if (!blogs || !blogs.length) {
    throw new Response('Not found', {status: 404});
  }

  const t = await getFixedT(context.storefront, 'blogs');

  const seo = seoPayload.blog({
    blog: selectedBlog.blog as any,
    url: request.url,
    t,
  });

  const articles = selectedBlog.blog
    ? selectedBlog.blog?.articles.nodes
    : articleData?.articles?.nodes
    ? articleData.articles.nodes
    : [];

  const pageInfo = selectedBlog.blog?.articles?.pageInfo
    ? selectedBlog.blog?.articles?.pageInfo
    : articleData?.articles?.pageInfo
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
    selectedBlog: selectedBlog.blog,
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
