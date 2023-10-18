import Booking from '~/components/home/booking';
import SocialProof from '~/components/home/social-proof';
import OwnProjects from '~/components/gallery/own-projects';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import {PROJECT_GALLERY_QUERY} from '~/graphql/gallery';
import {cacheNoneInStaging, getFixedT, parseObject} from '~/lib/utils';
import {useLoaderData} from '@remix-run/react';
import {seoPayload} from '~/lib/seo.server';

export async function loader({request, context}: LoaderArgs) {
  const data = await context.storefront.query(PROJECT_GALLERY_QUERY, {
    cache: cacheNoneInStaging(context),
  });
  let projects = parseObject(data, 'metaobjects.nodes');
  const pageInfo = parseObject(data, 'metaobjects.pageInfo');

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

  const t = await getFixedT(context.storefront, 'gallery');
  const seo = seoPayload.landingpage(t);

  return json({projects, pageInfo, seo});
}

export default function Homepage() {
  const {projects, pageInfo} = useLoaderData<typeof loader>();

  return (
    <>
      <OwnProjects projects={projects} pageInfo={pageInfo} />
      <Booking />
    </>
  );
}

export const handle = {
  i18n: ['common', 'header', 'gallery'],
};
