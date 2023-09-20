import {defer, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {AnalyticsPageType} from '@shopify/hydrogen';

import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';
import Brands from '~/components/home/brands';
import Booking from '~/components/home/booking';
import FeaturedPost from '~/components/home/featured-post';
import Hero from '~/components/home/hero';
import SocialProof from '~/components/home/social-proof';
import About from '~/components/home/about';

import {FEATURED_BLOG_QUERY} from '~/graphql/blogs';

export const headers = routeHeaders;

export async function loader({params, context}: LoaderArgs) {
  const {language, country} = context.storefront.i18n;

  console.log('params', params);

  // if (
  //   params.locale &&
  //   params.locale.toLowerCase() !== `${language}-${country}`.toLowerCase()
  // ) {
  //   // If the locale URL param is defined, yet we still are on `EN-US`
  //   // the the locale param must be invalid, send to the 404 page
  //   throw new Response(null, {status: 404});
  // }

  const {articles} = await context.storefront.query(FEATURED_BLOG_QUERY, {
    variables: {first: 3},
  });
  const seo = seoPayload.home();

  return defer({
    articles: articles?.nodes,
    analytics: {
      pageType: AnalyticsPageType.home,
    },
    seo,
  });
}

export default function Homepage() {
  const {articles} = useLoaderData<typeof loader>();

  return (
    <>
      <Hero />
      <About />
      <Brands />
      <SocialProof />
      <Booking />
      <FeaturedPost articles={articles as any} />
    </>
  );
}
