import Booking from '~/components/home/booking';
import SocialProof from '~/components/home/social-proof';
import OutProjects from '~/components/gallery/OutProjects';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import {PROJECT_GALLERY_QUERY} from '~/graphql/gallery';
import {parseObject} from '~/lib/utils';
import {useLoaderData} from '@remix-run/react';

export async function loader({request, context: {storefront}}: LoaderArgs) {
  const data = await storefront.query(PROJECT_GALLERY_QUERY);
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
          handledProject[field.key] = field.value;
        } else {
          handledProject[field.key] = JSON.parse(field.value);
        }
      });
    }
    return handledProject;
  });

  return json({projects, pageInfo});
}

export default function Homepage() {
  const {projects, pageInfo} = useLoaderData<typeof loader>();

  return (
    <>
      <OutProjects projects={projects} pageInfo={pageInfo} />
      <Booking />
      <SocialProof />
    </>
  );
}
