'use client';
/* eslint-disable */
import clsx from 'clsx';
import { useCallback, useRef, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { Button } from '~/components/Button';
import ArrowLeft from '~/components/common/icons/arrow-slide-left';
import ArrowRight from '~/components/common/icons/arrow-slide-right';
interface CarouselProps {
  className?: string;
  data?: any[];
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
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const debounceIndex = useDebounce(currentIndex, 20);

  const onIndicatorClick = (id: string, index: number = 0) => {
    if (carouselRef.current) {
      console.log(document.getElementById(id)?.offsetLeft);
      carouselRef.current.scrollTo({
        left: document.getElementById(id)?.offsetLeft,
      });
      setCurrentIndex(index);
    }
  };
  const handleNext = () => {
    if (carouselRef.current && currentIndex < data.length - 1) {
      carouselRef.current.scroll({
        left: carouselRef.current.scrollLeft + screen.width,
        behavior: 'smooth',
      });
    }
  };
  const handlePrev = () => {
    if (carouselRef.current && currentIndex > 0) {
      carouselRef.current.scroll({
        left: carouselRef.current.scrollLeft - screen.width,
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
      <span
        key={`indicator-${item.id}`}
        onClick={() =>
          onClick ? onClick(item.id, index) : onIndicatorClick(item.id, index)
        }
        className="py-1 w-10 cursor-pointer"
      >
        <span
          className={clsx(
            'h-0.5 inline-block w-10 cursor-pointer shadow',
            active ? 'bg-white' : 'bg-gray-400',
          )}
        ></span>
      </span>
    ),
    [],
  );

  return (
    <>
      <div
        ref={carouselRef}
        className={clsx(
          'carousel w-full h-full ',
          className,
        )}
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
                className="w-full object-cover object-center"
              />
            </div>
          ),
        )}

      </div>
      <div
        className={clsx(
          'absolute bottom-24 left-0 w-full z-50',
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
      <div className="group/rooms  flex   absolute w-full top-0 h-full left-0  items-center  justify-between">
        <div>
          {currentIndex > 0 && <Button
            className={clsx('rounded-sm uppercase   p-0  bg-transparent group-hover/rooms:opacity-100 opacity-0   transition-all duration-500 ',)}
            size="md"
            onClick={handlePrev}
          >
            <ArrowLeft className='  w-16 h-16  fill-secondary ' />
          </Button>}
        </div>
        <div>

          {currentIndex < data.length - 1 && <Button
            className={clsx('rounded-sm uppercase   p-0  bg-transparent group-hover/rooms:opacity-100 opacity-0   transition-all duration-500 ')}
            size="md"
            onClick={handleNext}
          >
            <ArrowRight className='  w-16 h-16  fill-secondary ' />
          </Button>}
        </div>
      </div>
    </>
  );
};

export default Carousel;
