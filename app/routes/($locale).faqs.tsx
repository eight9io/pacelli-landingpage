import {defer, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {AnalyticsPageType} from '@shopify/hydrogen';

import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';
import clsx from 'clsx';
import Heading from '~/components/common/heading';
import {useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {getFixedT} from '~/lib/utils';

export const headers = routeHeaders;

export async function loader({params, context}: LoaderArgs) {
  const t = await getFixedT(context.storefront, 'faqs');
  const seo = seoPayload.landingpage(t);

  return defer({
    analytics: {
      pageType: AnalyticsPageType.home,
    },
    seo,
  });
}

export default function FaqsPage() {
  const [activeFaq, setActiveFaq] = useState<number>();
  const {t} = useTranslation('faqs');

  return (
    <section
      className={clsx(
        'overflow-hidden relative pt-20 md:pt-[160px] mb-15 md:mb-28',
      )}
    >
      <div className="grid grid-cols-10 base-container gap-4">
        <div className="col-span-10 md:col-span-3">
          <Heading
            className="text-gray-900 !text-[32px] md:!text-5xl md:!leading-[72px]"
            variant="h2"
          >
            {t('faqs:title', 'Frequently Asked Question')}
          </Heading>
        </div>
        <div className="col-span-10 md:col-span-7">
          <div className="join join-vertical w-full rounded-none md:pl-4">
            {faqItems.map((item: any, index: number) => (
              <AccordionItem
                key={item.question}
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
  reserve_answer: string;
  reserve_question: string;
}

const AccordionItem = ({
  question,
  anwser,
  isActive,
  onClick,
  index,
  className,
  reserve_answer,
  reserve_question,
}: AccordionItemProps) => {
  const {t} = useTranslation('faqs');
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
          'collapse-title !text-[22px] md:!text-2xl !font-bold text-secondary pl-[68px]',
          'before:absolute before:top-4 md:before:top-1/2 before:right-0 before:w-10 before:h-10 md:before:w-12 md:before:h-12 before:bg-gray-100 md:before:-translate-y-1/2',
          'after:!top-9 after:!right-5 after:!w-3 after:!h-3',
        )}
        variant="h5"
        onClick={onClick}
      >
        {t(question, reserve_question)}
      </Heading>
      <div className="collapse-content pl-[68px]">
        <p className="whitespace-pre-wrap	text-gray-600">
          {t(anwser, reserve_answer)}
        </p>
      </div>
    </div>
  );
};

const faqItems = [
  {
    question: 'faqs:item1.question',
    anwser: 'faqs:item1.answer',
    reserve_answer:
      'Offriamo una consulenza completa e personalizzata per realizzare il tuo progetto di design. Iniziamo con un rilievo misure gratuito, che ci consente di comprendere appieno lo spazio a tua disposizione e le tue esigenze. Questo servizio è il nostro punto di partenza per creare un progetto su misura che si adatti perfettamente alle tue aspettative.\nInoltre, ti offriamo anche il servizio di progettazione e renderizzazione gratuito. Grazie a strumenti avanzati, trasformiamo la tua visione in una rappresentazione visiva dettagliata, consentendoci di visualizzare il tuo futuro ambiente prima ancora che diventi realtà. Questo servizio ti aiuta a prendere decisioni informate e a perfezionare ogni aspetto del tuo progetto.',
    reserve_question:
      'Fornite il servizio di rilievo delle misure? é a pagamento?',
  },
  {
    question: 'faqs:item2.question',
    anwser: 'faqs:item2.answer',
    reserve_answer:
      'Offriamo un servizio di assistenza post-vendita senza limiti di tempo. Siamo qui per te oggi, domani e sempre.\nLa nostra dedizione a soddisfare le tue esigenze e risolvere ogni eventuale problema non conosce scadenza. La tua completa soddisfazione è la nostra priorità assoluta, e siamo pronti a offrire supporto e assistenza in modo continuo.',
    reserve_question:
      'Qual è la durata della garanzia dell’arredamento acquistato?',
  },
  {
    question: 'faqs:item3.question',
    anwser: 'faqs:item3.answer',
    reserve_answer:
      'Per garantire la massima convenienza ai nostri clienti, offriamo la consegna e il montaggio gratuiti. Siamo qui per semplificarti la vita e renderlo il più agevole possibile.\nNella stragrande maggioranza dei casi, non ci sono costi aggiuntivi per la consegna e il montaggio. Tuttavia, comprendiamo che ci possono essere situazioni eccezionali in cui dovremmo effettuare consegne a lunghe distanze. In queste circostanze, valuteremo la situazione caso per caso e, se necessario, concorderemo un rimborso spese equo.\nLa nostra priorità è soddisfare le tue esigenze e rendere il processo il più semplice possibile per te. La trasparenza è fondamentale, e ci impegniamo a garantire che tu comprenda appieno ogni aspetto della consegna e del montaggio.',
    reserve_question:
      'Il prezzo finale comprende anche la consegna e il montaggio?',
  },
  {
    question: 'faqs:item4.question',
    anwser: 'faqs:item4.answer',
    reserve_answer: 'Quali sono i tempi di consegna?',
    reserve_question:
      "I tempi di consegna variano in base alle specifiche del tuo progetto.\nPer esempio, quando si tratta di realizzare una cucina su misura, teniamo conto di ogni dettaglio, comprese le eventuali fuori squadra e personalizzazioni che hai richiesto.\nIn media, il tempo di consegna per un progetto di questo genere è di circa 40 giorni. Tuttavia, è importante sottolineare che la precisione e l'attenzione che mettiamo in ogni passo del processo sono un investimento nel risultato finale. La tua cucina su misura sarà un'opera d'arte culinaria che vale la pena aspettare.",
  },
];

export const handle = {
  i18n: ['common', 'header', 'faqs'],
};
