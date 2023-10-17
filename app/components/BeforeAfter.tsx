import clsx from 'clsx';
import Heading from '~/components/common/heading';
import { Button } from '~/components/snippets';

import ArrowRight from '~/components/common/icons/arrow-right';
import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

interface BeforeAfterProps {
  className?: string;
  title: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({
  className = '',
  title,
  description,
  beforeImg,
  afterImg,
}) => {
  const { t } = useTranslation('common');
  return (
    <section className={clsx('bg-gray-100 py-[60px] md:py-[90px]', className)}>
      <div className="base-container">
        <div className="grid grid-cols-12 gap-5 lg:gap-8">
          <div className="col-span-12 md:col-span-4">
            <Heading
              className="mb-4 md:mb-8 text-[48px]  text-primary-950"
              variant="h3"
            >
              {title}
            </Heading>
            <p className="text-gray-900 text-base font-normal leading-7">
              {description}
            </p>
            <Link to="/gallery">
              <Button
                className="rounded-sm uppercase mt-8 flex gap-3"
                size="md"
              >
                {t('button.learn_more')}
                <ArrowRight className="text-secondary w-5 h-5 stroke-secondary origin-center stroke-2" />
              </Button>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-4">
            <img
              src={beforeImg}
              alt="Mission"
              width={394}
              height={600}
              className="h-[600px]"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <img
              src={afterImg}
              alt="Mission"
              width={394}
              height={600}
              className="h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
