import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BookingForm from '~/components/common/form/booking-form';
import ThreeD from '~/components/common/icons/3d';
import ArrowRight from '~/components/common/icons/arrow-right';
import Car from '~/components/common/icons/car';
import Headphone from '~/components/common/icons/headphone';
import Pig from '~/components/common/icons/pig';
import Preventivo from '~/components/common/icons/preventivo';
import Promo from '~/components/common/icons/promo';
import { Button } from '~/components/snippets';
import { XMarkIcon } from '@heroicons/react/24/outline';
/* eslint-disable */

interface BookAppointmentProps {
  className?: string;
}
const arrLgScreen = [
  {
    id: 1,
    img: <Preventivo width={64} height={64} />,
    title: 'arr_icon.item_1.title',
    description: 'arr_icon.item_1.desc',
  },
  {
    id: 2,
    img: <Car width={64} height={64} />,
    title: 'arr_icon.item_2.title',
    description: 'arr_icon.item_2.desc',
  },
  {
    id: 3,
    img: <ThreeD width={64} height={64} />,
    title: 'arr_icon.item_3.title',
    description: 'arr_icon.item_3.desc',
  },
  {
    id: 4,
    img: <Promo width={64} height={64} />,
    title: 'arr_icon.item_4.title',
    description: 'arr_icon.item_4.desc',
  },
  {
    id: 5,
    img: <Headphone width={64} height={64} />,
    title: 'arr_icon.item_5.title',
    description: 'arr_icon.item_5.desc',
  },

  {
    id: 6,
    img: <Pig width={64} height={64} />,
    title: 'arr_icon.item_6.title',
    description: 'arr_icon.item_6.desc',
  },
];
const arrMobileScreen = [
  {
    id: 1,
    img: <Preventivo width={64} height={64} />,
    title: 'arr_icon.item_1.title',
    description: 'arr_icon.item_1.desc',
  },
  {
    id: 3,
    img: <ThreeD width={64} height={64} />,
    title: 'arr_icon.item_3.title',
    description: 'arr_icon.item_3.desc',
  },
  {
    id: 5,
    img: <Headphone width={64} height={64} />,
    title: 'arr_icon.item_5.title',
    description: 'arr_icon.item_5.desc',
  },
  {
    id: 2,
    img: <Car width={64} height={64} />,
    title: 'arr_icon.item_2.title',
    description: 'arr_icon.item_2.desc',
  },

  {
    id: 4,
    img: <Promo width={64} height={64} />,
    title: 'arr_icon.item_4.title',
    description: 'arr_icon.item_4.desc',
  },
  {
    id: 6,
    img: <Pig width={64} height={64} />,
    title: 'arr_icon.item_6.title',
    description: 'arr_icon.item_6.desc',
  },
];
const BookAppointment: React.FC<BookAppointmentProps> = ({ className = '' }) => {
  const { t } = useTranslation('private');
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
    <section className={clsx(className)}>
      <div className="base-container !pt-0  mt-[40px] mb-[120px]">
        <div className="grid-cols-12   lg:gap-8 gap-y-8 hidden lg:grid">
          <div className="col-span-12 lg:col-span-4 space-y-6 items-center justify-center">
            {arrLgScreen.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="border-neutral-50 border-[1px]  overflow-hidden shadow-md space-y-4 p-8  "
              >
                {item.img}
                <p className="text-secondary text-[22px] md:text-2xl font-bold leading-9">
                  {t(item.title)}
                </p>
                <p className="text-gray-900 text-base font-normal leading-7">
                  {t(item.description)}
                </p>
              </div>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-4 space-y-8">
            {arrLgScreen.slice(2, 4).map((item) => (
              <div
                key={item.id}
                className="border-neutral-50 border-[1px] w-max-[395px] overflow-hidden shadow-md space-y-4 p-8 px-4 md:px-8"
              >
                {item.img}
                <p className="text-secondary text-[22px] md:text-2xl font-bold leading-9">
                  {t(item.title)}
                </p>
                <p className="text-gray-900 text-base font-normal leading-7">
                  {t(item.description)}
                </p>
              </div>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-4 space-y-8">
            {arrLgScreen.slice(4, 6).map((item) => (
              <div
                key={item.id}
                className="border-neutral-50 border-[1px] w-max-[395px] overflow-hidden shadow-md space-y-4 p-8 px-4 md:px-8"
              >
                {item.img}
                <p className="text-secondary text-[22px] md:text-2xl font-bold leading-9">
                  {t(item.title)}
                </p>
                <p className="text-gray-900 text-base font-normal leading-7">
                  {t(item.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="block lg:hidden space-y-8">
          {arrMobileScreen.map((item) => (
            <div
              key={item.id}
              className="border-neutral-50 border-[1px] w-max-[395px] overflow-hidden shadow-md space-y-4 p-8 px-4 md:px-8"
            >
              {item.img}
              <p className="text-secondary text-[22px] md:text-2xl font-bold leading-9">
                {t(item.title)}
              </p>
              <p className="text-gray-900 text-base font-normal leading-7">
                {t(item.description)}
              </p>
            </div>
          ))}
        </div>
        <Button
          className="rounded-sm uppercase mt-8 flex gap-3 mx-auto"
          size="md"
          onClick={openPopup}
        >
          {t('book_appointment')}
          <ArrowRight className="text-secondary w-5 h-5 stroke-secondary origin-center stroke-2" />
        </Button>
      </div>
      {openForm && (
        <div
          className={clsx(
            'fixed  w-screen h-screen bg-[#57575799] top-0 left-0 z-[100] flex justify-center items-center overflow-x-hidden  ',
            openForm ? 'show-popup active' : 'hide-popup',
          )}
          onClick={closePopup}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[608px] base-container z-50 absolute"
          >
            <BookingForm handleClose={closePopup} closeButton={

              <XMarkIcon stroke="gray" className="h-6 w-6  absolute top-5 right-5 cursor-pointer hover:scale-125 transition-all duration-300" aria-hidden="true"
                onClick={closePopup}
              />
            } />
          </div>
        </div>
      )}
    </section>
  );
};
export default BookAppointment;
