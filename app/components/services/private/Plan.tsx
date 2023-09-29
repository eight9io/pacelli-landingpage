import clsx from 'clsx';
import {useTranslation} from 'react-i18next';
import services4 from '~/assets/services/services-4.png';
interface PlanProps {
  className?: string;
}

const Plan: React.FC<PlanProps> = ({className = ''}) => {
  const {t} = useTranslation('home');

  return (
    <section
      className={clsx(
        ' py-[30px] lg:py-[90px] base-container mt-12',
        className,
      )}
    >
      <div className="grid grid-cols-12 lg:gap-11 gap-y-8">
        <div className="col-span-12 lg:col-span-7 space-y-6  ">
          <h2 className="text-[40px] md:text-[64px] font-semibold leading-[50px] md:leading-[78px] text-primary-950">
            Stai pianificando qualcosa di speciale per la tua casa o per la tua
            nuova attività?
          </h2>
          <p className=" text-gray-900 text-base font-normal leading-7 ">
            Prendi ora un appuntamento per una consulenza personalizzata
            gratuita e lascia che il nostro team di esperti ti assista nella
            trasformazione dei tuoi sogni in realtà. Siamo qui per rendere
            possibile ciò che desideri
          </p>
        </div>
        <div className="col-span-12 lg:col-span-5 ">
          <img
            src={services4}
            alt="Mission"
            width={501}
            height={600}
            className="h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Plan;
