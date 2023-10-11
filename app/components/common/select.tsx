import clsx from 'clsx';
import {useTranslation} from 'react-i18next';
import {CartForm} from '@shopify/hydrogen';
import {CartBuyerIdentityInput} from '@shopify/hydrogen/storefront-api-types';
/* eslint-disable */
import {Button} from '~/components';
import type {Locale, Localizations, selectOccupation} from '~/lib/type';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useFetcher, useLocation, useMatches} from '@remix-run/react';

import {DEFAULT_LOCALE} from '~/lib/utils';
import {useInView} from 'react-intersection-observer';
import AngleDown from '../icons/angle-down';
import {ArrSelectOccupation} from '~/data/selectOccupation';

interface SelectorProps {
  className?: string;
  handleChangeValue: (e: any, value: string) => void;
  label?: string;
  value?: any;
}

const Select: React.FC<SelectorProps> = ({
  className = '',
  handleChangeValue,
  label,
  value,
}) => {
  const observerRef = useRef(null);
  const closeRef = useRef<HTMLDetailsElement>(null);
  const closeDropdown = useCallback(() => {
    closeRef.current?.removeAttribute('open');
  }, []);

  return (
    <div
      ref={observerRef}
      className={clsx('flex gap-4 justify-center z-10', className)}
      onMouseLeave={closeDropdown}
    >
      <div className="relative w-full border-[0px] border-b border-gray-400 focus:outline-transparent focus:border-b-2">
        <details className="group rounded-none" ref={closeRef}>
          <summary className="flex items-center justify-between px-4 py-1 text-sm md:text-base cursor-pointer">
            {value ? value : 'Chi sei?'}
            <AngleDown className="group-open:rotate-180 transition duration-150 ml-1" />
          </summary>
          <div className="py-1 z-20 transition duration-150 absolute w-full top-full right-0 rounded overflow-auto bg-white max-w-full space-y-1 shadow">
            {ArrSelectOccupation.map((item, index) => (
              <SelectItem
                key={index}
                selectOccupation={item}
                closeDropdown={closeDropdown}
                handleChangeValue={handleChangeValue}
              />
            ))}
          </div>
        </details>
      </div>
    </div>
  );
};

export default Select;

function SelectItem({
  selectOccupation,
  closeDropdown,
  handleChangeValue,
}: {
  handleChangeValue: (e: any, value: string) => void;
  selectOccupation: selectOccupation;
  setValue: (value: string) => void;
  closeDropdown: () => void;
}) {
  return (
    <span
      className={clsx([
        'z-20 bg-white w-full  transition flex justify-start',
        'items-center text-left text-base cursor-pointer py-2 px-4 leading-4',
        'hover:bg-gray-100',
      ])}
      onClick={(e: any) => {
        handleChangeValue(e, selectOccupation.name);
        closeDropdown();
      }}
    >
      {selectOccupation.name}
    </span>
  );
}
