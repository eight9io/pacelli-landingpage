import clsx from 'clsx';
import Heading from '~/components/common/heading';
import showroom6 from '~/assets/showroom/showroom6.png';
import showroom5 from '~/assets/showroom/showroom5.png';
import {Button} from '~/components/snippets';

import ArrowRight from '~/components/common/icons/arrow-right';
import {InfoContact} from '../contact/contact-cta-form';
import {useState, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {PopupModal} from 'react-calendly';

interface MyTeamProps {
  className?: string;
}

const MyTeam: React.FC<MyTeamProps> = ({className = ''}) => {
  const {t} = useTranslation('showroom');
  const [openForm, setOpenForm] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const openPopup = () => {
    setOpenForm(true);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('lg:pr-[15px]');
    const header = document.getElementById('nav-header');
    if (header) header.classList.add('lg:pr-[47px]');
  };

  const closePopup = () => {
    setOpenForm(false);
    document.body.style.overflow = 'auto';
    document.body.classList.remove('lg:pr-[15px]');
    const header = document.getElementById('nav-header');
    if (header) header.classList.remove('lg:pr-[47px]');
  };
  return (
    <section className={clsx('bg-white  py-[60px] md:py-[90px] ', className)}>
      <div className="base-container">
        <Heading
          className="mb-4 md:mb-8 text-[48px] text-primary-950"
          variant="h3"
        >
          {t('team.title', 'Il nostro Team di esperti')}
        </Heading>
        <div className="grid grid-cols-12 gap-5 lg:gap-8">
          <div className="col-span-12 md:col-span-4 space-y-8">
            <p className="text-base font-normal leading-7 text-neutral-800 ">
              {t(
                'team.sub_title',
                "La nostra squadra di architetti e progettisti d'interni è pronta a fornirti la consulenza di cui hai bisogno per rendere il tuo progetto una realtà. Saranno al tuo fianco in ogni fase del processo, garantendoti il massimo supporto e expertise",
              )}
            </p>
            <p className="text-primary-950 text-[22px] md:text-2xl font-bold leading-9">
              {t('contacts.title', 'Contatti')}
            </p>
            <InfoContact />
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col">
            <img
              src={showroom5}
              alt="Mission"
              width={394}
              height={500}
              className="h-[500px] w-full object-cover"
            />

            <h3 className="text-gray-900 text-[40px] font-normal leading-[50px] mt-6 mb-4">
              Bruno
            </h3>

            <p className="text-base font-normal leading-7 text-neutral-800 ">
              {t(
                'team.bruno_info',
                "Con il suo straordinario talento nel rendering 3D, offre ai nostri clienti un'esperienza visiva unica trasportandoli nella realtà dei loro ambienti",
              )}
            </p>
            <div className="w-full mt-auto">
              <Button
                className="rounded-sm uppercase flex gap-3 mt-12    "
                size="md"
                onClick={openPopup}
              >
                {t('contacts.book_appointment', 'Prenota un appuntamento')}
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
              className="h-[500px] w-full object-cover"
            />

            <h3 className="text-gray-900 text-[40px] font-normal leading-[50px] mt-6 mb-4">
              Ernesto
            </h3>

            <p className="text-base font-normal leading-7 text-neutral-800">
              {t(
                'team.ernesto_info',
                'Architetto di lunga data che ha contribuito in modo significativo alla crescita e al successo di Pacelli Arredamenti',
              )}
            </p>
            <div className="w-full mt-auto">
              <Button
                className="rounded-sm uppercase flex gap-3 mt-12 bg-se  "
                size="md"
                onClick={openPopup}
              >
                {t('contacts.book_appointment', 'Prenota un appuntamento')}
                <ArrowRight className="text-secondary w-5 h-5 stroke-secondary origin-center stroke-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          ' bg-[#57575799] top-0 left-0 z-[100] flex justify-center items-center overflow-x-hidden  ',
          openForm
            ? 'show-popup active fixed w-screen h-screen flex'
            : 'hide-popup',
        )}
        onClick={closePopup}
        ref={ref}
      ></div>
      <PopupModal
        url="https://calendly.com/pacelliarredamenti/progettazione-online"
        onModalClose={closePopup}
        open={openForm}
        rootElement={ref.current as HTMLDivElement}
      />
    </section>
  );
};

export default MyTeam;
