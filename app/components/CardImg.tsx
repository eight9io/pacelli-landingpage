import ArrowRight from '~/components/common/icons/arrow-right';
import Link from './Link';
import { Button } from './Button';
import clsx from 'clsx';
import ArrowLeft from '~/components/common/icons/arrow-slide-left';
import ArrowRightCarousel from '~/components/common/icons/arrow-slide-right';
import { useState } from 'react';
/* eslint-disable */
interface ICard {
  item: {
    id: string;
    title: string;
    description: string;
    cover: string[];
    handle: string;
  };
}
const CardImg = ({ item }: ICard) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % item.cover.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + item.cover.length) % item.cover.length);
  };

  return (
    <div className="overflow-hidden shadow-lg h-full relative">


      <div className="carousel bg-red-500 w-full">
        <div
          className={clsx(
            'whitespace-nowrap  align-top   transition-all duration-700 ease-in-out flex w-full ',
          )}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {item.cover.map((img, index) => (
            <div className=" w-full carousel-slide basis-full grow-0 shrink-0 inline-block relative"
            >
              <img
                key={index}
                className="w-full h-[225px] md:h-[400px] object-cover "
                src={img}
                alt="Carousel"
              />
              <div className=" grid grid-cols-6 space-y-2 absolute bottom-0 p-6 flex-row  w-full ">
                <div className={clsx(item.cover.length > 1 ? 'col-span-5' : 'col-span-6', 'text-white')}>
                  Nunc cum aliquet sagittis duis ipsum tincidunt sed scelerisque.
                </div>
                {item.cover.length > 1 && <div className='flex flex-col space-y-2 place-self-end'>
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
                </div>}
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="px-8 py-5">
        <h3 className="text-primary md:text-[40px] line-clamp-1 font-semibold md:leading-[50px] text-[28px] leading-[60px]">
          {item.title}
        </h3>
        <p className="text-gray-900 text-base font-normal line-clamp-3 leading-7 mt-3">
          {item.description}
        </p>
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
