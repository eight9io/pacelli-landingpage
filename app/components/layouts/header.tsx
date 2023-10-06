import {useEffect, useRef, useState} from 'react';

import {Dialog} from '@headlessui/react';
import {Link} from '~/components/Link';
import Logo from '~/components/common/logo';
import Topbar from '~/components/common/topbar';
import {ChevronDownIcon, XMarkIcon} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import home from '~/assets/icons/home.svg';
import menu from '~/assets/icons/menu.svg';
import useScrollPosition from '~/hooks/useScrollPosition';
import LocaleSwitcher from '~/components/common/languages-selector';
import {useLocation} from '@remix-run/react';
import Phone from '../common/icons/phone';
import Facebook from '../common/icons/facebook';
import Instagram from '../common/icons/instagram';
import Youtube from '../common/icons/youtube';
import Location from '../common/icons/location';

const STICKY_OFFSET = 0;

export function HeaderSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {pathname} = useLocation();
  const subMenuRef = useRef<HTMLDivElement>(null);

  const scrollPosition = useScrollPosition();
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    if (!isSticky && scrollPosition > STICKY_OFFSET) setIsSticky(true);
    else if (isSticky && scrollPosition <= STICKY_OFFSET) setIsSticky(false);

    if (
      pathname === '/services/professional' ||
      pathname === '/services/private'
    )
      setMobileMenuOpen(false);
  }, [scrollPosition, pathname]);

  const isMenuItemActive = (href: string) => {
    const {pathname: path} = new URL('https://x' + href);

    return pathname?.startsWith(path);
  };

  const onToggleSubMenu = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target;
    target.closest('ul')?.querySelector('.submenu')?.classList.toggle('hidden');
  };
  return (
    <header
      className={clsx(
        'bg-transparent inset-x-0 top-0 z-10 transition-all duration-200 ',
        isSticky ? 'fixed bg-white shadow-lg' : 'absolute',
      )}
    >
      <Topbar />
      <nav
        className="flex items-center justify-between p-4 lg:px-8 "
        aria-label="Global"
        id="nav-header"
      >
        <div className="flex lg:flex-1">
          <Logo className="w-[95px] h-[30px] md:w-auto md:h-auto" />
        </div>

        <div className="flex flex-1 justify-end">
          <LocaleSwitcher showLabel={false} />
          <button
            type="button"
            className="ml-5 inline-flex items-center justify-center rounded-md text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <span className="relative inline-block">
              <img src={home} alt="menu" width={24} height={24} />
            </span>
          </button>
          <button
            type="button"
            className="ml-5 inline-flex items-center justify-center rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <span className="relative inline-block">
              <img src={menu} alt="menu" width={24} height={24} />
            </span>
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className=""
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-[9999]" />
        <Dialog.Panel className="fixed z-[9999] inset-0 w-full overflow-y-auto bg-primary p-4 md:pt-10 md:p-[96px] sm:max-w-screen sm:ring-1 sm:ring-gray-900/10">
          <div className="flow-root relative px-0">
            <button
              type="button"
              className="absolute z-50 rounded-md text-gray-700 flex items-center gap-2 right-0 md:right-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-white">Close</span>
              <XMarkIcon stroke="#fff" className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex relative mt-4">
              <ul className="space-y-4 py-6 w-full md:w-1/2 flex-col md:block">
                {mainMenuItems.map(({text, href, items}) => (
                  <li key={href}>
                    <Link
                      className={clsx(
                        'flex justify-between items-center md:block rounded-none box-border pt-2 pb-1 md:pt-4 md:pb-2 text-[32px] md:text-[40px] leading-8 text-white border-b border-b-transparent hover:border-b-slate-400 ',
                        isMenuItemActive(href) &&
                          'text-white border-b-slate-400',
                        'peer hover:[&+div]:block max-w-[395px]',
                      )}
                      key={href}
                      to={href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                    >
                      {text}
                      {items && items.length ? (
                        <ChevronDownIcon
                          className="stroke-white w-6 h-6 md:!hidden"
                          onClick={onToggleSubMenu}
                        />
                      ) : undefined}
                    </Link>
                    {items && items.length && (
                      <div className="hidden flex-col md:absolute h-full top-0 left-[395px] md:hidden md:peer-hover:!flex pl-4 md:pl-0 submenu">
                        {items.map(({text, href}) => (
                          <Link
                            className={clsx(
                              'block rounded-none box-border pt-2 pb-1 md:pt-4 md:pb-2 text-2xl md:text-[32px] leading-7 text-white border-b border-b-transparent hover:border-b-slate-400 max-w-[395px]',
                              isMenuItemActive(href) &&
                                'text-white border-b-slate-400',
                            )}
                            key={href}
                            to={href}
                          >
                            {text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-y-4 flex-col text-xs text-white border-t border-t-gray-500 fixed bottom-10 pt-6 md:hidden w-[calc(100%-32px)]">
              <Link
                to="tel:0123456789"
                className={clsx(
                  'flex gap-3 items-center relative',
                  "after:absolute after:content-[''] after:w-[2px] after:h-5",
                )}
              >
                <Phone className="w-4 h-4 stroke-white invert brightness-0" />
                (0824) 948533
              </Link>
              <Link
                to="/"
                className={clsx(
                  'flex gap-3 items-center relative',
                  "after:absolute after:content-[''] after:w-[2px] after:h-5",
                )}
              >
                <Location className="w-4 h-4 stroke-white" />
                Via Volturno, 11, San Salvatore Telesino (BN)
              </Link>
              <div
                className={clsx(
                  'flex gap-3 items-center relative',
                  "after:absolute after:content-[''] after:w-[2px] after:h-5",
                )}
              >
                Lunedì-Venerdì: 9:00 - 20:30 Sabato: 10:00 - 20:00
              </div>
              <div className={clsx('flex gap-3 items-center relative')}>
                <Link
                  to=""
                  className="w-8 h-8 p-2 bg-secondary rounded-full object-contain"
                >
                  <Facebook className="w-4 h-4 stroke-white invert brightness-0" />
                </Link>
                <Link
                  to=""
                  className="w-8 h-8 p-2 bg-secondary rounded-full object-contain"
                >
                  <Instagram className=" w-4 h-4 stroke-white invert brightness-0" />
                </Link>
                <Link
                  to=""
                  className="w-8 h-8 p-2 bg-secondary rounded-full object-contain"
                >
                  <Youtube className="text-white w-4 h-4 invert brightness-0" />
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

interface MenuItem {
  text: string;
  href: string;
  items?: MenuItem[];
}

const mainMenuItems: MenuItem[] = [
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Showroom',
    href: '/showroom',
  },
  {
    text: 'Brands',
    href: '/brand',
  },
  {
    text: 'Services',
    href: '/services',
    items: [
      {
        text: 'Professional services',
        href: '/services/professional',
      },
      {
        text: 'Private services',
        href: '/services/private',
      },
    ],
  },
  {
    text: 'Blogs',
    href: '/blogs',
  },
  {
    text: 'Gallery',
    href: '/gallery',
  },
  {
    text: 'Contact us',
    href: '/contact',
  },
  {
    text: 'FAQs',
    href: '/faqs',
  },
];
