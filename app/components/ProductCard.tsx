import clsx from 'clsx';
import type {ShopifyAnalyticsProduct} from '@shopify/hydrogen';
import {flattenConnection, Image, Money, useMoney} from '@shopify/hydrogen';
import type {MoneyV2, Product} from '@shopify/hydrogen/storefront-api-types';

import type {ProductCardFragment} from 'storefrontapi.generated';
import {Text, Link, AddToCartButton, Button} from '~/components';
import {isDiscounted, isNewArrival} from '~/lib/utils';
import {getProductPlaceholder} from '~/lib/placeholders';

import {
  SfButton,
  SfIconShoppingCart,
  SfIconFavorite,
} from '@storefront-ui/react';

export function ProductCard({
  product,
  label,
  className,
  loading,
  onClick,
  quickAdd,
}: {
  product: ProductCardFragment;
  label?: string;
  className?: string;
  loading?: HTMLImageElement['loading'];
  onClick?: () => void;
  quickAdd?: boolean;
}) {
  let cardLabel;

  const cardProduct: Product = product?.variants
    ? (product as Product)
    : getProductPlaceholder();
  if (!cardProduct?.variants?.nodes?.length) return null;

  const firstVariant = flattenConnection(cardProduct.variants)[0];

  if (!firstVariant) return null;
  const {image, price, compareAtPrice} = firstVariant;

  if (label) {
    cardLabel = label;
  } else if (isDiscounted(price as MoneyV2, compareAtPrice as MoneyV2)) {
    cardLabel = 'Sale';
  } else if (isNewArrival(product.publishedAt)) {
    cardLabel = 'New';
  }

  const productAnalytics: ShopifyAnalyticsProduct = {
    productGid: product.id,
    variantGid: firstVariant.id,
    name: product.title,
    variantName: firstVariant.title,
    brand: product.vendor,
    price: firstVariant.price.amount,
    quantity: 1,
  };

  return (
    <div className="flex flex-col gap-2">
      <Link
        className="border border-neutral-200 rounded-md hover:shadow-lg overflow-hidden min-w-[250px]"
        onClick={onClick}
        to={`/products/${product.handle}`}
        prefetch="intent"
      >
        <div className="relative">
          {image && (
            <Image
              className="object-cover w-full fadeIn"
              sizes="(min-width: 64em) 25vw, (min-width: 48em) 30vw, 45vw"
              aspectRatio="4/5"
              data={image}
              alt={image.altText || `Picture of ${product.title}`}
              loading={loading}
            />
          )}
          <SfButton
            type="button"
            variant="tertiary"
            size="sm"
            square
            className="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
            aria-label="Add to wishlist"
          >
            <SfIconFavorite size="sm" />
          </SfButton>
        </div>
        <div className="p-4 border-t border-neutral-200">
          <Text className="text-secondary no-underline line-clamp-2 h-12">
            {product.title}
          </Text>
          <span className="block pb-2 font-bold typography-text-lg">
            {isDiscounted(price as MoneyV2, compareAtPrice as MoneyV2) && (
              <CompareAtPrice
                className={'opacity-50 font-normal'}
                data={compareAtPrice as MoneyV2}
              />
            )}
            <Money
              className="text-2xl text-secondary"
              withoutTrailingZeros
              data={price!}
            />
          </span>

          {quickAdd && firstVariant.availableForSale && (
            <AddToCartButton
              lines={[
                {
                  quantity: 1,
                  merchandiseId: firstVariant.id,
                },
              ]}
              variant="primary"
              className="mt-2 flex justify-center gap-2"
              analytics={{
                products: [productAnalytics],
                totalValue: parseFloat(productAnalytics.price),
              }}
            >
              <SfIconShoppingCart className="hidden md:block" size="sm" />
              <Text
                as="span"
                className="flex items-center justify-center gap-2"
              >
                Add to Cart
              </Text>
            </AddToCartButton>
          )}
          {quickAdd && !firstVariant.availableForSale && (
            <Button variant="secondary" className="mt-2" disabled>
              <Text
                as="span"
                className="flex items-center justify-center gap-2"
              >
                Sold out
              </Text>
            </Button>
          )}
        </div>
      </Link>
    </div>
  );
}

function CompareAtPrice({
  data,
  className,
}: {
  data: MoneyV2;
  className?: string;
}) {
  const {currencyNarrowSymbol, withoutTrailingZerosAndCurrency} =
    useMoney(data);

  const styles = clsx('strike', className);

  return (
    <span className={styles}>
      {currencyNarrowSymbol}
      {withoutTrailingZerosAndCurrency}
    </span>
  );
}
