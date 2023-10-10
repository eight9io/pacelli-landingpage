/* eslint-disable */

import Intro from '~/components/project-detail/Intro';
import showroom1 from '~/assets/showroom/showroom1.png';
import project1 from '~/assets/gallery/project-1.png';
import project2 from '~/assets/gallery/project-2.png';
import project3 from '~/assets/gallery/project-3.png';
import Detail from '~/components/project-detail/Detail';
import Booking from '~/components/home/booking';
import { LoaderArgs, json } from '@shopify/remix-oxygen';
import invariant from 'tiny-invariant';
import { seoPayload } from '~/lib/seo.server';
import { useLoaderData } from '@remix-run/react';
const ItemMock: any = {
  id: 1,
  title: 'Lakefront Retreat',
  sub_title: 'Ut pharetra nunc vestibulum sagittis semper eu proin. Eget hendrerit in. sagittis semper eu proin.',
  client: 'ABC',
  image_intro: [showroom1, project1, project2],
  detail: [
    {
      title: "The challenge to face",
      description: "Ut pharetra nunc vestibulum sagittis semper eu proin. Eget hendrerit in. sagittis semper eu proin. Eget hend  Ut pharetra nunc vestibulum sagittis semper eu proin. Eget hendrerit in. sagittis semper eu proinn...",
      image: project3

    }
  ]


}
export async function loader({ request, params, context }: LoaderArgs) {
  invariant(params.handle, 'id is required');
  const data = await context.storefront.query(PROJECT_DETAIL_QUERY, {
    variables: {
      language: context.storefront.i18n.language,
      handle: params.handle,

    },
  });


  invariant(data, 'No data returned from Shopify API');

  return json({ project: data.metaobject, });


}

export default function ProjectDetail() {
  const { project } = useLoaderData<typeof loader>();
  const item = project.fields.reduce((acc: any, entry: any) => {
    if (entry.type == "list.url") {
      acc[entry.key] = JSON.parse(entry.value)
    } else {
      acc[entry.key] = entry.value;
    }
    return acc;
  }, {});
  console.log("🚀 ~ file: ($locale).project-detail.$handle.tsx:59 ~ item ~ item:", item)




  return (
    <>

      <Intro title={item.title}
        excerpt={item.excerpt}
        client={item.client}
        imageCover={item.cover_images}
      />
      <Detail title="The challenge to face"
        subTitle={item.challenge_description}
        image={item.challenge_images}
        imgPosition="right"
      />
      <Detail title="The solution found"
        subTitle={item.solution_description}
        image={item.solution_images}
        imgPosition="left"
      />
      <Detail title="The result obtained"
        subTitle={item.result_description}
        image={item.result_images}
        imgPosition="left"
      />
      <div className='base-container '>

        {item.video_multi_media === "true" ?
          <video
            width="1030" height="580"
            controls
            muted
            autoPlay
            playsInline
            loop
            className="mx-auto h-[580px]   "

          >
            <source
              type="video/mp4"
              src={item.multimedia}
            />
            Your browser does not support the video tag.
          </video> : <img
            src={item.multimedia}
            alt="Mission"
            width={1030}
            height={580}
            className="mt-28 mx-auto h-[580px]   "
          />
        }

      </div>
      <Booking />

    </>
  );
}
const PROJECT_DETAIL_QUERY = `#graphql
  query AAA(
    $language: LanguageCode,
    $handle: String!
  ) @inContext(language: $language) {
    metaobject(handle: {handle:     $handle, type: "project"}) {
      handle
      id
      type
      updatedAt
      fields {
        key
        type
        value
        reference {
          ... on MediaImage {
            id
            image {
              url
            }
          }
        }
      }
    }
  }
`;