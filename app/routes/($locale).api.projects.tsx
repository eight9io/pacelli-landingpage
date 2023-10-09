import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import {PROJECT_GALLERY_QUERY} from '~/graphql/gallery';
import {parseObject} from '~/lib/utils';

export async function loader({request, context: {storefront}}: LoaderArgs) {
  const params = new URL(request.url).searchParams;

  const variables = Object.fromEntries(params);

  const projectData = await storefront.query(PROJECT_GALLERY_QUERY, {
    variables,
  });

  return json({
    projects: parseObject(projectData, 'metaobjects.nodes') || [],
    pageInfo: parseObject(projectData, 'metaobjects.pageInfo') || {},
  });
}
