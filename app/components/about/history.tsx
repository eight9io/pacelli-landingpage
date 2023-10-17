import clsx from 'clsx';
import Heading from '../common/heading';
import {Text} from '../Text';
import history from '~/assets/images/image_about_history.png';
import {useTranslation} from 'react-i18next';

interface HistoryProps {
  className?: string;
}

const History: React.FC<HistoryProps> = ({className = ''}) => {
  const {t} = useTranslation('about');
  return (
    <section className={clsx('py-[60px] md:py-[90px]', className)}>
      <div className="base-container py-0">
        <Heading className="mb-6">{t('about:history.title')}</Heading>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <img
              src={history}
              alt="History"
              width={500}
              height={870}
              className="object-cover w-full md:h-[870px]"
            />
          </div>
          <div className="col-span-12 md:col-span-7">
            <Text as="p" className="text-gray-900 mb-8 max-w-auto leading-7">
              {t('about:history.description1')}
            </Text>
            <Text as="p" className="text-gray-900 mb-8 max-w-auto leading-7">
              {t('about:history.description2')}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
