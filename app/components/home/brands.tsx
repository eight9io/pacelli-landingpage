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

interface BrandsProps {
  className?: string;
}

const Brands: React.FC<BrandsProps> = ({className = ''}) => {
  return (
    <section className={clsx(className)}>
      <div className="base-container !pt-0">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 md:col-span-4 bg-base-100 pt-[120px] pb-6 md:mb-[120px] px-4 md:px-8">
            <h2 className="text-gray-900 text-[40px] md:text-[64px] font-semibold leading-[60px] md:leading-[78px] mb-4 md:mb-6">
              Insieme ai migliori Brands
            </h2>
            <p className="text-gray-900 leading-7">
              Siamo orgogliosi di affermare che le Aziende di cui siamo
              rifornitori sono considerate le migliori nel mercato del mobile.
              Aziende orientate alla ricerca di soluzioni moderne e creative e
              attente ai cambiamenti del vivere la casa e l&apos;arredo. <br />
              La qualità, l&apos;innovazione, l&apos;affidabilità e la
              collaborazione sono i principi fondamentali su cui si basa la
              nostra relazione con queste partner eccezionali.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 md:mb-[120px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 justify-evenly md:[&>*:nth-child(29)]:col-start-2 md:pt-[120px]">
              {BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className={clsx('flex justify-center items-center h-[50px]')}
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

const BRANDS: Brand[] = [
  {
    name: 'AMINI',
    logo: amini,
  },
  {
    name: 'aran',
    logo: aran,
  },
  {
    name: 'atmosphera',
    logo: atmosphera,
  },
  {
    name: 'BONALDO',
    logo: bonaldo,
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
    name: 'Cantori',
    logo: cantori,
  },
  {
    name: 'Ceccotti',
    logo: ceccotti,
  },
  {
    name: 'Conte',
    logo: conte,
  },
  {
    name: 'Dedon',
    logo: dedon,
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
    name: 'Edra',
    logo: edra,
  },
  {
    name: 'Francoferri',
    logo: francoferri,
  },
  {
    name: 'Kico',
    logo: kico,
  },
  {
    name: 'Magis',
    logo: magis,
  },
  {
    name: 'Miton',
    logo: miton,
  },
  {
    name: 'Modo10',
    logo: modo10,
  },
  {
    name: 'MorettiCompact',
    logo: moretticompact,
  },
  {
    name: 'Olivieri',
    logo: olivieri,
  },
  {
    name: 'Orme',
    logo: orme,
  },
  {
    name: 'Pianca',
    logo: pianca,
  },
  {
    name: 'Reflex',
    logo: reflex,
  },
  {
    name: 'Scab',
    logo: scab,
  },
  {
    name: 'Sealy',
    logo: sealy,
  },
  {
    name: 'Stressless',
    logo: stressless,
  },
  {
    name: 'Talenti',
    logo: talenti,
  },
  {
    name: 'Tempur',
    logo: tempur,
  },
  {
    name: 'Mobili',
    logo: mobili,
  },
];
