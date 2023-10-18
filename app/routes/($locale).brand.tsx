import {defer, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {AnalyticsPageType} from '@shopify/hydrogen';

import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';
import Hero from '~/components/brand/hero';
import Brand from '~/components/home/brands';
import {getFixedT} from '~/lib/utils';

export const headers = routeHeaders;

export async function loader({params, context}: LoaderArgs) {
  const t = await getFixedT(context.storefront, 'brand');
  const seo = seoPayload.landingpage(t);

  return defer({
    analytics: {
      pageType: AnalyticsPageType.home,
    },
    seo,
  });
}

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Brand showDescription={false} />
    </>
  );
}

export const handle = {
  i18n: ['common', 'header', 'brand'],
};
