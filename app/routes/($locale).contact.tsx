import {defer, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {AnalyticsPageType} from '@shopify/hydrogen';

import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';
import ContactCTAForm from '~/components/contact/contact-cta-form';
import EmbledMap from '~/components/contact/map-embled';
import {getFixedT} from '~/lib/utils';

export const headers = routeHeaders;

export async function loader({params, context}: LoaderArgs) {
  const t = await getFixedT(context.storefront, 'contact');
  const seo = seoPayload.landingpage(t);

  return defer({
    analytics: {
      pageType: AnalyticsPageType.home,
    },
    seo,
  });
}

export default function ContactPage() {
  return (
    <>
      <ContactCTAForm />
      <EmbledMap />
    </>
  );
}

export const handle = {
  i18n: ['common', 'header', 'contact'],
};
