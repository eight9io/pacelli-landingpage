import Heading from '../common/heading';
import {Text} from '../Text';
import clsx from 'clsx';
import hero_background from '~/assets/images/image_brand_hero.png';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({className = ''}) => {
  return (
    <section
      className={clsx(
        'overflow-hidden relative pt-20 md:pt-[160px] mb-15 md:mb-28',
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
            src={hero_background}
            alt="brand"
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
