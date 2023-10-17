import clsx from 'clsx';
import Heading from '~/components/common/heading';
import showroom6 from '~/assets/showroom/showroom6.png';
import showroom5 from '~/assets/showroom/showroom5.png';

import { Button } from '~/components/snippets';
/* eslint-disable */
import ArrowRight from '~/components/common/icons/arrow-right';
import { InfoContact } from '../contact/contact-cta-form';
import BookingForm from '../common/form/booking-form';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface MyTeamProps {
  className?: string;
}

const MyTeam: React.FC<MyTeamProps> = ({ className = '' }) => {
  const { t } = useTranslation('showroom');
  const [openForm, setOpenForm] = useState(false);
  const openPopup = () => {
    setOpenForm(true);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('lg:pr-[15px]');
    var header = document.getElementById('nav-header');
    if (header) header.classList.add('lg:pr-[47px]');
  };

  const closePopup = () => {
    setOpenForm(false);
    document.body.style.overflow = 'auto';
    document.body.classList.remove('lg:pr-[15px]');
    var header = document.getElementById('nav-header');
    if (header) header.classList.remove('lg:pr-[47px]');
  };
  return (
    <section className={clsx('bg-white  py-[60px] md:py-[90px] ', className)}>
      <div className="base-container">
        <Heading
          className="mb-4 md:mb-8 text-[48px] text-primary-950"
          variant="h3"
        >
          {t('team.title')}
        </Heading>
        <div className="grid grid-cols-12 gap-5 lg:gap-8">
          <div className="col-span-12 md:col-span-4 space-y-8">
            <p className="text-base font-normal leading-7 text-neutral-800 ">
              {t('team.sub_title')}
            </p>
            <p className="text-primary-950 text-[22px] md:text-2xl font-bold leading-9">
              {t('contacts.title')}
            </p>
            <InfoContact />
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col">
            <img
              src={showroom5}
              alt="Mission"
              width={394}
              height={500}
              className="h-[500px] w-full "
            />

            <h3 className="text-gray-900 text-[40px] font-normal leading-[50px] mt-6 mb-4">
              Bruno
            </h3>

            <p className="text-base font-normal leading-7 text-neutral-800 ">
              {t('team.bruno_info')}
            </p>
            <div className="w-full mt-auto">
              <Button
                className="rounded-sm uppercase flex gap-3 mt-12    "
                size="md"
                onClick={openPopup}
              >
                {t('contacts.book_appointment')}
                <ArrowRight className="text-secondary w-5 h-5 stroke-secondary origin-center stroke-2" />
              </Button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col">
            <img
              src={showroom6}
              alt="Mission"
              width={394}
              height={500}
              className="h-[500px] w-full"
            />

            <h3 className="text-gray-900 text-[40px] font-normal leading-[50px] mt-6 mb-4">
              Ernesto
            </h3>

            <p className="text-base font-normal leading-7 text-neutral-800">
              {t('team.ernesto_info')}
            </p>
            <div className="w-full mt-auto">
              <Button
                className="rounded-sm uppercase flex gap-3 mt-12 bg-se  "
                size="md"
                onClick={openPopup}
              >
                Book appointment
                <ArrowRight className="text-secondary w-5 h-5 stroke-secondary origin-center stroke-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {openForm && (
        <div
          className={clsx(
            'fixed w-screen h-screen bg-[#57575799] top-8 md:top-16 left-0 z-20 flex justify-center items-center overflow-x-hidden',
            openForm ? 'show-popup active' : 'hide-popup',
          )}
          onClick={closePopup}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[608px] base-container z-50 absolute"
          >
            <BookingForm handleSubmitForm={closePopup} />
          </div>
        </div>
      )}
    </section>
  );
};

export default MyTeam;
