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
            {t('home:booking.title')}
          </h2>
          <p className="text-gray-600 text-base font-normal leading-7">
            {t('home:booking.subtitle')}
          </p>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div class="calendly-inline-widget" data-url="https://calendly.com/pacelliarredamenti/progettazione-online?hide_event_type_details=1&hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </div>
      </div>
    </section>
  );
};

export default Booking;
