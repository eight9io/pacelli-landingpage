import { defer, type LoaderArgs } from '@shopify/remix-oxygen';
import { AnalyticsPageType } from '@shopify/hydrogen';

import { seoPayload } from '~/lib/seo.server';
import { routeHeaders } from '~/data/cache';
import HeroPartnerships from '~/components/services/partnerships/HeroPartnerships';
import Contact from '~/components/services/partnerships/Contact';
import BeforeAfter from '~/components/services/partnerships/BeforeAfter';
import Brands from '~/components/home/brands';
import SocialProof from '~/components/home/social-proof';

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

      <HeroPartnerships />
      <Contact />
      <BeforeAfter />
      <Brands className=' mt-[60px] md:mt-[90px]' />
      <SocialProof />
    </>
  );
}
