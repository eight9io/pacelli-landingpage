import amini from '~/assets/brands/amini.png';
import aran from '~/assets/brands/aran.png';
import atmosphera from '~/assets/brands/atmosphera.png';
import binova from '~/assets/brands/binova.png';
import birex from '~/assets/brands/birex.png';
import bonaldo from '~/assets/brands/bonaldo.png';
import cantori from '~/assets/brands/cantori.png';
import ceccotti from '~/assets/brands/ceccotti.png';
import clsx from 'clsx';
import conte from '~/assets/brands/conte.png';
import dedon from '~/assets/brands/dedon.png';
import dienne from '~/assets/brands/dienne.png';
import doimocucine from '~/assets/brands/doimocucine.png';
import doimosalotti from '~/assets/brands/doimosalotti.png';
import edra from '~/assets/brands/edra.png';
import francoferri from '~/assets/brands/francoferri.png';
import kico from '~/assets/brands/kico.png';
import magis from '~/assets/brands/magis.png';
import miton from '~/assets/brands/miton.png';
import mobili from '~/assets/brands/mobili.png';
import modo10 from '~/assets/brands/modo10.png';
import moretticompact from '~/assets/brands/moretticompact.png';
import olivieri from '~/assets/brands/olivieri.png';
import orme from '~/assets/brands/orme.png';
import pianca from '~/assets/brands/pianca.png';
import reflex from '~/assets/brands/reflex.png';
import scab from '~/assets/brands/scab.png';
import sealy from '~/assets/brands/sealy.png';
import stressless from '~/assets/brands/stressless.png';
import talenti from '~/assets/brands/talenti.png';
import tempur from '~/assets/brands/tempur.png';
import adriani_rossi from '~/assets/brands/adriani_rossi.png';
import berloni_bagno from '~/assets/brands/berloni_bagno.png';
import connubia from '~/assets/brands/connubia.png';
import devina_nais from '~/assets/brands/devina_nais.svg';
import instabilelab from '~/assets/brands/instabilelab.png';
import mobilgam from '~/assets/brands/mobilgam.png';
import penta from '~/assets/brands/penta.png';
import prandina from '~/assets/brands/prandina.png';
import ronda_design from '~/assets/brands/ronda_design.png';
import Heading from '../common/heading';
import { useTranslation } from 'react-i18next';

interface BrandsProps {
  className?: string;
  showDescription?: boolean;
}

const Brands: React.FC<BrandsProps> = ({
  className = '',
  showDescription = true,
}) => {
  const { t } = useTranslation('home');
  return (
    <section className={clsx(className)}>
      <div className="base-container !pt-0">
        <div className="grid grid-cols-12 gap-0 gap-y-6">
          <div
            className={clsx(
              'col-span-12 lg:col-span-4 bg-base-100 pt-[100px] pb-6 md:mb-[120px] px-4 md:px-8',
              showDescription ? '' : 'hidden',
            )}
          >
            <Heading className="mb-4 md:mb-6">
              {t('brand.title')}
            </Heading>
            <p className="text-gray-900 leading-7">
              {t('brand.subtitle1')}
            </p>
          </div>
          <div
            className={clsx(
              'md:mb-[120px] flex items-center',
              showDescription ? 'col-span-12 lg:col-span-8' : 'col-span-12',
            )}
          >
            <div
              className={clsx(
                'grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 justify-evenly mb-8 w-full',
              )}
            >
              {BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className={clsx(
                    'flex justify-center items-center ',
                    showDescription ? 'h-[50px]' : 'h-[66px]',
                  )}
                >
                  {brand.logo && (
                    <img className="" src={brand.logo} alt={brand.name} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

type Brand = {
  name: string;
  logo: string | any;
  link?: string;
};

// const BRANDS: Brand[] = [
//   {
//     name: 'AMINI',
//     logo: amini,
//   },
//   {
//     name: 'aran',
//     logo: aran,
//   },
//   {
//     name: 'Binova',
//     logo: binova,
//   },
//   {
//     name: 'atmosphera',
//     logo: atmosphera,
//   },
//   {
//     name: 'BONALDO',
//     logo: bonaldo,
//   },
//   {
//     name: 'Birex',
//     logo: birex,
//   },
//   {
//     name: 'Cantori',
//     logo: cantori,
//   },
//   {
//     name: 'Ceccotti',
//     logo: ceccotti,
//   },
//   {
//     name: 'Conte',
//     logo: conte,
//   },
//   {
//     name: 'Dedon',
//     logo: dedon,
//   },
//   {
//     name: 'Dienne',
//     logo: dienne,
//   },
//   {
//     name: 'Doimocucine',
//     logo: doimocucine,
//   },
//   {
//     name: 'Doimosalotti',
//     logo: doimosalotti,
//   },
//   {
//     name: 'Edra',
//     logo: edra,
//   },
//   {
//     name: 'Francoferri',
//     logo: francoferri,
//   },
//   {
//     name: 'Kico',
//     logo: kico,
//   },
//   {
//     name: 'Magis',
//     logo: magis,
//   },
//   {
//     name: 'Miton',
//     logo: miton,
//   },
//   {
//     name: 'Modo10',
//     logo: modo10,
//   },
//   {
//     name: 'MorettiCompact',
//     logo: moretticompact,
//   },
//   {
//     name: 'Olivieri',
//     logo: olivieri,
//   },
//   {
//     name: 'Orme',
//     logo: orme,
//   },
//   {
//     name: 'Pianca',
//     logo: pianca,
//   },
//   {
//     name: 'Reflex',
//     logo: reflex,
//   },
//   {
//     name: 'Scab',
//     logo: scab,
//   },
//   {
//     name: 'Sealy',
//     logo: sealy,
//   },
//   {
//     name: 'Stressless',
//     logo: stressless,
//   },
//   {
//     name: 'Talenti',
//     logo: talenti,
//   },
//   {
//     name: 'Tempur',
//     logo: tempur,
//   },
//   {
//     name: 'Mobili',
//     logo: mobili,
//   },
// ];

const BRANDS: Brand[] = [
  {
    name: 'Adriani Rossi',
    logo: adriani_rossi,
  },
  {
    name: 'Berloni Bagno',
    logo: berloni_bagno,
  },
  {
    name: 'Binova',
    logo: binova,
  },
  {
    name: 'Birex',
    logo: birex,
  },
  {
    name: 'BONALDO',
    logo: bonaldo,
  },
  {
    name: 'Connubia',
    logo: connubia,
  },
  {
    name: 'Devina Nais',
    logo: devina_nais,
  },
  {
    name: 'Dienne',
    logo: dienne,
  },
  {
    name: 'Doimocucine',
    logo: doimocucine,
  },
  {
    name: 'Doimosalotti',
    logo: doimosalotti,
  },
  {
    name: 'Francoferri',
    logo: francoferri,
  },
  {
    name: 'Instabilelab',
    logo: instabilelab,
  },
  {
    name: 'MorettiCompact',
    logo: moretticompact,
  },
  {
    name: 'Mobilgam',
    logo: mobilgam,
  },
  {
    name: 'Penta',
    logo: penta,
  },
  {
    name: 'Pianca',
    logo: pianca,
  },
  {
    name: 'Prandina',
    logo: prandina,
  },
  {
    name: 'Ronda Design',
    logo: ronda_design,
  },
  {
    name: 'Stressless',
    logo: stressless,
  },
  {
    name: 'Tempur',
    logo: tempur,
  },
];
