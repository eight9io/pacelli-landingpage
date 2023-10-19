'use client';
import clsx from 'clsx';
import { UIEvent, useEffect, useRef, useState } from 'react';
import { Button } from '~/components/Button';
import ArrowLeft from '~/components/common/icons/arrow-slide-left';
import ArrowRight from '~/components/common/icons/arrow-slide-right';
import Carousel from '../common/carousel';
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

const CarouselArrow: React.FC<CarouselProps> = ({ data = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [divWidth, setDivWidth] = useState(0);
  const carouselRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    updateDivWidth();
    window.addEventListener('resize', updateDivWidth);
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => {
      window.removeEventListener('resize', updateDivWidth);
      clearInterval(interval);
    };
  }, [currentSlide]);
  const updateDivWidth = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      setDivWidth(width + 18);
    }
  };
  const handlePrev = () => {
    setCurrentSlide((currentSlide - 3 + data.length) % (data.length - 2));
  };
  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % (data.length - 2));
  };

  return (
    <div className="relative ">
      <div className="carousel ">
        <div
          className={clsx(
            'whitespace-nowrap  align-top  space-x-4 transition-all duration-700 ease-in-out ',
          )}
          style={{
            transform: `translateX(-${currentSlide * divWidth}px)`,
          }}
        >
          {data.map((item, index) => (
            <div className="carousel-slide basis-auto grow-0 shrink-0 inline-block ">
              <img
                key={index}
                className="h-[540px] object-cover"
                src={item}
                alt="Carousel"
                width={395}
                height={540}
                ref={carouselRef}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-8">
        <Button
          className={clsx('rounded-sm uppercase mt-6 bg-neutral-100 p-4 0')}
          size="md"
          onClick={handlePrev}
        >
          <ArrowLeft className="fill-[#9CA3AF] " />
        </Button>
        <Button
          className={clsx('rounded-sm uppercase mt-6 bg-neutral-100 p-4 0')}
          size="md"
          onClick={handleNext}
        >
          <ArrowRight className="fill-[#9CA3AF] " />
        </Button>
      </div>
    </div>
  );
};

export default CarouselArrow;
