
import clsx from 'clsx';
import CarouselArrow from '../common/carousel/carouselShowroom';
import { Button } from '../Button';
import showroom7 from '~/assets/showroom/showroom7.png';
import showroom2 from '~/assets/showroom/showroom2.png';
import showroom3 from '~/assets/showroom/showroom3.png';
import showroom4 from '~/assets/showroom/showroom4.png';


interface CarouselShowroomProps {
  className?: string;
}

const CarouselShowroom: React.FC<CarouselShowroomProps> = ({ className = '' }) => {
  const mockData: SocialProofItemProps[] = [
    {
      id: 'item-proof1',
      image: showroom2,
      author: 'Geltrude',
      quote:
        'Felice di essermi affidata a voi che siete stati super professionali e siete riusciti ad incontrare il mio gusto creando con molto garbo il laboratorio che ho sempre sognato.',
    },
    {
      id: 'item-proof2',
      image: showroom3,
      author: 'Maria',
      quote:
        'Paolo un grande professionista. Sa consigliarti sempre con garbo e consapevolezza del suo sapere!',
    },
    {
      id: 'item-proof3',
      image: showroom4,
      author: 'Marajà',
      quote:
        'Grazie Paolo che hai realizzato perfettamente la nostra idea. Complimenti per la professionalità, la gentilezza e la precisione. Grazie angora da tutta la famiglia Marajà.',
    },
    {
      id: 'item-proof4',
      image:
        'https://cdn.shopify.com/s/files/1/0816/1971/4346/files/home_hero_1.png',
      author: 'Franco',
      quote:
        'Grazie ad  Arredamenti Pacelli per la professionalità e competenza nella progettazione e montaggio della mia nuova cucina , ho ricevuto tantissimi complimenti dai miei amici.',
    },
    {
      id: 'item-proof5',
      image:
        'https://cdn.shopify.com/s/files/1/0816/1971/4346/files/home_hero_1.png',
      author: 'Lino',
      quote:
        'La professionalità fatta persona, persona bellissima. Ho avuto il piacere di collaborare con loro, passione sensa fine.',
    },
    {
      id: 'item-proof6',
      image:
        'https://cdn.shopify.com/s/files/1/0816/1971/4346/files/home_hero_1.png',
      author: 'Agostino',
      quote: 'Grazie per l’immensa professionalità.',
    },
  ];

  return (
    <section className={clsx('pt-[60px] base-container', className)}>
      <div className=" px-0 relative">
        <CarouselArrow
          className="relative"
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
          data={mockData}

          renderIndicator={(item, index, active, onClick) => (
            <div className='mx-auto space-x-4'>
              <Button className="rounded-sm uppercase mt-6 bg-red-100 py-3 px-4" size="md">
                &larr;
              </Button>
              <Button className="rounded-sm uppercase mt-6 bg-red-100 py-3 px-4" size="md">
                &rarr;
              </Button></div>
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

