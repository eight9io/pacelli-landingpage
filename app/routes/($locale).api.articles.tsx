import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import {ARTICLES_PAGINATION_QUERY} from '~/graphql/blogs';
import {parseObject} from '~/lib/utils';

export async function loader({request, context: {storefront}}: LoaderArgs) {
  const params = new URL(request.url).searchParams;
  const after = params.get('after');
  const first = params.get('first');

  const variables = Object.fromEntries(params);
  console.log('after', variables);

  const articleData = await storefront.query(ARTICLES_PAGINATION_QUERY, {
    variables,
  });

  return json({
    articles: parseObject(articleData, 'articles.nodes') || [],
    pageInfo: parseObject(articleData, 'articles.pageInfo') || {},
  });
}
