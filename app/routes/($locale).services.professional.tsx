import { defer, type LoaderArgs } from '@shopify/remix-oxygen';
import { AnalyticsPageType } from '@shopify/hydrogen';
import services1 from '~/assets/services/services-6.png';
import services2 from '~/assets/services/services-7.png';
import { seoPayload } from '~/lib/seo.server';
import { routeHeaders } from '~/data/cache';
import HeroPartnerships from '~/components/services/partnerships/HeroPartnerships';
import Contact from '~/components/services/partnerships/Contact';
import Brands from '~/components/home/brands';
import SocialProof from '~/components/home/social-proof';
import BeforeAfter from '~/components/BeforeAfter';
import { useTranslation } from 'react-i18next';

export const headers = routeHeaders;

// export async function loader({ params, context }: LoaderArgs) {
//   const seo = seoPayload.home();

//   return defer({
//     analytics: {
//       pageType: AnalyticsPageType.home,
//     },
//     seo,
//   });
// }

export default function PartnershipServicesPage() {
  const { t } = useTranslation('professional');
  return (
    <>
      {/* <HeroPartnerships /> */}
      {/* <Contact /> */}
      {/* <BeforeAfter
        title={t('before_after.title')}
        description={t('before_after.desc')}
        afterImg={services2}
        beforeImg={services1}
      />
      <Brands className="mt-[60px] md:mt-[90px]" />
      <SocialProof /> */}
    </>
  );
}
