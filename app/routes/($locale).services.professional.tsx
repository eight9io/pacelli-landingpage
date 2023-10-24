import {defer, type LoaderArgs} from '@shopify/remix-oxygen';
import {AnalyticsPageType} from '@shopify/hydrogen';
import services1 from '~/assets/services/services-6.png';
import services2 from '~/assets/services/services-7.png';
import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';
import HeroPartnerships from '~/components/services/partnerships/HeroPartnerships';
import Contact from '~/components/services/partnerships/Contact';
import Brands from '~/components/home/brands';
import SocialProof from '~/components/home/social-proof';
import BeforeAfter from '~/components/BeforeAfter';
import {useTranslation} from 'react-i18next';
import i18n from '../../i18n.server';
import {getFixedT} from '~/lib/utils';

export const headers = routeHeaders;

export async function loader({request, params, context}: LoaderArgs) {
  const t = await getFixedT(context.storefront, 'professional');
  const seo = seoPayload.landingpage(t);

  return defer({
    analytics: {
      pageType: AnalyticsPageType.home,
    },
    seo,
  });
}

export default function PartnershipServicesPage() {
  const {t} = useTranslation('professional');
  return (
    <>
      <HeroPartnerships />
      <Contact />
      <BeforeAfter
        title={t(
          'before_after.title',
          'Cosa facciamo guarda il prima e il dopo',
        )}
        description={t(
          'before_after.desc',
          'Siamo entusiasti di mostrarti alcuni dei progetti che abbiamo realizzato, tutti personalizzati per soddisfare le esigenze dei nostri clienti. La trasformazione è incredibile, e siamo pronti a portare anche il tuo spazio al livello successivo. Contattaci ora per vedere come possiamo migliorare il tuo ambiente!',
        )}
        afterImg={services2}
        beforeImg={services1}
      />
      <Brands className="mt-[60px] md:mt-[90px]" />
      <SocialProof />
    </>
  );
}

export const handle = {
  i18n: ['common', 'header', 'professional'],
};
