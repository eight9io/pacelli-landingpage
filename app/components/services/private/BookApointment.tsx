import clsx from 'clsx';
import {useState, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import BookingForm from '~/components/common/form/booking-form';
import ThreeD from '~/components/common/icons/3d';
import ArrowRight from '~/components/common/icons/arrow-right';
import Car from '~/components/common/icons/car';
import Headphone from '~/components/common/icons/headphone';
import Pig from '~/components/common/icons/pig';
import Preventivo from '~/components/common/icons/preventivo';
import Promo from '~/components/common/icons/promo';
import {Button} from '~/components/snippets';
import {PopupModal} from 'react-calendly';

interface BookAppointmentProps {
  className?: string;
}
const arrLgScreen = [
  {
    id: 1,
    img: <Preventivo width={64} height={64} />,
    title: 'arr_icon.item_1.title',
    description: 'arr_icon.item_1.desc',
    reserve_title: 'Preventivo gratuito',
    reserve_desc:
      'Ricevi la tua consulenza personalizzata e ricevi un preventivo senza alcun costo.',
  },
  {
    id: 2,
    img: <Car width={64} height={64} />,
    title: 'arr_icon.item_2.title',
    description: 'arr_icon.item_2.desc',
    reserve_title: 'Trasporto e montaggio',
    reserve_desc:
      "Offriamo servizi di trasporto e montaggio in Italia e all'estero, eseguiti dal nostro team altamente qualificato.",
  },
  {
    id: 3,
    img: <ThreeD width={64} height={64} />,
    title: 'arr_icon.item_3.title',
    description: 'arr_icon.item_3.desc',
    reserve_title: 'Progettazione 3D su misura',
    reserve_desc:
      "I nostri architetti sviluppano il tuo arredamento iniziando con un accurato rilievo delle misure e utilizzando le più avanzate tecnologie digitali. Grazie a strumenti all'avanguardia nel campo della digitalizzazione e della progettazione, ti offriamo l'opportunità di visualizzare in anteprima una rappresentazione estremamente realistica del tuo progetto.",
  },
  {
    id: 4,
    img: <Promo width={64} height={64} />,
    title: 'arr_icon.item_4.title',
    description: 'arr_icon.item_4.desc',
    reserve_title: 'Promo speciali wedding',
    reserve_desc:
      "Abbiamo creato esclusivi pacchetti promozionali dedicati alle coppie di giovani sposi, offrendo loro l'opportunità di arredare i loro spazi con mobili e materiali di alta qualità a prezzi speciali e vantaggiosi.",
  },
  {
    id: 5,
    img: <Headphone width={64} height={64} />,
    title: 'arr_icon.item_5.title',
    description: 'arr_icon.item_5.desc',
    reserve_title: 'Assistenza clienti',
    reserve_desc:
      "L'assistenza al cliente è da sempre la nostra priorità. Siamo al tuo fianco sin dalla fase iniziale della progettazione, durante la selezione dei tuoi arredi preferiti, durante l'installazione e anche nel periodo post-vendita. Il nostro impegno a supportarti è duraturo e costante.",
  },

  {
    id: 6,
    img: <Pig width={64} height={64} />,
    title: 'arr_icon.item_6.title',
    description: 'arr_icon.item_6.desc',
    reserve_title: 'Finanziamenti personalizzati',
    reserve_desc:
      "Offriamo finanziamenti personalizzabili per un acquisto senza preoccupazioni. Grazie a queste opzioni di finanziamento, potrai scegliere l'arredamento che più ami e pagarlo comodamente a rate.",
  },
];
const arrMobileScreen = [
  {
    id: 1,
    img: <Preventivo width={64} height={64} />,
    title: 'arr_icon.item_1.title',
    description: 'arr_icon.item_1.desc',
    reserve_title: 'Preventivo gratuito',
    reserve_desc:
      'Ricevi la tua consulenza personalizzata e ricevi un preventivo senza alcun costo.',
  },
  {
    id: 3,
    img: <ThreeD width={64} height={64} />,
    title: 'arr_icon.item_3.title',
    description: 'arr_icon.item_3.desc',
    reserve_title: 'Progettazione 3D su misura',
    reserve_desc:
      "I nostri architetti sviluppano il tuo arredamento iniziando con un accurato rilievo delle misure e utilizzando le più avanzate tecnologie digitali. Grazie a strumenti all'avanguardia nel campo della digitalizzazione e della progettazione, ti offriamo l'opportunità di visualizzare in anteprima una rappresentazione estremamente realistica del tuo progetto.",
  },
  {
    id: 5,
    img: <Headphone width={64} height={64} />,
    title: 'arr_icon.item_5.title',
    description: 'arr_icon.item_5.desc',
    reserve_title: 'Assistenza clienti',
    reserve_desc:
      "L'assistenza al cliente è da sempre la nostra priorità. Siamo al tuo fianco sin dalla fase iniziale della progettazione, durante la selezione dei tuoi arredi preferiti, durante l'installazione e anche nel periodo post-vendita. Il nostro impegno a supportarti è duraturo e costante.",
  },
  {
    id: 2,
    img: <Car width={64} height={64} />,
    title: 'arr_icon.item_2.title',
    description: 'arr_icon.item_2.desc',
    reserve_title: 'Trasporto e montaggio',
    reserve_desc:
      "Offriamo servizi di trasporto e montaggio in Italia e all'estero, eseguiti dal nostro team altamente qualificato.",
  },

  {
    id: 4,
    img: <Promo width={64} height={64} />,
    title: 'arr_icon.item_4.title',
    description: 'arr_icon.item_4.desc',
    reserve_title: 'Promo speciali wedding',
    reserve_desc:
      "Abbiamo creato esclusivi pacchetti promozionali dedicati alle coppie di giovani sposi, offrendo loro l'opportunità di arredare i loro spazi con mobili e materiali di alta qualità a prezzi speciali e vantaggiosi.",
  },
  {
    id: 6,
    img: <Pig width={64} height={64} />,
    title: 'arr_icon.item_6.title',
    description: 'arr_icon.item_6.desc',
    reserve_title: 'Finanziamenti personalizzati',
    reserve_desc:
      "Offriamo finanziamenti personalizzabili per un acquisto senza preoccupazioni. Grazie a queste opzioni di finanziamento, potrai scegliere l'arredamento che più ami e pagarlo comodamente a rate.",
  },
];
const BookAppointment: React.FC<BookAppointmentProps> = ({className = ''}) => {
  const {t} = useTranslation('private');
  const [openForm, setOpenForm] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const openPopup = () => {
    setOpenForm(true);
    // document.body.style.overflow = 'hidden';
    document.body.addEventListener('wheel', function (event) {
      event.preventDefault();
    });
    document.body.classList.add('lg:pr-[15px]');
    const header = document.getElementById('nav-header');
    if (header) header.classList.add('lg:pr-[47px]');
  };

  const closePopup = () => {
    setOpenForm(false);
    // document.body.style.overflow = 'auto';
    document.body.classList.remove('lg:pr-[15px]');
    const header = document.getElementById('nav-header');
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
                  {t(item.title, item.reserve_title)}
                </p>
                <p className="text-gray-900 text-base font-normal leading-7">
                  {t(item.description, item.reserve_desc)}
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
                  {t(item.title, item.reserve_title)}
                </p>
                <p className="text-gray-900 text-base font-normal leading-7">
                  {t(item.description, item.reserve_desc)}
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
                  {t(item.title, item.reserve_title)}
                </p>
                <p className="text-gray-900 text-base font-normal leading-7">
                  {t(item.description, item.reserve_desc)}
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
                {t(item.title, item.reserve_title)}
              </p>
              <p className="text-gray-900 text-base font-normal leading-7">
                {t(item.description, item.reserve_desc)}
              </p>
            </div>
          ))}
        </div>
        <Button
          className="rounded-sm uppercase mt-8 flex gap-3 mx-auto"
          size="md"
          onClick={openPopup}
        >
          {t('book_appointment', 'Prenota appuntamento')}
          <ArrowRight className="text-secondary w-5 h-5 stroke-secondary origin-center stroke-2" />
        </Button>
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
        rootElement={ref.current}
      />
    </section>
  );
};
export default BookAppointment;
