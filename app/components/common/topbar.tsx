import Link from '~/components/Link';
import clsx from 'clsx';
import Facebook from './icons/facebook';
import Instagram from './icons/instagram';
import Youtube from './icons/youtube';
import Phone from './icons/phone';
import Location from './icons/location';
import {useTranslation} from 'react-i18next';

interface TopbarProps {
  children?: React.ReactNode;
}

const Topbar = ({children}: TopbarProps) => {
  const {t} = useTranslation('common');
  return (
    <div className="hidden md:block bg-gray-100">
      <div className="!py-1 px-4 lg:px-8">
        <div className="flex gap-x-8 gap-y-4 flex-wrap text-sm">
          <Link
            to="tel:0123456789"
            externalLink
            className={clsx(
              'flex gap-3 items-center relative',
              "after:absolute after:content-[''] after:w-[2px] after:h-5 after:-right-4 after:top-1/2 after:-translate-y-1/2 after:bg-neutral-300",
            )}
          >
            <Phone className="w-4 h-4 stroke-secondary" />
            +39 0824/948533
          </Link>
          <Link
            to="https://www.google.com/maps/place/Via+Volturno,+11,+82030+San+Salvatore+Telesino+BN,+%C3%9D/@41.2338572,14.4944365,17z/data=!3m1!4b1!4m6!3m5!1s0x133a449f754d3625:0xe78f82b5f51c1467!8m2!3d41.2338532!4d14.4970114!16s%2Fg%2F11c5m20g6r?hl=vi-VN&entry=ttu"
            target="_blank"
            externalLink
            className={clsx(
              'flex gap-3 items-center relative',
              "after:absolute after:content-[''] after:w-[2px] after:h-5 after:-right-4 after:top-1/2 after:-translate-y-1/2 after:bg-neutral-300",
            )}
          >
            <Location className="w-4 h-4 stroke-secondary" />
            {t(
              'contacts.address.address',
              'Via Volturno, 11, San Salvatore Telesino (BN)',
            )}
          </Link>
          <div
            className={clsx(
              'flex gap-3 items-center relative',
              "after:absolute after:content-[''] after:w-[2px] after:h-5 after:-right-4 after:top-1/2 after:-translate-y-1/2 after:bg-neutral-300",
            )}
          >
            {t(
              'contacts.open.open',
              'Lunedì-Venerdì: 9:00 - 20:30 Sabato: 10:00 - 20:00',
            )}
          </div>
          <div className={clsx('flex gap-3 items-center relative')}>
            <Link
              externalLink
              to="https://www.facebook.com/arredamentipacelli/?locale=it_IT"
              target="_blank"
              className="w-8 h-8 p-2 bg-transparent rounded-full object-contain"
            >
              <Facebook className="text-secondary w-4 h-4 stroke-secondary" />
            </Link>
            <Link
              externalLink
              to="https://www.instagram.com/pacelliarredamenti"
              target="_blank"
              className="w-8 h-8 p-2 bg-transparent rounded-full object-contain"
            >
              <Instagram className="text-secondary w-4 h-4 stroke-secondary" />
            </Link>
            <Link
              externalLink
              to="https://www.youtube.com/@arredamentipacelli4456/featured"
              target="_blank"
              className="w-8 h-8 p-2 bg-transparent rounded-full object-contain"
            >
              <Youtube className="text-secondary w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
