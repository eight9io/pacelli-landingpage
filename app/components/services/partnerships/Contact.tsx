import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Phone from '~/components/common/icons/phone';
import ProposalForm from '~/components/common/form/proposal-form';
interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className = '' }) => {
  const { t } = useTranslation('home');

  return (
    <section
      className={clsx('  py-24 md:py-32 lg:py-[90px] base-container', className)}
    >
      <div className="grid grid-cols-12 lg:gap-8 gap-y-8">
        <div className="col-span-12 lg:col-span-6 space-y-6  ">
          <h2 className="text-[40px] md:text-[64px] font-semibold leading-[50px] md:leading-[78px] text-[# 142423]">
            Sei un architetto? Un arredatore d’interni?
          </h2>
          <p className="  text-base font-normal leading-7 ">
            Scarica la nostra proposta di collaborazione con professionisti di
            settore.
          </p>
          <div className="h-[1.5px] bg-gray-300"></div>
          <p className="  text-base  leading-7 font-bold">Chiamaci al</p>
          <div className="flex gap-4 text-gray-600 font-normal text-base">
            <Phone className="text-secondary w-6 h-6 stroke-secondary origin-center rotate-[270deg] stroke-2" />
            +39 0824/948533
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:ml-12">
          <ProposalForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
