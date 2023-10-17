import {defer, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {AnalyticsPageType} from '@shopify/hydrogen';

import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';
import clsx from 'clsx';
import Heading from '~/components/common/heading';
import {useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';

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
            {t('faqs:title')}
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
}

const AccordionItem = ({
  question,
  anwser,
  isActive,
  onClick,
  index,
  className,
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
        {t(question)}
      </Heading>
      <div className="collapse-content pl-[68px]">
        <p className="whitespace-pre-wrap	text-gray-600">{t(anwser)}</p>
      </div>
    </div>
  );
};

const faqItems = [
  {
    question: 'faqs:item1.question',
    anwser: 'faqs:item1.answer',
  },
  {
    question: 'faqs:item2.question',
    anwser: 'faqs:item2.answer',
  },
  {
    question: 'faqs:item3.question',
    anwser: 'faqs:item3.answer',
  },
  {
    question: 'faqs:item4.question',
    anwser: 'faqs:item4.answer',
  },
];

export const handle = {
  i18n: ['common', 'header', 'faqs'],
};
