import Carousel from '~/components/common/carousel';
import Link from '~/components/Link';
import arrowRight from '~/assets/icons/arrow-right.svg';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { loader } from '~/routes/($locale)._index';
import { useLoaderData } from '@remix-run/react';

interface HeroProps {
  className?: string;
}

const mockData = [
  {
    id: 'item1',
    src: 'https://cdn.shopify.com/s/files/1/0816/1971/4346/files/home_hero.png',
    title: 'home:hero.item1.title',
    subtitle: 'home:hero.item1.subtitle',
  },
  {
    id: 'item2',
    src: 'https://cdn.shopify.com/s/files/1/0816/1971/4346/files/home_hero_6.png',
    title: 'home:hero.item2.title',
    subtitle: 'home:hero.item2.subtitle',
    link: '/gallery',
  },
  {
    id: 'item3',
    src: 'https://cdn.shopify.com/s/files/1/0816/1971/4346/files/home_hero_5.png',
    title: 'home:hero.item3.title',
    subtitle: 'home:hero.item3.subtitle',
    link: '/about',
  },
  {
    id: 'item4',
    src: 'https://cdn.shopify.com/s/files/1/0816/1971/4346/files/home_hero_4.png',
    title: 'home:hero.item4.title',
    subtitle: 'home:hero.item4.subtitle',
    link: '/brand',
  },
  {
    id: 'item5',
    src: 'https://cdn.shopify.com/s/files/1/0816/1971/4346/files/home_hero_3.png',
    title: 'home:hero.item5.title',
    subtitle: 'home:hero.item5.subtitle',
    link: '/services/professional',
  },
  {
    id: 'item6',
    src: 'https://cdn.shopify.com/s/files/1/0816/1971/4346/files/home_hero2.png',
    title: 'home:hero.item6.title',
    subtitle: 'home:hero.item6.subtitle',
    link: '/services/private',
  },
  {
    id: 'item7',
    src: 'https://cdn.shopify.com/s/files/1/0816/1971/4346/files/home_hero1.png',
    title: 'home:hero.item7.title',
    desc: 'home:hero.item7.desc',
    link: '/showroom',
  },
];

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const { t, ready } = useTranslation('home');
  const { carousels } = useLoaderData<typeof loader>();

  return (
    <section
      className={clsx(
        'h-[100vh] overflow-hidden max-h-[820px] relative',
        className,
      )}
    >
      <Carousel
        positionArrow="center"
        renderItem={(item, index) => (
          <div
            id={item.id}
            key={item.hero}
            className="carousel-item w-full h-full relative "
          >
            <img
              src={item.hero}
              className="w-full object-cover bg-no-repeat object-center"
              alt={item.title}
            />
            <div className="absolute z-100 top-1/2 -translate-y-1/2 left-0 w-full">
              <div className="base-container md:px-0 mx-auto text-secondary text-5xl md:text-[64px] font-bold md:whitespace-break-spaces leading-tight">
                <h2 className="md:max-w-[880px]">
                  {item.title}
                  <br />
                  {item.subtitle ? (
                    <span className="text-primary">{item.subtitle}</span>
                  ) : null}
                </h2>
                {item.description ? (
                  <span className="block text-gray-900 font-normal text-base">
                    {item.description}
                  </span>
                ) : null}
                {item.learn_more_url && (
                  <Link
                    to={item.learn_more_url}
                    className="btn bg-secondary rounded-none text-white hover:bg-secondary group  border-none"
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
        data={carousels.carousel_items || []}
        indicatorClassName="bottom-8"
      />
    </section>
  );
};

export default Hero;
