import clsx from 'clsx';
import Heading from '../common/heading';
import strongpoint from '~/assets/about/strongpoint.png';
import { useTranslation } from 'react-i18next';

interface StrongPointProps {
  className?: string;
}

const StrongPoint: React.FC<StrongPointProps> = ({ className = '' }) => {
  const { t } = useTranslation('about');
  return (
    <section className={clsx('bg-gray-100 py-[60px] md:py-[90px]', className)}>
      <div className="base-container">
        <Heading className="mb-4 md:mb-8">
          {t('about:strong_point.title')}
        </Heading>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <p className="text-gray-900">{t('about:strong_point.subtitle')}</p>
            <div className="grid grid-cols-2 pt-8">
              <div className="col-span-2 md:col-span-1">
                <Item
                  count={1}
                  title={t('about:strong_point.item1.title')}
                  content={t('about:strong_point.item1.content')}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Item
                  count={2}
                  title={t('about:strong_point.item2.title')}
                  content={t('about:strong_point.item2.content')}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Item
                  count={3}
                  title={t('about:strong_point.item3.title')}
                  content={t('about:strong_point.item3.content')}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Item
                  count={4}
                  title={t('about:strong_point.item4.title')}
                  content={t('about:strong_point.item4.content')}
                />
              </div>
              <div className="col-span-2 md:col-span-1 hidden md:block">
                <div className="pt-8 pb-6 border-t"></div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <Item
                  count={5}
                  title={t('about:strong_point.item5.title')}
                  content={t('about:strong_point.item5.content')}
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <img
              src={strongpoint}
              alt="Mission"
              width={500}
              height={640}
              className="h-[640px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

type ItemProps = {
  count: number;
  title: string;
  content: string;
};

const Item: React.FC<ItemProps> = ({ count, title, content }) => {
  return (
    <div className="pt-8 pb-4 md:pb-6 md:border-t">
      <Heading
        variant="h4"
        className="mb-1 !text-[22px] md:!text-2xl text-secondary flex items-center gap-2"
      >
        <span className="w-[38px] h-[38px] bg-secondary text-white flex justify-center items-center">
          {count}
        </span>
        {title}
      </Heading>
      <p className="text-gray-900 text-base font-normal leading-7">{content}</p>
    </div>
  );
};

export default StrongPoint;
