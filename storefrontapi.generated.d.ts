/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */

import * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types';

export type ShopQueryVariables = StorefrontAPI.Exact<{
  cursor?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['String']>;
}>;

export type ShopQuery = {
  shop: Pick<StorefrontAPI.Shop, 'name' | 'description' | 'id'> & {
    brand?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Brand, 'shortDescription'> & {
        logo?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MediaImage, 'alt' | 'id' | 'mediaContentType'> & {
            image?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Image, 'altText' | 'url'>
            >;
          }
        >;
        colors: {
          primary: Array<
            Pick<StorefrontAPI.BrandColorGroup, 'background' | 'foreground'>
          >;
          secondary: Array<
            Pick<StorefrontAPI.BrandColorGroup, 'background' | 'foreground'>
          >;
        };
      }
    >;
  };
};

interface GeneratedQueryTypes {
  '\n  query Shop($cursor: String) {\n    shop {\n      name\n      description\n      id\n      brand {\n        logo {\n          alt\n          id\n          image {\n            altText\n            url(transform: {maxHeight: 100})\n          }\n          mediaContentType\n        }\n        colors {\n          primary {\n            background\n            foreground\n          }\n          secondary {\n            background\n            foreground\n          }\n        }\n        shortDescription\n      }\n    }\n  }\n': {
    return: ShopQuery;
    variables: ShopQueryVariables;
  };
}

interface GeneratedMutationTypes {}

declare module '@shopify/hydrogen' {
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
