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
import vincenzo from '~/assets/carousel/vincenzo.png';
import claudia from '~/assets/carousel/claudia.png';
import {useTranslation} from 'react-i18next';

interface SocialProofProps {
  className?: string;
}

const SocialProof: React.FC<SocialProofProps> = ({className = ''}) => {
  const {t} = useTranslation('home');
  return (
    <section className={clsx('pt-[60px] bg-[#f5f6f7]', className)}>
      <Heading className="text-center">{t('home:social-proof.title')}</Heading>
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
                    className="h-[400px] object-cover object-center"
                    src={item.image}
                    alt={item.author}
                    width={754}
                    height={400}
                  />
                </div>
                <div className="col-span-12 md:col-span-4 flex flex-col gap-4 px-4 md:px-0 space-y-3">
                  <IconQuote className="text-secondary " />
                  <h3 className="text-primary text-[40px] font-normal leading-[50px]">
                    {t(item.author)}
                  </h3>
                  <p className="text-gray-900 text-base font-normal leading-7">
                    {t(item.quote)}
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
    author: 'home:social-proof.item1.author',
    quote: 'home:social-proof.item1.excerpt',
  },
  {
    id: 'item-proof2',
    image: maria,
    author: 'home:social-proof.item2.author',
    quote: 'home:social-proof.item2.excerpt',
  },
  {
    id: 'item-proof3',
    image: maraja,
    author: 'home:social-proof.item3.author',
    quote: 'home:social-proof.item3.excerpt',
  },
  {
    id: 'item-proof4',
    image: franco,
    author: 'home:social-proof.item4.author',
    quote: 'home:social-proof.item4.excerpt',
  },
  {
    id: 'item-proof5',
    image: lino,
    author: 'home:social-proof.item5.author',
    quote: 'home:social-proof.item5.excerpt',
  },
  {
    id: 'item-proof6',
    image: agostino,
    author: 'home:social-proof.item6.author',
    quote: 'home:social-proof.item6.excerpt',
  },
  {
    id: 'item-proof7',
    image: claudia,
    author: 'home:social-proof.item7.author',
    quote: 'home:social-proof.item7.excerpt',
  },
  {
    id: 'item-proof8',
    image: vincenzo,
    author: 'home:social-proof.item8.author',
    quote: 'home:social-proof.item8.excerpt',
  },
];
