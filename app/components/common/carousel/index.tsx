'use client';

import clsx from 'clsx';
import {useCallback, useRef, useState} from 'react';
import {useDebounce} from 'usehooks-ts';
import {Button} from '~/components/Button';
import ArrowLeft from '~/components/common/icons/arrow-slide-left';
import ArrowRight from '~/components/common/icons/arrow-slide-right';
interface CarouselProps {
  className?: string;
  data?: any[];
  positionArrow?: 'center' | 'bottom';
  renderItem?: (
    item?: any,
    index?: number,
    active?: boolean,
  ) => React.ReactNode;
  renderIndicator?: (
    item?: any,
    index?: number,
    active?: boolean,
    onClick?: any,
  ) => React.ReactNode;
  indicatorClassName?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  className = '',
  data = [],
  renderItem,
  renderIndicator,
  indicatorClassName = '',
  positionArrow,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const debounceIndex = useDebounce(currentIndex, 20);

  const onIndicatorClick = (id: string, index = 0) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: document.getElementById(id)?.offsetLeft,
      });
      setCurrentIndex(index);
    }
  };
  const handleNext = () => {
    if (carouselRef.current && currentIndex < data.length - 1) {
      carouselRef.current.scroll({
        left: carouselRef.current.scrollLeft + carouselRef.current.clientWidth,
        behavior: 'smooth',
      });
    } else if (carouselRef.current && currentIndex == data.length - 1) {
      carouselRef.current.scroll({
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  const handlePrev = () => {
    if (carouselRef.current && currentIndex > 0) {
      carouselRef.current.scroll({
        left: carouselRef.current.scrollLeft - carouselRef.current.clientWidth,
        behavior: 'smooth',
      });
    } else if (carouselRef.current && currentIndex == 0) {
      carouselRef.current.scroll({
        left: carouselRef.current.scrollWidth - carouselRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };
  const defaultRenderIndicator: (
    item?: any,
    index?: number,
    active?: boolean,
    onClick?: (id: string, index?: number) => void,
  ) => React.ReactNode = useCallback(
    (
      item: any,
      index?: number,
      active?: boolean,
      onClick?: (id: string, index?: number) => void,
    ) => (
      <div
        key={`indicator-${item.id}`}
        onClick={() =>
          onClick ? onClick(item.id, index) : onIndicatorClick(item.id, index)
        }
        className="py-1 w-10 cursor-pointer  "
      >
        <span
          className={clsx(
            'h-0.5 inline-block md:w-10  w-9 cursor-pointer shadow',
            active ? 'bg-white' : 'bg-gray-400',
          )}
        ></span>
      </div>
    ),
    [],
  );

  return (
    <>
      <div
        ref={carouselRef}
        className={clsx('carousel w-full h-full ', className)}
        onScroll={(e) => {
          const scrollLeft = (e.target as HTMLDivElement).scrollLeft;
          // const scrollWidth = (e.target as HTMLDivElement).scrollWidth;
          const clientWidth = (e.target as HTMLDivElement).clientWidth;
          // const scrollRight = scrollWidth - scrollLeft - clientWidth;
          const index = Math.round(scrollLeft / clientWidth);
          setCurrentIndex(index);
        }}
      >
        {data.map((item, index) =>
          renderItem ? (
            renderItem(item, index)
          ) : (
            <div id={item.id} key={item.id} className="carousel-item w-full">
              <img
                src={item.src}
                alt=""
                className="w-full object-cover object-center"
              />
            </div>
          ),
        )}
      </div>
      <div
        className={clsx(
          'absolute bottom-24 left-0 w-full z-4',
          indicatorClassName,
        )}
      >
        <div className={clsx('base-container flex justify-start py-2 gap-2 ')}>
          {data.map((item, index) =>
            (renderIndicator ?? defaultRenderIndicator)(
              item,
              index,
              index === debounceIndex,
              onIndicatorClick,
            ),
          )}
        </div>
      </div>
      {positionArrow == 'center' && (
        <>
          <div className="absolute top-1/2 hidden md:block">
            <Button
              className={clsx(
                'rounded-sm uppercase mt-6 bg-neutral-100 p-2 ml-4',
              )}
              size="md"
              onClick={handlePrev}
            >
              <ArrowLeft className="fill-[#9CA3AF] " />
            </Button>
          </div>
          <div className="absolute top-1/2 hidden md:block right-0">
            <Button
              className={clsx(
                'rounded-sm uppercase mt-6 bg-neutral-100 p-2 mr-4',
              )}
              size="md"
              onClick={handleNext}
            >
              <ArrowRight className="fill-[#9CA3AF] " />
            </Button>
          </div>
        </>
      )}
      {positionArrow == 'bottom' && (
        <div className="  gap-8 absolute   base-container md:bottom-0 w-auto  right-10 md:left-0 hidden md:flex">
          <Button
            className={clsx(
              'rounded-sm uppercase mt-6 bg-[#e6e7eb] p-4 hover:bg-neutral-300 transition-all duration-300',
            )}
            size="md"
            onClick={handlePrev}
          >
            <ArrowLeft className="fill-[#9CA3AF] " />
          </Button>
          <Button
            className={clsx(
              'rounded-sm uppercase mt-6 bg-[#e6e7eb] p-4 hover:bg-neutral-300 transition-all duration-300',
            )}
            size="md"
            onClick={handleNext}
          >
            <ArrowRight className="fill-[#9CA3AF] " />
          </Button>
        </div>
      )}
    </>
  );
};

export default Carousel;
