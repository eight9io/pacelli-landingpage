import {useEffect} from 'react';
import {useFetcher} from '@remix-run/react';

import {usePrefixPathWithLocale} from '~/lib/utils';

import {FeaturedCollections} from './FeaturedCollections';
import {ProductSwimlane} from './ProductSwimlane';

export function FeaturedSection() {
  const path = usePrefixPathWithLocale('/featured-products');

  return <></>;
}
