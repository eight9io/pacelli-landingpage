import clsx from 'clsx';

import {useTranslation} from 'react-i18next';
import Link from '~/components/Link';
import arrowRight from '~/assets/icons/arrow-right.svg';
import Heading from '../common/heading';
import bg from '~/assets/images/image_blog_hero.png';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({className = ''}) => {
  const {t} = useTranslation('home');

  return (
    <section
      className={clsx(
        'overflow-hidden relative pt-20 md:pt-[160px] mb-15 md:mb-28',
        className,
      )}
    >
      <div className="grid grid-cols-12 base-container gap-8">
        <div className="col-span-12 md:col-span-5">
          <Heading className="mb-4 md:mb-8 " variant="h3">
            Progettazione dell&rsquo;Arredo Giardino con i Set di Mobili da
            Esterno
          </Heading>
          <Link
            to={''}
            className="btn bg-secondary rounded-none text-white hover:bg-secondary group border-none"
          >
            Read more
            <img
              className="group-hover:translate-x-1 duration-200"
              src={arrowRight}
              alt={t('home:hero.learn_more')}
            />
          </Link>
        </div>
        <div className="col-span-12 md:col-span-7">
          {/* todo: change image */}
          <img
            src={bg}
            alt=""
            width={500}
            height={450}
            className="w-full h-[450px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
