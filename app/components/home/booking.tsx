import clsx from 'clsx';
import {useTranslation} from 'react-i18next';
import BookingForm from '~/components/common/form/booking-form';

interface BookingProps {
  className?: string;
}

const Booking: React.FC<BookingProps> = ({className = ''}) => {
  const {t} = useTranslation('home');

  return (
    <section
      className={clsx('base-container max-w-5xl py-16 md:py-32', className)}
    >
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5">
          <h2 className="text-[40px] md:text-[64px] font-semibold leading-[50px] md:leading-[78px] text-primary-950">
            Fissa un incontro con noi
          </h2>
          <p className="text-gray-600 text-base font-normal leading-7">
            Desideri un ambiente che rifletta la tua personalità e soddisfi le
            tue esigenze? Prenota un appuntamento con noi, e saremo lieti di
            aiutarti nella valutazione iniziale dei tuoi spazi da arredare. Il
            nostro team di esperti ti assisterà nella progettazione della
            soluzione migliore per te. Rendiamo i tuoi sogni di arredamento una
            realtà. Contattaci oggi stesso!
          </p>
        </div>
        <div className="col-span-12 md:col-span-7">
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default Booking;
