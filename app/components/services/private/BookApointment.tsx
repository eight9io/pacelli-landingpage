import clsx from 'clsx';
import ThreeD from '~/components/common/icons/3d';
import ArrowRight from '~/components/common/icons/arrow-right';
import Car from '~/components/common/icons/car';
import Headphone from '~/components/common/icons/headphone';
import Pig from '~/components/common/icons/pig';
import Preventivo from '~/components/common/icons/preventivo';
import Promo from '~/components/common/icons/promo';
import { Button } from '~/components/snippets';


interface BookAppointmentProps {
  className?: string;
}
const arr = [
  {
    id: 1,
    img: <Preventivo width={64} height={64} />,
    title: 'Preventivo gratuito',
    description:
      'Ricevi la tua consulenza personalizzata e ricevi un preventivo senza alcun costo.',
  },
  {
    id: 2,
    img: <Car width={64} height={64} />,
    title: 'Trasporto e montaggio',
    description:
      "Offriamo servizi di trasporto e montaggio in Italia e all'estero, eseguiti dal nostro team altamente qualificato.",
  },
  {
    id: 3,
    img: <ThreeD width={64} height={64} />,
    title: 'Progettazione 3D su misura',
    description:
      "I nostri architetti sviluppano il tuo arredamento iniziando con un accurato rilievo delle misure e utilizzando le più avanzate tecnologie digitali. Grazie a strumenti all'avanguardia nel campo della digitalizzazione e della progettazione, ti offriamo l'opportunità di visualizzare in anteprima una rappresentazione estremamente realistica del tuo progetto.",
  },
  {
    id: 4,
    img: <Promo width={64} height={64} />,
    title: 'Promo speciali wedding',
    description:
      "Abbiamo creato esclusivi pacchetti promozionali dedicati alle coppie di giovani sposi, offrendo loro l'opportunità di arredare i loro spazi con mobili e materiali di alta qualità a prezzi speciali e vantaggiosi.",
  },
  {
    id: 5,
    img: <Headphone width={64} height={64} />,
    title: 'Assistenza clienti',
    description:
      "L'assistenza al cliente è da sempre la nostra priorità. Siamo al tuo fianco sin dalla fase iniziale della progettazione, durante la selezione dei tuoi arredi preferiti, durante l'installazione e anche nel periodo post-vendita. Il nostro impegno a supportarti è duraturo e costante.",
  },

  {
    id: 6,
    img: <Pig width={64} height={64} />,
    title: 'Finanziamenti personalizzati',
    description:
      "Offriamo finanziamenti personalizzabili per un acquisto senza preoccupazioni. Grazie a queste opzioni di finanziamento, potrai scegliere l'arredamento che più ami e pagarlo comodamente a rate.",
  },
];
const BookAppointment: React.FC<BookAppointmentProps> = ({ className = '' }) => {
  return (
    <section className={clsx(className)}>
      <div className="base-container !pt-0  mt-[40px] mb-[120px]">
        <div className="grid grid-cols-12   lg:gap-8 gap-y-8">
          <div className="col-span-12 lg:col-span-4 space-y-6 items-center justify-center ">
            {arr.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className=" border-neutral-50 border-[1px]  overflow-hidden shadow-md space-y-4 p-8  
                    
                    "
              >
                {item.img}
                <p className="text-secondary text-[22px] md:text-2xl font-bold leading-9 ">
                  {item.title}
                </p>
                <p className=" text-gray-900 text-base font-normal leading-7 ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-4 space-y-8  ">
            {arr.slice(2, 4).map((item) => (
              <div
                key={item.id}
                className=" border-neutral-50 border-[1px] w-max-[395px] overflow-hidden shadow-md space-y-4 p-8 px-4 md:px-8 
                    
                    "
              >
                {item.img}
                <p className="text-secondary text-[22px] md:text-2xl font-bold leading-9 ">
                  {item.title}
                </p>
                <p className=" text-gray-900 text-base font-normal leading-7 ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-4 space-y-8  ">
            {arr.slice(4, 6).map((item) => (
              <div
                key={item.id}
                className=" border-neutral-50 border-[1px] w-max-[395px] overflow-hidden shadow-md space-y-4 p-8 px-4 md:px-8 
                    
                    "
              >
                {item.img}
                <p className="text-secondary text-[22px] md:text-2xl font-bold leading-9 ">
                  {item.title}
                </p>
                <p className=" text-gray-900 text-base font-normal leading-7 ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Button
          className="rounded-sm uppercase mt-8 flex gap-3 mx-auto"
          size="md"
        >
          Book appointment
          <ArrowRight className="text-secondary w-5 h-5 stroke-secondary origin-center stroke-2" />
        </Button>
      </div>
    </section>
  );
};
export default BookAppointment;
