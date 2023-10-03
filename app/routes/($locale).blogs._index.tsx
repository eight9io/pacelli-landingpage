import {defer, json, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {routeHeaders} from '~/data/cache';
import Hero from '~/components/blogs/pinned-article';
import invariant from 'tiny-invariant';
import {NonNullableFields} from '~/lib/type';
import {
  BLOG_LIST_QUERY,
  BLOG_QUERY,
  FEATURED_BLOG_QUERY,
} from '~/graphql/blogs';
import ArticlesPagination from '~/components/blogs/articles-pagination';
import {Article} from '@shopify/hydrogen/storefront-api-types';

export const headers = routeHeaders;

export async function loader({request, context: {storefront}}: LoaderArgs) {
  const blogSlug = new URL(request.url).searchParams.get('blog');
  let articleData: any;

  const data = await storefront.query(BLOG_LIST_QUERY);
  const selectedBlog = await storefront.query(BLOG_QUERY, {
    variables: {handle: blogSlug},
  });

  if (blogSlug && !selectedBlog.blog) {
    throw new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }

  if (!blogSlug) {
    articleData = await storefront.query(FEATURED_BLOG_QUERY, {
      variables: {first: 8},
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

  // const seo = seoPayload.policies({policies, url: request.url});

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

  return json({
    blogs,
    articles,
    pageInfo,
    selectedBlog: selectedBlog.blog,
    // seo
  });
}

export default function BlogPage() {
  const {articles} = useLoaderData<typeof loader>();

  return (
    <>
      <Hero article={articles[0]} />
      <ArticlesPagination articles={articles as Array<Article>} />
    </>
  );
}
