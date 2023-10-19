import {AppLoadContext, json, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {AnalyticsPageType} from '@shopify/hydrogen';

import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';
import Brands from '~/components/home/brands';
import Booking from '~/components/home/booking';
import FeaturedPost from '~/components/home/featured-post';
import Hero from '~/components/home/hero';
import SocialProof from '~/components/home/social-proof';
import About from '~/components/home/about';

import {FEATURED_BLOG_QUERY} from '~/graphql/blogs';
import {HOME_CAROUSEL_QUERY} from '~/graphql/carousel';
import {parseCarousel} from '~/lib/shopify';
import invariant from 'tiny-invariant';
import {cacheNoneInStaging, getFixedT} from '~/lib/utils';

export const headers = routeHeaders;

const getHomeCarousel = async (context: AppLoadContext) => {
  const {env} = context;
  const data = await context.storefront.query(HOME_CAROUSEL_QUERY, {
    variables: {handle: env.PUBLIC_HOME_CAROUSEL_HANDLE || 'home'},
    cache: cacheNoneInStaging(context),
  });

  invariant(data, 'No carousel data found');
  invariant(data.metaobject, 'No carousel data found');

  return parseCarousel(data.metaobject);
};

export async function loader({params, context, request}: LoaderArgs) {
  const {language, country} = context.storefront.i18n;
  const t = await getFixedT(context.storefront, 'home');

  if (params.locale && params.locale.toLowerCase() !== language.toLowerCase()) {
    // If the locale URL param is defined, yet we still are on `EN-US`
    // the the locale param must be invalid, send to the 404 page
    throw new Response(null, {status: 404});
  }

  const {articles} = await context.storefront.query(FEATURED_BLOG_QUERY, {
    variables: {first: 3},
    cache: cacheNoneInStaging(context),
  });

  const carousels = await getHomeCarousel(context);

  return json({
    articles: articles?.nodes,
    analytics: {
      pageType: AnalyticsPageType.home,
    },
    carousels,
    seo: seoPayload.home(t),
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

export const handle = {
  i18n: ['common', 'header', 'home'],
};
