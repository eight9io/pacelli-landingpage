import { defer, type LoaderArgs } from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import { AnalyticsPageType } from '@shopify/hydrogen';

import { seoPayload } from '~/lib/seo.server';
import { routeHeaders } from '~/data/cache';
import Hero from '~/components/about/hero';
import Mission from '~/components/about/mission';
import Reason from '~/components/about/reason';
import StrongPoint from '~/components/about/strong-point';
import History from '~/components/about/history';
import HeroPartnerships from '~/components/services/partnerships/HeroPartnerships';
import Contact from '~/components/services/partnerships/Contact';
import BeforeAfter from '~/components/services/partnerships/BeforeAfter';
import Brands from '~/components/home/brands';
import SocialProof from '~/components/home/social-proof';
import Plan from '~/components/services/private/Plan';
import BookAppointment from '~/components/services/private/BookApointment';
/* eslint-disable */

export const headers = routeHeaders;

export async function loader({ params, context }: LoaderArgs) {
  // const {language, country} = context.storefront.i18n;

  // if (
  //   params.locale &&
  //   params.locale.toLowerCase() !== `${language}-${country}`.toLowerCase()
  // ) {
  //   // If the locale URL param is defined, yet we still are on `EN-US`
  //   // the the locale param must be invalid, send to the 404 page
  //   throw new Response(null, {status: 404});
  // }

  const seo = seoPayload.home();

  return defer({
    analytics: {
      pageType: AnalyticsPageType.home,
    },
    seo,
  });
}

export default function PartnershipServicesPage() {
  return (
    <>

      <Plan />
      <BookAppointment />
      <BeforeAfter />
      <Brands className=' mt-[60px] md:mt-[90px]' />
      <SocialProof />
    </>
  );
}
