import ArrowRight from '~/components/common/icons/arrow-right';
import Link from '../Link';
import {Button} from '../Button';
import clsx from 'clsx';
import ArrowLeft from '~/components/common/icons/arrow-slide-left';
import {RefObject, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';

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
const ProjectCard = ({item}: ICard) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const subtitleCarouselRef = useRef<HTMLDivElement>(null);
  const {t} = useTranslation('gallery');

  const next = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current && currentSlide < item.cover.length - 1) {
      ref.current.scroll({
        left: ref.current.scrollLeft + ref.current.clientWidth,
        behavior: 'smooth',
      });
    } else if (ref.current && currentSlide == item.cover.length - 1) {
      ref.current.scroll({
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const prev = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current && currentSlide > 0) {
      ref.current.scroll({
        left: ref.current.scrollLeft - ref.current.clientWidth,
        behavior: 'smooth',
      });
    } else if (ref.current && currentSlide == 0) {
      ref.current.scroll({
        left: ref.current.scrollWidth - ref.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    next(carouselRef);
  };

  const handlePrev = () => {
    prev(carouselRef);
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
          <div
            className="w-full carousel-item carousel-slide basis-full grow-0 shrink-0 inline-block relative"
            key={`${item.id}_${img}`}
          >
            <img
              key={index}
              className="w-full h-[225px] md:h-[400px] object-cover "
              src={img}
              alt="Carousel"
            />
            <div className="bg-gradient-to-tl from-gray-800 to-transparent via-transparent absolute h-2/5 w-full bottom-0"></div>
            <div className="flex justify-end space-y-2 absolute bottom-0 py-4 md:px-4 flex-row w-full">
              {item.cover.length > 1 && (
                <div className="flex items-center gap-x-2 col-span-1 col-start-6">
                  <Button
                    className={clsx('rounded-sm bg-transparent')}
                    size="md"
                    onClick={handlePrev}
                  >
                    <ArrowLeft className="fill-white w-10 h-10" />
                  </Button>
                  <Button
                    className={clsx('rounded-sm bg-transparent ')}
                    size="md"
                    onClick={handleNext}
                  >
                    <ArrowLeft className="fill-white w-10 h-10 rotate-180" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="px-6 py-5">
        <h3 className="text-primary md:text-[40px] line-clamp-1 font-semibold leading-[50px] text-[28px] md:leading-[60px]">
          {item.title}
        </h3>
        <div className="carousel w-full">
          <div
            ref={subtitleCarouselRef}
            className={clsx(
              'whitespace-nowrap  align-top transition-all duration-200 ease-in-out flex w-full ',
            )}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {item?.subtitles?.map((img, index) => (
              <div
                className="w-full carousel-slide basis-full grow-0 shrink-0 inline-block relative"
                key={`${item.id}_${img}`}
                style={{
                  transform: `translateX(${
                    (subtitleCarouselRef.current?.clientWidth || 0) *
                    currentSlide
                  }px})`,
                }}
              >
                {item.subtitles && item.subtitles[index] ? (
                  <div
                    className={clsx(
                      item.cover.length > 1 ? 'col-span-5' : 'col-span-6',
                      'text-primary whitespace-pre-wrap line-clamp-3 md:line-clamp-4 align-text-bottom	self-end',
                    )}
                  >
                    {item.subtitles[index]}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <Link
          className="uppercase mt-6 inline-flex gap-3 bg-secondary-900 font-bold text-center py-2.5 px-4 text-white my-4 hover:bg-secondary-800  "
          to={`/project/${item.handle}`}
        >
          {t('view_more')}
          <ArrowRight className="text-secondary w-5 h-5 stroke-secondary origin-center stroke-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
