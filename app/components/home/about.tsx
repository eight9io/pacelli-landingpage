import Heading from '../common/heading';
import bullhorm from '~/assets/icons/icon_home_about_1.svg';
import clsx from 'clsx';
import handshake from '~/assets/icons/icon_home_about_2.svg';
import star from '~/assets/icons/icon_home_about_3.svg';
import about_image from '~/assets/images/image_home_about.png';
import {useTranslation} from 'react-i18next';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({className = ''}) => {
  const {t} = useTranslation('home');
  return (
    <section className={clsx(className)}>
      <div className="base-container !pt-16 mb-8">
        <Heading className="mb-8 md:mb-6">
          {t('home:about.title', 'Chi siamo')}
        </Heading>
        <div className="grid grid-cols-12 gap-0 gap-y-8">
          <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
            <div className="md:w-3/4">
              <h3 className="text-secondary text-[32px] md:text-[40px] font-semibold flex items-center">
                <img
                  src={bullhorm}
                  alt="Mission"
                  className="w-9 h-9 md:w-10 md:h-10 inline mr-3"
                />
                {t('home:about.item1.title', 'Mission')}
              </h3>
              <p className="text-base text-gray-900">
                {t(
                  'home:about.item1.subtitle',
                  'Creare ambienti straordinari che trasformano le visioni dei clienti in realtà, garantendo esperienze di successo',
                )}
              </p>
            </div>
            <hr className="md:w-[calc(100%-32px)]" />
            <div className="md:w-3/4">
              <h3 className="text-secondary mt-9 text-[32px] md:text-[40px] font-semibold flex items-center">
                <img
                  src={handshake}
                  alt="Mission"
                  className="w-9 h-9 md:w-10 md:h-10 inline mr-3"
                />
                {t('home:about.item2.title', 'Perché noi')}
              </h3>
              <p className="text-base text-gray-900">
                {t(
                  'home:about.item2.subtitle',
                  "Scegliere Pacelli Arredamenti è un'esperienza unica, con qualità e convenienza che si fondono per realizzare i tuoi sogni d'arredo",
                )}
              </p>
            </div>
            <hr className="md:w-[calc(100%-32px)]" />
            <div className="md:w-[56%]">
              <h3 className="text-secondary mt-9 text-[32px] md:text-[40px] font-semibold flex items-center">
                <img
                  src={star}
                  alt="Mission"
                  className="w-9 h-9 md:w-10 md:h-10 inline mr-3"
                />
                {t('home:about.item3.title', 'Punti di forza')}
              </h3>
              <p className="text-base text-gray-900">
                {t(
                  'home:about.item3.subtitle',
                  'Il nostro successo si fonda su prodotti di alta qualità, precisione e impegno per la fiducia e la trasparenza',
                )}
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 md:mb-[120px]">
            <img
              src={about_image}
              alt="About us"
              width={500}
              height={640}
              className="object-cover h-[640px] md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
