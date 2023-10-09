import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import invariant from 'tiny-invariant';

import {routeHeaders} from '~/data/cache';
import {seoPayload} from '~/lib/seo.server';
import HTMLContent from '~/components/blogs/html-content';
import Heading from '~/components/common/heading';

export const headers = routeHeaders;

export async function loader({request, params, context}: LoaderArgs) {
  invariant(params.pageHandle, 'Missing page handle');

  const {page} = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle: params.pageHandle,
      language: context.storefront.i18n.language,
    },
  });

  if (!page) {
    throw new Response(null, {status: 404});
  }

  const seo = seoPayload.page({page, url: request.url});

  return json({page, seo});
}

export default function Page() {
  const {page} = useLoaderData<typeof loader>();

  return (
    <section className="base-container my-12 md:my-20 min-h-[50vh]">
      <Heading variant="h2" className="mb-8 text-center">
        {page.title}
      </Heading>
      <HTMLContent className="max-w-[100ch] mx-auto" htmlString={page.body} />
    </section>
  );
}

const PAGE_QUERY = `#graphql
  query PageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    page(handle: $handle) {
      id
      title
      body
      seo {
        description
        title
      }
    }
  }
`;
