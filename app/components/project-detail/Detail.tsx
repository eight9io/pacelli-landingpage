import clsx from 'clsx';
import {CarouselImage} from '../gallery/project-card';
import {useState} from 'react';

interface DetailProps {
  className?: string;
  title: string;
  subTitle: string;
  imgPosition?: 'left' | 'right';
  image: Array<string>;
}

const Detail: React.FC<DetailProps> = ({
  className = '',
  title,
  subTitle,
  image,
  imgPosition = 'right',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <section
      className={clsx(' pt-[30px] lg:pt-[60px] base-container ', className)}
    >
      <h2 className="text-[40px] md:text-[64px] font-semibold leading-[50px] md:leading-[78px] text-primary-950">
        {title}
      </h2>
      <div
        className={clsx('grid grid-cols-12  gap-y-8 my-8 md:gap-6 lg:gap-11')}
      >
        <div
          className={clsx(
            'col-span-12  lg:col-span-4',
            imgPosition === 'right'
              ? 'md:col-span-5 lg:col-span-4'
              : 'md:col-span-7 lg:col-span-8 ',
          )}
        >
          {imgPosition === 'right' ? (
            <p className="text-base font-normal leading-7 text-neutral-800 mb-8">
              {subTitle}
            </p>
          ) : image ? (
            <CarouselImage
              arrImg={image}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              renderImg={(img: string, index: number) => (
                <img
                  src={img as string}
                  alt="Carousel"
                  width={715}
                  height={600}
                  className="h-[600px] w-full object-cover"
                />
              )}
            />
          ) : null}
        </div>
        <div
          className={clsx(
            'col-span-12  ',
            imgPosition === 'right'
              ? ' md:col-span-7 lg:col-span-8 '
              : 'md:col-span-5 lg:col-span-4',
          )}
        >
          {imgPosition === 'right' ? (
            image ? (
              <CarouselImage
                arrImg={image}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                renderImg={(img: string, index: number) => (
                  <img
                    src={img as string}
                    alt="Carousel"
                    width={715}
                    height={600}
                    className="h-[600px] w-full object-cover"
                  />
                )}
              />
            ) : null
          ) : (
            <p className="text-base font-normal leading-7 text-neutral-800 mb-8">
              {subTitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Detail;
