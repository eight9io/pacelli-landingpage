import Heading from '../common/heading';
import bullhorm from '~/assets/icons/icon_home_about_1.svg';
import clsx from 'clsx';
import handshake from '~/assets/icons/icon_home_about_2.svg';
import star from '~/assets/icons/icon_home_about_3.svg';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({className = ''}) => {
  return (
    <section className={clsx(className)}>
      <div className="base-container !pt-16 mb-8">
        <Heading className="mb-8 md:mb-6">Chi siamo</Heading>
        <div className="grid grid-cols-12 gap-0 gap-y-8">
          <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
            <div className="md:w-3/4">
              <h3 className="text-secondary text-[32px] md:text-[40px] font-semibold flex items-center">
                <img
                  src={bullhorm}
                  alt="Mission"
                  className="w-9 h-9 md:w-10 md:h-10 inline mr-3"
                />
                Mission
              </h3>
              <p className="text-base text-gray-900">
                La nostra missione è creare ambienti straordinari che soddisfino
                le esigenze e i gusti individuali di ogni cliente, trasformando
                così le loro visioni in realtà.
              </p>
              <p className="text-base text-gray-900">
                Con la nostra competenza e dedizione, siamo qui per garantire
                che ogni progetto sia un&apos;esperienza straordinaria e di
                successo
              </p>
            </div>
            <hr className="md:w-[calc(100%-32px)]" />
            <div className="md:w-3/4 md:translate-x-1/4">
              <h3 className="text-secondary text-[32px] md:text-[40px] font-semibold flex items-center">
                <img
                  src={handshake}
                  alt="Mission"
                  className="w-9 h-9 md:w-10 md:h-10 inline mr-3"
                />
                Perché noi
              </h3>
              <p className="text-base text-gray-900">
                Scegliere Pacelli Arredamenti è molto più di una semplice
                decisione d&apos;acquisto. Qui, la qualità e la convenienza si
                fondono armoniosamente, offrendoti l&apos;opportunità di
                realizzare i tuoi sogni d&apos;arredo in un unico, straordinario
                luogo
              </p>
            </div>
            <hr className="md:w-[calc(100%-32px)]" />
            <div className="md:w-[56%]">
              <h3 className="text-secondary text-[32px] md:text-[40px] font-semibold flex items-center">
                <img
                  src={star}
                  alt="Mission"
                  className="w-9 h-9 md:w-10 md:h-10 inline mr-3"
                />
                Punti di forza
              </h3>
              <p className="text-base text-gray-900">
                Il nostro successo è guidato da tre pilastri fondamentali: una
                vasta selezione di prodotti da aziende di alta qualità, la
                nostra costante attenzione alla precisione e un forte impegno
                per la fiducia e la trasparenza.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 md:mb-[120px]">
            <img
              src={
                'https://cdn.shopify.com/s/files/1/0816/1971/4346/files/image_home_about_3eeb2b7e-dd39-4162-b554-b16526eaef49.png?v=1695108927'
              }
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
