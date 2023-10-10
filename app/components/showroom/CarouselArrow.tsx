import clsx from 'clsx';
import CarouselArrow from './carouselShowroom';
import { Button } from '../Button';
import image1 from '~/assets/showroom/image-1.png';
import image2 from '~/assets/showroom/image-2.png';
import image3 from '~/assets/showroom/image-3.png';
import image4 from '~/assets/showroom/image-4.png';
import image5 from '~/assets/showroom/image-5.png';
import image6 from '~/assets/showroom/image-6.png';
import image7 from '~/assets/showroom/image-7.png';
import image8 from '~/assets/showroom/image-8.png';
import image9 from '~/assets/showroom/image-9.png';
import showroom7 from '~/assets/showroom/showroom7.png';

interface CarouselShowroomProps {
  className?: string;
}

const CarouselShowroom: React.FC<CarouselShowroomProps> = ({
  className = '',
}) => {
  const arrImg = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  return (
    <section className={clsx('pt-[60px] base-container ', className)}>
      <div className=" px-0 relative">
        <CarouselArrow
          // className="relative"
          renderItem={(item, index) => (
            <div
              id={item.id}
              key={item.id}
              className="base-container px-0 carousel-item grid grid-cols-12 gap-y-6 md:gap-16 mb-16 overflow-hidden"
            >
              <div className="col-span-12 md:col-span-4 px-4 md:px-0">
                <img
                  className="w-full h-[540px]"
                  src={item.image}
                  alt={item.author}
                  width={395}
                  height={540}
                />
                <p>{item.author}</p>
              </div>
            </div>
          )}
          data={arrImg}
          renderIndicator={(item, index, active, onClick) => (
            <div className="mx-auto space-x-4">
              <Button
                className="rounded-sm uppercase mt-6 bg-red-100 py-3 px-4"
                size="md"
              >
                &larr;
              </Button>
              <Button
                className="rounded-sm uppercase mt-6 bg-red-100 py-3 px-4"
                size="md"
              >
                &rarr;
              </Button>
            </div>
          )}
        />
      </div>

      <img
        src={showroom7}
        alt="Mission"
        width={1030}
        height={580}
        className="mt-28 mx-auto h-[580px]  "
      />
    </section>
  );
};

export default CarouselShowroom;

interface SocialProofItemProps {
  id: string;
  image: string;
  author: string;
  quote: string;
}
