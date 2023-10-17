import clsx from 'clsx';
import Heading from '../common/heading';
import reason1 from '~/assets/about/reason1.png';
import reason2 from '~/assets/about/reason2.png';
import {useTranslation} from 'react-i18next';

interface ReasonProps {
  className?: string;
}

const Reason: React.FC<ReasonProps> = ({className = ''}) => {
  const {t} = useTranslation('about');
  return (
    <section className={clsx('py-[60px] md:py-[90px]', className)}>
      <div className="base-container md:grid grid-cols-12 gap-y-8 gap-x-20">
        <div className="col-span-12 md:col-span-5 mb-8 md:mb-0">
          <Heading className="mb-4 md:mb-6">{t('about:reason.title')}</Heading>
          <p className="text-gray-900 text-base font-normal leading-7">
            {t('about:reason.subtitle1')}
          </p>
          <p className="text-gray-900 text-base font-normal leading-7">
            {t('about:reason.subtitle2')}
          </p>
          <img
            src={reason2}
            alt="Reason"
            width={467}
            height={365}
            className="object-cover w-full h-[365px] mt-8 md:mt-10"
          />
        </div>
        <div className="col-span-12 md:col-span-7">
          <img
            src={reason1}
            alt="Reason"
            width={715}
            height={600}
            className="object-cover w-full h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Reason;
