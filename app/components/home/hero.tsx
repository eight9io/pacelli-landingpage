import clsx from 'clsx';
import Carousel from '~/components/common/carousel';

import {useTranslation} from 'react-i18next';
import Link from '~/components/Link';
import arrowRight from '~/assets/icons/arrow-right.svg';

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
        'h-[100vh] overflow-hidden max-h-[820px] bg-gray-300 relative',
        className,
      )}
    >
      <Carousel
        renderItem={(item, index) => (
          <div
            id={item.id}
            key={item.id}
            className="carousel-item w-full h-full relative"
          >
            <img
              src={item.src}
              className="w-full object-cover bg-no-repeat object-center"
              alt={item.title}
            />
            <div className="absolute z-100 top-1/2 -translate-y-1/2 left-0 w-full">
              <div className="base-container mx-auto text-secondary text-5xl md:text-[84px] font-bold whitespace-break-spaces leading-tight">
                <h2>
                  {t(item.title)}
                  <br />
                  <span className="text-primary">{t([item.subtitle, ''])}</span>
                </h2>
                {item.link && (
                  <Link
                    to={item.link}
                    className="btn bg-secondary rounded-none text-white hover:bg-secondary group "
                  >
                    {t('home:hero.learn_more')}
                    <img
                      className="group-hover:translate-x-1 duration-200"
                      src={arrowRight}
                      alt={t('home:hero.learn_more')}
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
        data={mockData}
        indicatorClassName="bottom-8"
      />
    </section>
  );
};

export default Hero;
