import Link from '~/components/Link';
import clsx from 'clsx';
import Facebook from './icons/facebook';
import Instagram from './icons/instagram';
import Youtube from './icons/youtube';
import Phone from './icons/phone';
import Location from './icons/location';

interface TopbarProps {
  children?: React.ReactNode;
}

const Topbar = ({children}: TopbarProps) => {
  return (
    <div className="hidden md:block bg-gray-100">
      <div className="!py-1 px-4 lg:px-8">
        <div className="flex gap-x-8 gap-y-4 flex-wrap text-sm">
          <Link
            to="tel:0123456789"
            className={clsx(
              'flex gap-3 items-center relative',
              "after:absolute after:content-[''] after:w-[2px] after:h-5 after:-right-4 after:top-1/2 after:-translate-y-1/2 after:bg-neutral-300",
            )}
          >
            <Phone className="w-4 h-4 stroke-secondary" />
            +39 0824/948533
          </Link>
          <Link
            to="/"
            className={clsx(
              'flex gap-3 items-center relative',
              "after:absolute after:content-[''] after:w-[2px] after:h-5 after:-right-4 after:top-1/2 after:-translate-y-1/2 after:bg-neutral-300",
            )}
          >
            <Location className="w-4 h-4 stroke-secondary" />
            Via Volturno, 11, San Salvatore Telesino (BN)
          </Link>
          <div
            className={clsx(
              'flex gap-3 items-center relative',
              "after:absolute after:content-[''] after:w-[2px] after:h-5 after:-right-4 after:top-1/2 after:-translate-y-1/2 after:bg-neutral-300",
            )}
          >
            Lunedì-Venerdì: 9:00 - 20:30 Sabato: 10:00 - 20:00
          </div>
          <div className={clsx('flex gap-3 items-center relative')}>
            <Link
              to="https://www.facebook.com/arredamentipacelli/?locale=it_IT"
              className="w-8 h-8 p-2 bg-transparent rounded-full object-contain"
            >
              <Facebook className="text-secondary w-4 h-4 stroke-secondary" />
            </Link>
            <Link
              to="https://www.instagram.com/pacelliarredamenti"
              className="w-8 h-8 p-2 bg-transparent rounded-full object-contain"
            >
              <Instagram className="text-secondary w-4 h-4 stroke-secondary" />
            </Link>
            <Link
              to="https://www.youtube.com/@arredamentipacelli4456/featured"
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
