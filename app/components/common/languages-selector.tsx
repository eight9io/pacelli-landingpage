import clsx from 'clsx';
import {useTranslation} from 'react-i18next';
import {CartForm} from '@shopify/hydrogen';
import {CartBuyerIdentityInput} from '@shopify/hydrogen/storefront-api-types';

import {Button} from '~/components';
import type {Locale, Localizations} from '~/lib/type';
import {useCallback, useEffect, useMemo, useRef} from 'react';
import {useFetcher, useLocation, useMatches} from '@remix-run/react';

import {DEFAULT_LOCALE} from '~/lib/utils';
import {useInView} from 'react-intersection-observer';
import chevron_down from '~/assets/icons/chevron-down.png';

interface LanguagesSelectorProps {
  className?: string;
  showLabel?: boolean;
}

const LanguagesSelector: React.FC<LanguagesSelectorProps> = ({
  className = '',
  showLabel = true,
}) => {
  const {t} = useTranslation();

  const [root] = useMatches();
  const fetcher = useFetcher();
  const closeRef = useRef<HTMLDetailsElement>(null);
  const selectedLocale = root.data?.selectedLocale ?? DEFAULT_LOCALE;
  const {pathname, search} = useLocation();
  const pathWithoutLocale = `${pathname.replace(
    selectedLocale.pathPrefix,
    '',
  )}${search}`;

  const countries = (fetcher.data ?? {}) as Localizations;
  const defaultLocale = countries?.['default'];
  const defaultLocalePrefix = defaultLocale ? `${defaultLocale?.language}` : '';

  const {ref, inView} = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const observerRef = useRef(null);
  useEffect(() => {
    ref(observerRef.current);
  }, [ref, observerRef]);

  // Get available countries list when in view
  useEffect(() => {
    if (!inView || fetcher.data || fetcher.state === 'loading') return;
    fetcher.load('/api/countries');
  }, [inView, fetcher]);

  const closeDropdown = useCallback(() => {
    closeRef.current?.removeAttribute('open');
  }, []);

  const availableLocales = useMemo(() => {
    const languages: Localizations = {};
    Object.keys(countries).map((countryPath) => {
      if (
        countries[countryPath].country === selectedLocale.country ||
        countryPath === 'default'
      ) {
        languages[countryPath] = countries[countryPath];
      }
    });
    return languages;
  }, [countries, selectedLocale]);

  return (
    <div
      ref={observerRef}
      className={clsx('flex gap-4 justify-center', className)}
      onMouseLeave={closeDropdown}
    >
      {showLabel && <h4 className="cursor-default">{t('language')}</h4>}
      <div className="relative">
        <details className="group rounded-none" ref={closeRef}>
          <summary className="flex items-center rounded-full bg-gray-200 justify-between px-4 py-1 text-sm md:text-base cursor-pointer">
            {selectedLocale.language}
            <img
              src={chevron_down}
              className="w-4 h-4 group-open:rotate-180 w-4 h-4 transition duration-150 ml-1"
              alt=""
            />
          </summary>
          <div className="transition duration-150 absolute w-full top-full right-0 rounded overflow-auto bg-white max-w-full shadow-md">
            {availableLocales &&
              Object.keys(availableLocales).map((countryPath) => {
                const countryLocale = availableLocales[countryPath];
                const isSelected =
                  countryLocale.language === selectedLocale.language;

                const countryUrlPath = getLocaleUrlPath({
                  countryLocale,
                  defaultLocalePrefix,
                  pathWithoutLocale,
                });

                return (
                  <Language
                    key={countryPath}
                    closeDropdown={closeDropdown}
                    countryUrlPath={countryUrlPath}
                    isSelected={isSelected}
                    countryLocale={countryLocale}
                  />
                );
              })}
          </div>
        </details>
      </div>
    </div>
  );
};

export default LanguagesSelector;

function Language({
  closeDropdown,
  countryLocale,
  countryUrlPath,
  isSelected,
}: {
  closeDropdown: () => void;
  countryLocale: Locale;
  countryUrlPath: string;
  isSelected: boolean;
}) {
  return (
    <ChangeLocaleForm
      key={countryLocale.country}
      redirectTo={countryUrlPath}
      buyerIdentity={{
        countryCode: countryLocale.country,
      }}
    >
      <Button
        className={clsx([
          'bg-white w-full p-2 transition flex justify-start',
          'items-center text-left text-sm cursor-pointer py-1 px-4',
          isSelected
            ? 'font-bold bg-gray-100 pointer-events-none'
            : 'hover:bg-gray-100',
        ])}
        type="submit"
        variant="primary"
        onClick={closeDropdown}
      >
        {countryLocale.language}
      </Button>
    </ChangeLocaleForm>
  );
}

function ChangeLocaleForm({
  children,
  buyerIdentity,
  redirectTo,
}: {
  children: React.ReactNode;
  buyerIdentity: CartBuyerIdentityInput;
  redirectTo: string;
}) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="post" action="/locale">
      <input type="hidden" name="redirectTo" value={redirectTo} />
      {children}
    </fetcher.Form>
  );
}

function getLocaleUrlPath({
  countryLocale,
  defaultLocalePrefix,
  pathWithoutLocale,
}: {
  countryLocale: Locale;
  pathWithoutLocale: string;
  defaultLocalePrefix: string;
}) {
  let countryPrefixPath = '';
  const countryLocalePrefix = `${countryLocale.language}`;
  if (countryLocalePrefix !== defaultLocalePrefix) {
    countryPrefixPath = `/${countryLocalePrefix.toLowerCase()}`;
  }
  return `${countryPrefixPath}${pathWithoutLocale}`;
}
