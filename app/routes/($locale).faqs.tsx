import {defer, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {AnalyticsPageType} from '@shopify/hydrogen';

import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';
import clsx from 'clsx';
import Heading from '~/components/common/heading';
import {useMemo, useState} from 'react';

export const headers = routeHeaders;

export async function loader({params, context}: LoaderArgs) {
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

export default function AboutPage() {
  const [activeFaq, setActiveFaq] = useState<number>();

  return (
    <section
      className={clsx(
        'overflow-hidden relative pt-20 md:pt-[160px] mb-15 md:mb-28',
      )}
    >
      <div className="grid grid-cols-10 base-container gap-4">
        <div className="col-span-10 md:col-span-3">
          <Heading
            className="text-gray-900 !text-[32px] md:!text-5xl"
            variant="h2"
          >
            Frequently Asked Question
          </Heading>
        </div>
        <div className="col-span-10 md:col-span-7">
          <div className="join join-vertical w-full rounded-none md:pl-4">
            {faqItems.map((item: any, index: number) => (
              <AccordionItem
                key={index}
                {...item}
                index={index + 1}
                onClick={() => setActiveFaq(index)}
                isActive={activeFaq === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface AccordionItemProps {
  question: string;
  anwser: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
  className?: string;
}

const AccordionItem = ({
  question,
  anwser,
  isActive,
  onClick,
  index,
  className,
}: AccordionItemProps) => {
  const beforeContentClass = useMemo(() => {
    switch (index) {
      case 1:
        return 'before:content-["01"]';
      case 2:
        return 'before:content-["02"]';
      case 3:
        return 'before:content-["03"]';
      case 4:
        return 'before:content-["04"]';

      default:
        break;
    }
  }, [index]);

  return (
    <div
      className={clsx(
        'collapse collapse-arrow join-item border-b border-b-gray-200 pl-0 pt-8 first:pt-0',
        'before:absolute first:before:top-0 before:top-8 before:left-0 before:w-[56px] before:h-[56px] before:flex before:justify-center before:items-center before:text-5xl before:!text-gray-300 before:font-bold',
        beforeContentClass,
        className,
      )}
    >
      <input type="radio" name="my-accordion-4" checked={isActive} />
      <Heading
        className={clsx(
          'collapse-title !text-[22px] !font-bold text-secondary pl-[68px]',
          'before:absolute before:top-4 md:before:top-1/2 before:right-0 before:w-10 before:h-10 md:before:w-12 md:before:h-12 before:bg-gray-100 md:before:-translate-y-1/2',
          'after:!top-9 after:!right-5 after:!w-3 after:!h-3',
        )}
        variant="h5"
        onClick={onClick}
      >
        {question}
      </Heading>
      <div className="collapse-content pl-[68px]">
        <p className="whitespace-pre-wrap	">{anwser}</p>
      </div>
    </div>
  );
};

const faqItems = [
  {
    question: 'Fornite il servizio di rilievo delle misure? é a pagamento?',
    anwser:
      'Offriamo una consulenza completa e personalizzata per realizzare il tuo progetto di design. Iniziamo con un rilievo misure gratuito, che ci consente di comprendere appieno lo spazio a tua disposizione e le tue esigenze. Questo servizio è il nostro punto di partenza per creare un progetto su misura che si adatti perfettamente alle tue aspettative.\nInoltre, ti offriamo anche il servizio di progettazione e renderizzazione gratuito. Grazie a strumenti avanzati, trasformiamo la tua visione in una rappresentazione visiva dettagliata, consentendoci di visualizzare il tuo futuro ambiente prima ancora che diventi realtà. Questo servizio ti aiuta a prendere decisioni informate e a perfezionare ogni aspetto del tuo progetto.',
  },
  {
    question: 'Qual è la durata della garanzia dell’arredamento acquistato?',
    anwser:
      'Offriamo una consulenza completa e personalizzata per realizzare il tuo progetto di design. Iniziamo con un rilievo misure gratuito, che ci consente di comprendere appieno lo spazio a tua disposizione e le tue esigenze. Questo servizio è il nostro punto di partenza per creare un progetto su misura che si adatti perfettamente alle tue aspettative.\nInoltre, ti offriamo anche il servizio di progettazione e renderizzazione gratuito. Grazie a strumenti avanzati, trasformiamo la tua visione in una rappresentazione visiva dettagliata, consentendoci di visualizzare il tuo futuro ambiente prima ancora che diventi realtà. Questo servizio ti aiuta a prendere decisioni informate e a perfezionare ogni aspetto del tuo progetto.',
  },
  {
    question: 'Il prezzo finale comprende anche la consegna e il montaggio?',
    anwser:
      'Offriamo una consulenza completa e personalizzata per realizzare il tuo progetto di design. Iniziamo con un rilievo misure gratuito, che ci consente di comprendere appieno lo spazio a tua disposizione e le tue esigenze. Questo servizio è il nostro punto di partenza per creare un progetto su misura che si adatti perfettamente alle tue aspettative.\nInoltre, ti offriamo anche il servizio di progettazione e renderizzazione gratuito. Grazie a strumenti avanzati, trasformiamo la tua visione in una rappresentazione visiva dettagliata, consentendoci di visualizzare il tuo futuro ambiente prima ancora che diventi realtà. Questo servizio ti aiuta a prendere decisioni informate e a perfezionare ogni aspetto del tuo progetto.',
  },
  {
    question: 'Quali sono i tempi di consegna?',
    anwser:
      'Offriamo una consulenza completa e personalizzata per realizzare il tuo progetto di design. Iniziamo con un rilievo misure gratuito, che ci consente di comprendere appieno lo spazio a tua disposizione e le tue esigenze. Questo servizio è il nostro punto di partenza per creare un progetto su misura che si adatti perfettamente alle tue aspettative.\nInoltre, ti offriamo anche il servizio di progettazione e renderizzazione gratuito. Grazie a strumenti avanzati, trasformiamo la tua visione in una rappresentazione visiva dettagliata, consentendoci di visualizzare il tuo futuro ambiente prima ancora che diventi realtà. Questo servizio ti aiuta a prendere decisioni informate e a perfezionare ogni aspetto del tuo progetto.',
  },
];
