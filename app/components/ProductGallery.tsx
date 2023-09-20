import {Image} from '@shopify/hydrogen';

import type {MediaFragment} from 'storefrontapi.generated';

import {useState} from 'react';
import {
  SfScrollable,
  SfButton,
  SfIconChevronLeft,
  SfIconChevronRight,
  type SfScrollableOnDragEndData,
  SfScrollableOnScrollData,
} from '@storefront-ui/react';
import clsx from 'clsx';

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */
export function ProductGallery({
  media,
  className,
}: {
  media: MediaFragment[];
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!media.length) {
    return null;
  }

  const onDragged = (event: SfScrollableOnDragEndData) => {
    if (event.swipeRight && activeIndex > 0) {
      setActiveIndex((currentActiveIndex) => currentActiveIndex - 1);
    } else if (event.swipeLeft && activeIndex < images.length - 1) {
      setActiveIndex((currentActiveIndex) => currentActiveIndex + 1);
    }
  };
  const onScroll = (e: SfScrollableOnScrollData) => {
    const index = Math.round(e.left / e.width);
    setActiveIndex(index);
  };

  const activeArrowNavigation = (event: React.KeyboardEvent, index: number) => {
    event.preventDefault();
    const currentElement = event?.target as HTMLElement;
    const nextElement = currentElement.nextElementSibling as HTMLElement;
    const previousElement =
      currentElement.previousElementSibling as HTMLElement;
    if (
      (event.code === 'ArrowRight' || event.code === 'ArrowUp') &&
      index < images.length - 1
    ) {
      setActiveIndex(index + 1);
      nextElement.focus();
    } else if (
      (event.code === 'ArrowLeft' || event.code === 'ArrowDown') &&
      index > 0
    ) {
      setActiveIndex(index - 1);
      previousElement.focus();
    }
  };

  return (
    <div
      className={clsx('relative flex flex-col w-full aspect-[4/3]', className)}
    >
      <SfScrollable
        className="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-drag"
        activeIndex={activeIndex}
        wrapperClassName="h-full min-h-0"
        buttonsPlacement="none"
        isActiveIndexCentered
        drag={{containerWidth: true}}
        onDragEnd={onDragged}
        onScroll={onScroll}
      >
        {media.map((med, i) => (
          <div
            key={`${med.alt}-${i}`}
            className="flex justify-center h-full basis-full shrink-0 grow snap-center bg-gray-300"
          >
            <img
              aria-label={med.alt}
              aria-hidden={activeIndex !== i}
              className="w-auto h-full"
              alt={med.alt || ''}
              src={med.previewImage?.url}
            />
          </div>
        ))}
      </SfScrollable>
      <SfScrollable
        className="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        activeIndex={activeIndex}
        buttonsPlacement="floating"
        slotPreviousButton={
          <SfButton
            className="absolute disabled:hidden !rounded-full z-10 left-4 bg-white"
            variant="secondary"
            size="sm"
            square
            slotPrefix={<SfIconChevronLeft size="sm" />}
          />
        }
        slotNextButton={
          <SfButton
            className="absolute disabled:hidden !rounded-full z-10 right-4 bg-white"
            variant="secondary"
            size="sm"
            square
            slotPrefix={<SfIconChevronRight size="sm" />}
          />
        }
      >
        {media.map((med, i) => {
          const image =
            med.__typename === 'MediaImage'
              ? {...med.image, altText: med.alt || 'Product image'}
              : null;
          return (
            <button
              type="button"
              aria-label={med.alt}
              aria-current={activeIndex === i}
              key={`${med.alt}-${i}-thumbnail`}
              className={clsx(
                'md:w-40 md:h-40 relative shrink-0 pb-1 my-2 -mr-2 border-b-4 snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0',
                activeIndex === i ? 'border-primary-700' : 'border-transparent',
              )}
              onClick={() => setActiveIndex(i)}
              onKeyDown={(event) => activeArrowNavigation(event, i)}
            >
              <img
                alt={med.alt ?? ''}
                className="object-contain border border-neutral-200 w-full h-full"
                width="120"
                height="120"
                src={image?.url ?? ''}
              />
            </button>
          );
        })}
      </SfScrollable>
    </div>
  );
}
