import { defer, type LoaderArgs } from '@shopify/remix-oxygen';
import { AnalyticsPageType } from '@shopify/hydrogen';
import services1 from '~/assets/services/services-2.png';
import services2 from '~/assets/services/services-1.png';
import { seoPayload } from '~/lib/seo.server';
import { routeHeaders } from '~/data/cache';
import Brands from '~/components/home/brands';
import SocialProof from '~/components/home/social-proof';
import Plan from '~/components/services/private/Plan';
import BookAppointment from '~/components/services/private/BookApointment';
import BeforeAfter from '~/components/BeforeAfter';
export const headers = routeHeaders;
export async function loader({ params, context }: LoaderArgs) {
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
      <BeforeAfter
        title="Guarda la trasformazione: Prima e Dopo "
        description="   Siamo entusiasti di mostrarti alcuni dei progetti che abbiamo
       realizzato, tutti personalizzati per soddisfare le esigenze dei
       nostri clienti. La trasformazione è incredibile, e siamo pronti a
       portare anche il tuo spazio al livello successivo. Contattaci ora
       per vedere come possiamo migliorare il tuo ambiente!"
        afterImg={services2}
        beforeImg={services1}

      />
      <Brands className=" mt-[60px] md:mt-[90px]" />
      <SocialProof />
    </>
  );
}
