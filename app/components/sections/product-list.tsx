'use client';

// import { ProductConnection } from 'graphql/graphql';
import Image from 'next/image';
import Link from 'next/link';
import { Money } from '@shopify/hydrogen-react';
import { storefront } from 'utils/storefront';
import { useState } from 'react';
import { ProductConnection } from '@shopify/hydrogen-react/storefront-api-types';

export async function fetchProductListSection(cursor?: string) {
  const { products } = await storefront.query({
    products: [
      { first: 12, after: cursor || null },
      {
        pageInfo: {
          hasNextPage: true,
        },
        edges: {
          cursor: true,
          node: {
            handle: true,
            title: true,
            priceRange: {
              minVariantPrice: {
                amount: true,
                currencyCode: true,
              },
            },
            featuredImage: {
              url: [{ transform: { maxWidth: 500 } }, true],
              altText: true,
              width: true,
              height: true,
            },
          },
        },
      },
    ],
  });

  return products;
}

interface ProductListSectionProps {
  products: ProductConnection;
}

export function ProductListSection({ products }: ProductListSectionProps) {
  const [pages, setPages] = useState([products]);
  const lastPage = pages[pages.length - 1];
  const lastCursor = lastPage.edges[lastPage.edges.length - 1].cursor;
  const hasNextPage = lastPage.pageInfo?.hasNextPage;

  // const [loader, load] = useAsyncFn(async () => {
  //   const productList = await fetchProductListSection(lastCursor);
  //   // setPages([...pages, productList]);
  // }, [lastCursor]);

  return (
    <section className="base-container">
      <h2 className="sr-only">Products</h2>
      <div className="mb-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {pages
          .flatMap(({ edges }) => edges)
          .map(({ node }) => (
            <Link key={node.handle} href={`/products/${node.handle}`} className="group">
              <div className="w-full overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={node.featuredImage!.url}
                  alt={node.featuredImage!.altText || ''}
                  height={node.featuredImage!.height || 300}
                  width={node.featuredImage!.width || 300}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{node.title}</h3>

              <div className="mt-1 text-lg font-medium text-gray-900">
                <Money data={node.priceRange.minVariantPrice}></Money>
              </div>
            </Link>
          ))}
      </div>

      {hasNextPage && (
        <div className="text-center">
          {/* <Button color={loader.error ? 'danger' : 'primary'} size="md" onClick={load} disabled={loader.loading}>
            {loader.loading ? 'Loading' : loader.error ? 'Try Again' : 'Load More'}
          </Button> */}
        </div>
      )}
    </section>
  );
}
