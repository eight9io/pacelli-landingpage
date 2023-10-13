import clsx from 'clsx';
import Heading from '../common/heading';
import icon1 from '~/assets/icons/icon_about_mission1.svg';
import icon2 from '~/assets/icons/icon_about_mission2.svg';
import icon3 from '~/assets/icons/icon_about_mission3.svg';

interface MissionProps {
  className?: string;
}

const Mission: React.FC<MissionProps> = ({className = ''}) => {
  return (
    <section className={clsx('bg-gray-100 py-[60px] md:py-[90px]', className)}>
      <div className="base-container grid grid-cols-12 gap-y-8">
        <div className="col-span-12 md:col-span-6 md:order-1">
          <Heading className="mb-6 md:mb-10">Mission</Heading>
          <div className="flex flex-col gap-8">
            <div className="border-b md:borer-b-0 md:border-b pb-8 flex gap-6 items-end">
              <img src={icon1} alt="Mission" className="h-20 md:h-auto" />
              <p className="text-secondary text-[22px] md:text-2xl font-bold leading-9 md:w-3/5">
                Creare ambienti straordinari che soddisfino le esigenze e i
                gusti individuali dei clienti
              </p>
            </div>
            <div className="border-b md:borer-b-0 md:border-b pb-8 flex gap-6 items-center">
              <img src={icon2} alt="Mission" className="h-24 md:h-auto" />
              <p className="text-secondary text-[22px] md:text-2xl font-bold leading-9">
                Trasformare le visioni dei clienti in realtà
              </p>
            </div>
            <div className="border-b md:borer-b-0 md:border-b pb-8 flex gap-6 items-end leading-9">
              <img src={icon3} alt="Mission" className="h-20 md:h-auto" />
              <p className="text-secondary text-[22px] md:text-2xl font-bold w-4/5">
                Assicurare il successo di ogni progetto
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 md:order-0">
          <img
            src="https://cdn.shopify.com/s/files/1/0816/1971/4346/files/image_home_about_3eeb2b7e-dd39-4162-b554-b16526eaef49.png"
            alt="Mission"
            width={500}
            height={640}
            className="h-[640px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
