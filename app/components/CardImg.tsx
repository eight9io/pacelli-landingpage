import ArrowRight from '~/components/common/icons/arrow-right';
import Link from './Link';
import {Button} from './Button';
import clsx from 'clsx';
import ArrowLeft from '~/components/common/icons/arrow-slide-left';
import ArrowRightCarousel from '~/components/common/icons/arrow-slide-right';
import {useRef, useState} from 'react';
/* eslint-disable */
interface ICard {
  item: {
    id: string;
    title: string;
    description: string;
    cover: string[];
    subtitles: string[];
    handle: string;
  };
}
const CardImg = ({item}: ICard) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (carouselRef.current && currentSlide < item.cover.length - 1) {
      carouselRef.current.scroll({
        left: carouselRef.current.scrollLeft + carouselRef.current.clientWidth,
        behavior: 'smooth',
      });
    } else if (carouselRef.current && currentSlide == item.cover.length - 1) {
      carouselRef.current.scroll({
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    if (carouselRef.current && currentSlide > 0) {
      carouselRef.current.scroll({
        left: carouselRef.current.scrollLeft - carouselRef.current.clientWidth,
        behavior: 'smooth',
      });
    } else if (carouselRef.current && currentSlide == 0) {
      carouselRef.current.scroll({
        left: carouselRef.current.scrollWidth - carouselRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="overflow-hidden shadow-lg h-full relative">
      <div
        className="carousel w-full"
        ref={carouselRef}
        onScroll={(e) => {
          const scrollLeft = (e.target as HTMLDivElement).scrollLeft;
          // const scrollWidth = (e.target as HTMLDivElement).scrollWidth;
          const clientWidth = (e.target as HTMLDivElement).clientWidth;
          // const scrollRight = scrollWidth - scrollLeft - clientWidth;
          const index = Math.round(scrollLeft / clientWidth);
          setCurrentSlide(index);
        }}
      >
        {item.cover.map((img, index) => (
          <div className="w-full carousel-item carousel-slide basis-full grow-0 shrink-0 inline-block relative">
            <img
              key={index}
              className="w-full h-[225px] md:h-[400px] object-cover "
              src={img}
              alt="Carousel"
            />
            <div className="bg-gradient-to-t from-gray-800 to-transparent absolute h-2/5 w-full bottom-0"></div>
            <div className=" grid grid-cols-6 space-y-2 absolute bottom-0 p-6 flex-row  w-full ">
              {item.subtitles && item.subtitles[index] ? (
                <div
                  className={clsx(
                    item.cover.length > 1 ? 'col-span-5' : 'col-span-6',
                    'text-white whitespace-pre-wrap line-clamp-3 md:line-clamp-5 align-text-bottom	',
                  )}
                >
                  {item.subtitles[index]}
                </div>
              ) : null}
              {item.cover.length > 1 && (
                <div className="flex flex-col space-y-2 place-self-end col-span-1 col-start-6">
                  <Button
                    className={clsx('rounded-sm uppercase mt-6 bg-transparent')}
                    size="md"
                    onClick={handlePrev}
                  >
                    <ArrowLeft className="fill-white w-10 h-10 " />
                  </Button>
                  <Button
                    className={clsx('rounded-sm uppercase  bg-transparent ')}
                    size="md"
                    onClick={handleNext}
                  >
                    <ArrowRightCarousel className="fill-white  w-10 h-10" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="px-6 py-5">
        <h3 className="text-primary md:text-[40px] line-clamp-1 font-semibold md:leading-[50px] text-[28px] leading-[60px]">
          {item.title}
        </h3>
        <Link
          className="uppercase mt-8 inline-flex gap-3 bg-secondary-900 font-bold text-center py-2.5 px-4 text-white my-4 hover:bg-secondary-800  "
          to={`/project/${item.handle}`}
        >
          view more
          <ArrowRight className="text-secondary w-5 h-5 stroke-secondary origin-center stroke-2" />
        </Link>
      </div>
    </div>
  );
};

export default CardImg;
