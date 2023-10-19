import Intro from '~/components/project-detail/Intro';
import Detail from '~/components/project-detail/Detail';
import Booking from '~/components/home/booking';
import { LoaderArgs, json } from '@shopify/remix-oxygen';
import invariant from 'tiny-invariant';
import { useLoaderData } from '@remix-run/react';
import { cacheNoneInStaging, getFixedT, parseObject } from '~/lib/utils';
import { PROJECT_DETAIL_QUERY } from '~/graphql/gallery';
import { seoPayload } from '~/lib/seo.server';

export async function loader({ request, params, context }: LoaderArgs) {
  invariant(params.handle, 'id is required');
  const data = await context.storefront.query(PROJECT_DETAIL_QUERY, {
    variables: {
      language: context.storefront.i18n.language,
      handle: params.handle,
    },
    cache: cacheNoneInStaging(context),
  });

  invariant(data, 'No data returned from Shopify API');

  const project = parseObject(data, 'metaobject');

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

  const t = await getFixedT(context.storefront, 'project');
  const seo = seoPayload.project(t, handledProject);

  return json({ project: handledProject, seo });
}

export default function ProjectDetail() {
  const { project } = useLoaderData<typeof loader>();
  return (
    <>
      <Intro
        title={project.title}
        excerpt={project.excerpt}
        client={project.client}
        imageCover={project.cover}
      />
      {project.challenge_description ? (
        <Detail
          title="The challenge to face"
          subTitle={project.challenge_description}
          image={project.challenge_image}
          imgPosition="right"
        />
      ) : null}

      {project.solution_description ? (
        <Detail
          title="The solution found"
          subTitle={project.solution_description}
          image={project.solution_image}
          imgPosition="right"
        />
      ) : null}

      {project.result_description ? (
        <Detail
          title="The result obtained"
          subTitle={project.result_description}
          image={project.result_image}
          imgPosition="left"
        />
      ) : null}
      <div className="base-container">
        {project.media && project.media.previewImage ? (
          <>
            <video
              width="1030"
              height="580"
              controls
              muted
              autoPlay
              playsInline
              loop
              className="mx-auto h-[580px]   "
            >
              <source type="video/mp4" src={project.media.sources[0].url} />
              Your browser does not support the video tag.
            </video>
          </>
        ) : project.media && project.media.image ? (
          <img
            src={project.media.image.url}
            alt="Mission"
            width={1030}
            height={580}
            className="mt-28 mx-auto h-[580px] object-cover  "
          />
        ) : null}
      </div>
      <Booking />
    </>
  );
}

export const handle = {
  i18n: ['common', 'header', 'gallery', 'project'],
};

export const shouldRevalidate = () => true;
