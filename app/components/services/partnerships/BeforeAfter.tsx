import clsx from 'clsx';
import Heading from '~/components/common/heading';
import services1 from '~/assets/services/services-2.png';
import services2 from '~/assets/services/services-1.png';
import {Button} from '~/components/snippets';

import ArrowRight from '~/components/common/icons/arrow-right';
import {Link} from '@remix-run/react';

interface BeforeAfterProps {
  className?: string;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({className = ''}) => {
  return (
    <section className={clsx('bg-gray-100 py-[60px] md:py-[90px]', className)}>
      <div className="base-container">
        <div className="grid grid-cols-12 gap-5 lg:gap-8">
          <div className="col-span-12 md:col-span-4">
            <Heading
              className="mb-4 md:mb-8 text-[48px]  text-primary-950"
              variant="h3"
            >
              Cosa facciamo guarda il prima e il dopo
            </Heading>
            <p className="  text-base font-normal leading-7 ">
              Siamo entusiasti di mostrarti alcuni dei progetti che abbiamo
              realizzato, tutti personalizzati per soddisfare le esigenze dei
              nostri clienti. La trasformazione è incredibile, e siamo pronti a
              portare anche il tuo spazio al livello successivo. Contattaci ora
              per vedere come possiamo migliorare il tuo ambiente!
            </p>
            <Link to="/gallery">
              <Button
                className="rounded-sm uppercase mt-8 flex gap-3"
                size="md"
              >
                Learn more
                <ArrowRight className="text-secondary w-5 h-5 stroke-secondary origin-center stroke-2" />
              </Button>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-4">
            <img
              src={services1}
              alt="Mission"
              width={394}
              height={600}
              className="h-[600px]"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <img
              src={services2}
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
