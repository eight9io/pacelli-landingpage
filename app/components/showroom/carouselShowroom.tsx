'use client';
/* eslint-disable */
import clsx from 'clsx';
import { UIEvent, useRef, useState } from 'react';
import { Button } from '~/components/Button';
import ArrowLeft from "~/components/common/icons/arrow-slide-left";
import ArrowRight from "~/components/common/icons/arrow-slide-right";
import Carousel from '../common/carousel';
interface CarouselProps {
  className?: string;
  data?: any[];
  renderItem?: (item?: any, index?: number, active?: boolean) => React.ReactNode;
  renderIndicator?: (item?: any, index?: number, active?: boolean, onClick?: any) => React.ReactNode;
  indicatorClassName?: string;
}

const CarouselArrow: React.FC<CarouselProps> = ({
  data = [],
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleNext = () => {
    if (ref.current) {
      ref.current.scroll({
        left: ref.current.scrollLeft + 395,
        behavior: 'smooth',
      });
    }
  };
  const handlePrev = () => {
    if (ref.current) {
      ref.current.scroll({
        left: ref.current.scrollLeft - 395,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = (e: UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
    setScrollPosition(e.currentTarget.scrollLeft);
  };

  const isDisabledNext = ref.current
    ? scrollPosition >= ref.current.scrollWidth - ref.current.clientWidth
    : false;

  const isDisabledPrev = ref.current ? ref.current.scrollLeft === 0 : true;

  return (
    <div className=" relative base-container">
      <div className="overflow-hidden">
        <div

          ref={ref}
          onScroll={handleScroll}
          className="snap-x snap-mandatory overflow-x-scroll overscroll-x-contain whitespace-nowrap scrollbar-hide"
        >
          <div className=" gap-4 align-top lg:gap-8 space-x-4">
            {data.map((item, index) => {
              if (!item) return null;
              return (
                <div
                  key={index}
                  className="inline-block snap-start  "
                >
                  <img
                    className=" h-[540px]"
                    src={item}
                    alt="Carousel"
                    width={395}
                    height={540}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-8">
        <Button className={clsx("rounded-sm uppercase mt-6 bg-neutral-100 p-4 0", isDisabledPrev && "bg-neutral-50 hover:bg-neutral-50")} size="md" onClick={handlePrev}>
          <ArrowLeft className='fill-[#9CA3AF] ' />
        </Button>
        <Button className={clsx("rounded-sm uppercase mt-6 bg-neutral-100 p-4 0", isDisabledNext && "bg-neutral-50 hover:bg-neutral-50")} size="md"
          onClick={handleNext}
          disabled={isDisabledNext}

        >
          <ArrowRight className='fill-[#9CA3AF] ' />
        </Button>
      </div>

    </div>
  );
};

export default CarouselArrow;
