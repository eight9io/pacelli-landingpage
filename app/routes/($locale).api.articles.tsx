import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import {ARTICLES_PAGINATION_QUERY} from '~/graphql/blogs';
import {cacheNoneInStaging, parseObject} from '~/lib/utils';

export async function loader({request, context}: LoaderArgs) {
  const params = new URL(request.url).searchParams;
  const after = params.get('after');
  const first = params.get('first');

  const variables = Object.fromEntries(params);

  const articleData = await context.storefront.query(
    ARTICLES_PAGINATION_QUERY,
    {
      variables,
      cache: cacheNoneInStaging(context),
    },
  );

  return json({
    articles: parseObject(articleData, 'articles.nodes') || [],
    pageInfo: parseObject(articleData, 'articles.pageInfo') || {},
  });
}
