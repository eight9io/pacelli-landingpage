import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import {PROJECT_GALLERY_QUERY} from '~/graphql/gallery';
import {cacheNoneInStaging, parseObject} from '~/lib/utils';

export async function loader({request, context}: LoaderArgs) {
  const params = new URL(request.url).searchParams;

  const variables = Object.fromEntries(params);

  const projectData = await context.storefront.query(PROJECT_GALLERY_QUERY, {
    variables,
    cache: cacheNoneInStaging(context),
  });

  let projects = parseObject(projectData, 'metaobjects.nodes');
  const pageInfo = parseObject(projectData, 'metaobjects.pageInfo');

  if (!projects) {
    throw new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }

  projects = projects.map((project: any) => {
    const handledProject: any = {};
    handledProject.id = project.id;
    handledProject.type = project.type;
    handledProject.handle = project.handle;
    if (project.fields) {
      project.fields.forEach((field: any) => {
        if (!field.type.includes('list.')) {
          if (field.type === 'file_reference') {
            handledProject[field.key] = parseObject(field, 'reference');
          } else handledProject[field.key] = field.value;
        } else {
          if (field.type === 'list.file_reference') {
            let listImage = parseObject(field, 'references.nodes');
            listImage = listImage.map((image: any) =>
              parseObject(image, 'image.url'),
            );
            handledProject[field.key] = listImage;
          } else handledProject[field.key] = JSON.parse(field.value);
        }
      });
    }
    return handledProject;
  });

  return json({
    projects,
    pageInfo,
  });
}
