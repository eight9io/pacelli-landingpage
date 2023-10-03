import clsx from 'clsx';
import Heading from '~/components/common/heading';
import showroom6 from '~/assets/showroom/showroom6.png';
import { Button } from '~/components/snippets';
/* eslint-disable */
import ArrowRight from '~/components/common/icons/arrow-right';
import { InfoContact } from '../contact/contact-cta-form';
import BookingForm from '../common/form/booking-form';
import { useState } from 'react';

interface MyTeamProps {
  className?: string;
}

const MyTeam: React.FC<MyTeamProps> = ({ className = '' }) => {
  const [openForm, setOpenForm] = useState(false)
  const openPopup = () => {
    setOpenForm(true);
    document.body.style.overflow = 'hidden'
    document.body.classList.add("lg:pr-[15px]")
    var header = document.getElementById('nav-header')
    if (header) header.classList.add("lg:pr-[47px]")

  };

  const closePopup = () => {
    setOpenForm(false);
    document.body.style.overflow = 'auto';
    document.body.classList.remove("lg:pr-[15px]")
    var header = document.getElementById('nav-header')
    if (header) header.classList.remove("lg:pr-[47px]")

  };
  return (
    <section className={clsx('bg-white  py-[60px] md:py-[90px]', className)}>
      <div className="base-container">
        <Heading
          className="mb-4 md:mb-8 text-[48px]  text-primary-950"
          variant="h3"
        >
          Il nostro Tem di esperti
        </Heading>
        <div className="grid grid-cols-12 gap-5 lg:gap-8">
          <div className="col-span-12 md:col-span-4 space-y-8">

            <p className="  text-base font-normal leading-7 ">
              La nostra squadra di architetti e progettisti d'interni è pronta a fornirti la consulenza di cui hai bisogno per rendere il tuo progetto una realtà.Saranno al tuo fianco in ogni fase del processo, garantendoti il massimo supporto e expertise
            </p>
            <p className="text-secondary text-[22px] md:text-2xl font-bold leading-9 ">
              Contacts
            </p>
            <InfoContact />
          </div>
          <div className="col-span-12 md:col-span-4  flex flex-col  
     ">

            <img
              src={showroom6}
              alt="Mission"
              width={394}
              height={500}
              className="h-[500px] w-full " />

            <h3 className="text-gray-900 text-[40px] font-normal leading-[50px] mt-6 mb-4">
              Bruno
            </h3>

            <p className="  text-base font-normal leading-7 ">
              Ciao, sono Bruno, interior desing di Pacelli. Disegnamo un progetto 3D dei tuoi mobili!
            </p>
            <div className='w-full mt-auto'>
              <Button
                className="rounded-sm uppercase flex gap-3 mt-12    "
                size="md"
                onClick={openPopup}>
                Book appointment
                <ArrowRight className="text-secondary w-5 h-5 stroke-secondary origin-center stroke-2" />
              </Button>

            </div>
          </div>
          <div className="col-span-12 md:col-span-4  flex flex-col justify-center items-center  
         ">

            <img
              src={showroom6}
              alt="Mission"
              width={394}
              height={500}
              className="h-[500px] w-full" />

            <h3 className="text-gray-900 text-[40px] font-normal leading-[50px] mt-6 mb-4">
              Ernesto
            </h3>

            <p className="  text-base font-normal leading-7 ">
              Ciao, sono Ernesto, architetto di Pacelli. Nei nostri showroom puoi vedere, toccare, provare mobili in varie configurazioni, tessuti e colori.
            </p>
            <div className='w-full mt-auto'>
              <Button
                className="rounded-sm uppercase flex gap-3 mt-12  "
                size="md"
                onClick={openPopup}>
                Book appointment
                <ArrowRight className="text-secondary w-5 h-5 stroke-secondary origin-center stroke-2" />
              </Button>
            </div>
          </div>

        </div>
      </div>
      {
        openForm && <div className={clsx('fixed  w-screen h-screen bg-[#57575799] top-0 left-0 z-20 flex justify-center items-center overflow-x-hidden  ',
          openForm ? 'show-popup active' : 'hide-popup')}
          onClick={closePopup}>
          <div
            onClick={(e) => e.stopPropagation()}
            className='max-w-[608px] base-container z-50 absolute'>

            <BookingForm
              handleSubmitForm={closePopup}
            />

          </div>



        </div >}



    </section >

  );

};



export default MyTeam;