import clsx from 'clsx';
import services from '~/assets/services/services-5.png';
interface HeroPartnershipsProps {
  className?: string;
}

const HeroPartnerships: React.FC<HeroPartnershipsProps> = ({
  className = '',
}) => {
  return (
    <section className={clsx('  py-24 md:py-32 md:py-[90px] mt-12', className)}>
      <div className="base-container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-9">
            <img
              src={services}
              alt="Mission"
              width={821}
              height={600}
              className="h-[600px] w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPartnerships;
