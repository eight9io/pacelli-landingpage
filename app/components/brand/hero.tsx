import { useTranslation } from 'react-i18next';
import Heading from '../common/heading';
import { Text } from '../Text';
import clsx from 'clsx';
import hero_background from '~/assets/images/image_brand_hero.png';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const { t } = useTranslation('brand');
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
            {t('brand:hero.title')}
          </Heading>
          <Text className="mb-6 md:mb-10 text-gray-900">
            {t('brand:hero.description')}
          </Text>
        </div>
        <div className="col-span-12 md:col-span-5">
          {/* todo: change image */}
          <img
            src={hero_background}
            alt="brand"
            width={500}
            height={600}
            className="h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
