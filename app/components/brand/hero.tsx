import clsx from 'clsx';
import Carousel from '~/components/common/carousel';

import {useTranslation} from 'react-i18next';
import Link from '~/components/Link';
import arrowRight from '~/assets/icons/arrow-right.svg';
import Heading from '../common/heading';
import {Text} from '../Text';

interface HeroProps {
  className?: string;
}

const mockData = [
  {
    id: 'item1',
    src: 'https://cdn.shopify.com/s/files/1/0816/1971/4346/files/home_hero_1.png',
    title: 'home:hero.item1.title',
    subtitle: 'home:hero.item1.subtitle',
  },
  {
    id: 'item2',
    src: 'https://cdn.shopify.com/s/files/1/0816/1971/4346/files/home_hero_2.png',
    title: 'home:hero.item2.title',
    subtitle: 'home:hero.item2.subtitle',
    link: '/',
  },
  {
    id: 'item3',
    src: 'https://cdn.shopify.com/s/files/1/0816/1971/4346/files/home_hero3.png',
    title: 'home:hero.item3.title',
    subtitle: 'home:hero.item3.subtitle',
    link: '/',
  },
];

const Hero: React.FC<HeroProps> = ({className = ''}) => {
  const {t} = useTranslation('home');

  return (
    <section
      className={clsx(
        'overflow-hidden md:h-screen-without-topbar relative pt-20 md:pt-[160px] mb-15',
        className,
      )}
    >
      <div className="grid grid-cols-12 base-container gap-8">
        <div className="col-span-12 md:col-span-7">
          <Heading className="mb-4 md:mb-8 text-secondary" variant="h3">
            I nostri partner sono solo i <br className="hidden md:block" />
            migliori marchi di arredamento
          </Heading>
          <Text className="mb-6 md:mb-10 text-gray-900">
            Siamo orgogliosi di affermare che le Aziende di cui siamo
            rifornitori sono considerate le migliori nel mercato del mobile.
            Aziende orientate alla ricerca di soluzioni moderne e creative e
            attente ai cambiamenti del vivere la casa e l&apos;arredo. Il
            mercato del mobile è noto per la sua continua innovazione ed
            evoluzione. Per rimanere al passo con le ultime tendenze e
            tecnologie, è essenziale lavorare con aziende all&apos;avanguardia.
            Siamo felici di essere rifornitori di aziende leader nel settore del
            mobile, caratterizzate dalla costante ricerca di soluzioni
            innovative e creative per l&apos;arredamento domestico e non. La
            qualità, l&apos;innovazione, l&apos;affidabilità e la collaborazione
            sono i pilastri della nostra relazione con questi eccezionali
            partner. In un settore in cui la qualità è fondamentale per
            migliorare la vita quotidiana dei consumatori, le aziende che
            serviamo non fanno mai compromessi su questo aspetto, continuando ad
            offrire standard qualitativi altissimi.
          </Text>
        </div>
        <div className="col-span-12 md:col-span-5">
          {/* todo: change image */}
          <img
            src="https://cdn.shopify.com/s/files/1/0816/1971/4346/files/image_none.png?v=1695609670"
            alt=""
            width={500}
            height={600}
            className="h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
