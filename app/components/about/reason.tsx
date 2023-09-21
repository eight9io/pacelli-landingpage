import clsx from 'clsx';
import Heading from '../common/heading';

interface ReasonProps {
  className?: string;
}

const Reason: React.FC<ReasonProps> = ({className = ''}) => {
  return (
    <section className={clsx('py-[60px] md:py-[90px]', className)}>
      <div className="base-container md:grid grid-cols-12 gap-y-8 gap-x-20">
        <div className="col-span-12 md:col-span-5 mb-8 md:mb-0">
          <Heading className="mb-4 md:mb-6">Perché noi</Heading>
          <p className="text-gray-900 text-base font-normal leading-7">
            Scegliere Pacelli Arredamenti è molto più di una semplice decisione
            d&apos;acquisto; è un&apos;affermazione del tuo impegno per la
            qualità e il tuo apprezzamento per il design ineguagliabile.
          </p>
          <p className="text-gray-900 text-base font-normal leading-7">
            Con Pacelli Arredamenti, non c&apos;è bisogno di compromessi. Qui,
            la qualità e la convenienza si fondono armoniosamente, offrendoti
            l&apos;opportunità di realizzare i tuoi sogni d&apos;arredo in un
            unico, straordinario luogo.
          </p>
          <img
            src="https://cdn.shopify.com/s/files/1/0816/1971/4346/files/image_about_reason1.png"
            alt="Reason"
            width={467}
            height={365}
            className="object-cover w-full h-[365px] mt-8 md:mt-10"
          />
        </div>
        <div className="col-span-12 md:col-span-7">
          <img
            src="https://cdn.shopify.com/s/files/1/0816/1971/4346/files/image_about_reason2.png"
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
