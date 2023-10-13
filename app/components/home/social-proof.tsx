import Carousel from '~/components/common/carousel';
import IconQuote from '~/components/common/icons/quote';
import clsx from 'clsx';
import Heading from '../common/heading';
import maria from '~/assets/carousel/maria.png';
import maraja from '~/assets/carousel/maraja.png';
import franco from '~/assets/carousel/franco.png';
import lino from '~/assets/carousel/lino.png';
import agostino from '~/assets/carousel/agostino.png';
import geltrude from '~/assets/carousel/geltrude.png';
interface SocialProofProps {
  className?: string;
}

const SocialProof: React.FC<SocialProofProps> = ({className = ''}) => {
  return (
    <section className={clsx('pt-[60px] bg-[#f5f6f7]', className)}>
      <Heading className="text-center">Cosa dicono di noi</Heading>
      <div className="px-0 relative">
        <div className="base-container">
          <Carousel
            positionArrow="bottom"
            className="relative "
            renderItem={(item, index) => (
              <div
                id={item.id}
                key={item.id}
                className="base-container px-0 carousel-item grid grid-cols-12 gap-y-6 md:gap-16 mb-16 overflow-hidden"
              >
                <div className="col-span-12 md:col-span-8 px-4 md:px-0">
                  <img
                    className="h-[400px]"
                    src={item.image}
                    alt={item.author}
                    width={754}
                    height={400}
                  />
                </div>
                <div className="col-span-12 md:col-span-4 flex flex-col gap-4 px-4 md:px-0 space-y-3">
                  <IconQuote className="text-secondary " />
                  <h3 className="text-primary text-[40px] font-normal leading-[50px]">
                    {item.author}
                  </h3>
                  <p className="text-gray-900 text-base font-normal leading-7">
                    {item.quote}
                  </p>
                </div>
              </div>
            )}
            data={mockData}
            indicatorClassName="bottom-8 md:left-1/2 md:-translate-x-1/2 justify-center !w-[200px]"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

interface SocialProofItemProps {
  id: string;
  image: string;
  author: string;
  quote: string;
}

const mockData: SocialProofItemProps[] = [
  {
    id: 'item-proof1',
    image: geltrude,
    author: 'Geltrude',
    quote:
      'Felice di essermi affidata a voi che siete stati super professionali e siete riusciti ad incontrare il mio gusto creando con molto garbo il laboratorio che ho sempre sognato.',
  },
  {
    id: 'item-proof2',
    image: maria,
    author: 'Maria',
    quote:
      'Paolo un grande professionista. Sa consigliarti sempre con garbo e consapevolezza del suo sapere!',
  },
  {
    id: 'item-proof3',
    image: maraja,
    author: 'Marajà',
    quote:
      'Grazie Paolo che hai realizzato perfettamente la nostra idea. Complimenti per la professionalità, la gentilezza e la precisione. Grazie angora da tutta la famiglia Marajà.',
  },
  {
    id: 'item-proof4',
    image: franco,
    author: 'Franco',
    quote:
      'Grazie ad  Arredamenti Pacelli per la professionalità e competenza nella progettazione e montaggio della mia nuova cucina , ho ricevuto tantissimi complimenti dai miei amici.',
  },
  {
    id: 'item-proof5',
    image: lino,
    author: 'Lino',
    quote:
      'La professionalità fatta persona, persona bellissima. Ho avuto il piacere di collaborare con loro, passione sensa fine.',
  },
  {
    id: 'item-proof6',
    image: agostino,
    author: 'Agostino',
    quote: 'Grazie per l’immensa professionalità.',
  },
];
