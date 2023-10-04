/* eslint-disable */
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import showroom1 from '~/assets/showroom/showroom1.png';
interface ShowroomProps {
  className?: string;
}
const arrShowroom = [
  {
    id: 1,
    number: '10+',
    text: "Specialisti"
  },
  {
    id: 2,
    number: '50+',
    text: "Brands"
  },
  {
    id: 3,
    number: '1000',
    text: "Mq"
  },
  {
    id: 4,
    number: '900+',
    text: "Clienti saddisfatti"
  },

]
const Showroom: React.FC<ShowroomProps> = ({ className = '' }) => {
  const { t } = useTranslation('home');

  return (
    <section
      className={clsx(' py-[30px] lg:py-[90px] base-container mt-12', className)}
    >
      <div className="grid grid-cols-12 lg:gap-11 gap-y-8">
        <div className="col-span-12 lg:col-span-7 space-y-6  ">
          <h2 className="text-[40px] md:text-[64px] font-semibold leading-[50px] md:leading-[78px] text-primary-950">
            Showroom
          </h2>
          <p className="  text-base font-normal leading-7 ">
            Il nostro Showroom non è solo un luogo espositivo, ma anche un laboratorio di progettazione e design d'interni. Il nostro team di architetti e designer è il partner ideale per creare realizzazioni che non solo rispecchiano, ma superano le aspettative dei nostri clienti. Pacelli Arredamenti è inoltre il luogo in cui l'accoglienza, la gentilezza e la cordialità sono di casa. Qui potrai sentirti a tuo agio fin dal primo istante, perché per noi, creare uno spazio confortevole è anche creare un ambiente accogliente dove ogni cliente si sente come a casa propria.
          </p>
          <div className="grid grid-cols-12   ">
            {arrShowroom.map((item, index) => <div key={item.id} className={clsx("col-span-6 lg:col-span-4  space-y-4  items-center justify-center  py-4 border-neutral-100  border-y-[1px]",
              index === 3 && " lg:col-start-9 border-y-[0px]",
              index === 2 && " border-y-[0px] lg:border-neutral-100  lg:border-y-[1px]",
            )}>
              <div className="flex flex-col i justify-center">
                <p className="text-[40px] md:text-[64px] font-semibold leading-[50px] md:leading-[78px] text-secondary-950">
                  {item.number}
                </p>
                <p className="  text-base font-normal leading-7 ">
                  {item.text}
                </p>
              </div>
            </div>)}
          </div>


        </div>
        <div className="col-span-12 lg:col-span-5 ">
          <img
            src={showroom1}
            alt="Mission"
            width={501}
            height={600}
            className="h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Showroom;
