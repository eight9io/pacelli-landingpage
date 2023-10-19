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
import {useTranslation} from 'react-i18next';

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

    // if (
    //   pathname === '/services/professional' ||
    //   pathname === '/services/private'
    // )
    //   setMobileMenuOpen(false);
  }, [scrollPosition, pathname, isSticky]);

  const isMenuItemActive = (href: string) => {
    const {pathname: path} = new URL('https://x' + href);

    return pathname?.startsWith(path);
  };

  const onToggleSubMenu = (e: any) => {
    e.preventDefault();
    // e.stopPropagation();
    const target = e.target;
    target.closest('ul')?.querySelector('.submenu')?.classList.toggle('hidden');
  };
  const {t} = useTranslation('common');
  return (
    <header
      className={clsx(
        'bg-transparent inset-x-0 top-0 z-50 transition-all duration-200 ',
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
          <Link
            to="/"
            className="ml-5 inline-flex items-center justify-center rounded-md text-gray-700"
          >
            <span className="relative inline-block">
              <Link to={'/'}>
                <img src={home} alt="menu" width={24} height={24} />
              </Link>
            </span>
          </Link>
          <button
            type="button"
            className="ml-5 inline-flex items-center justify-center rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
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
              <span className="text-white">{t('header.close')}</span>
              <XMarkIcon stroke="#fff" className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex relative mt-4">
              <ul className="space-y-2 md:space-y-4 xs:py-6 w-full md:w-1/2 flex-col md:block">
                {mainMenuItems.map(({text, href, items}) => (
                  <li key={`main-${href}-${text}`}>
                    {href ? (
                      <Link
                        className={clsx(
                          'flex justify-between items-center md:block rounded-none box-border pt-1 pb-1 md:pt-4 md:pb-2 text-[22px] md:text-[40px] leading-8 text-white border-b border-b-transparent hover:border-b-slate-400 ',
                          {'cursor-default': href === '#'},
                          isMenuItemActive(href) &&
                            'text-white border-b-slate-400',
                          'peer hover:[&+div]:block max-w-[395px]',
                        )}
                        to={href}
                        onClick={(event) => {
                          if (href === '#') {
                            event.preventDefault();
                          }
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t(text)}
                        {items && items.length ? (
                          <ChevronDownIcon
                            className="stroke-white w-6 h-6 md:!hidden"
                            onClick={onToggleSubMenu}
                          />
                        ) : undefined}
                      </Link>
                    ) : (
                      <Link
                        className={clsx(
                          'flex justify-between items-center md:block rounded-none box-border pt-1 pb-1 md:pt-4 md:pb-2 text-[22px] md:text-[40px] leading-8 text-white border-b border-b-transparent hover:border-b-slate-400 ',
                          'peer hover:[&+div]:block max-w-[395px] w-[100%]',
                        )}
                        to="#"
                        key={`main-${href}-${text}`}
                        onClick={onToggleSubMenu}
                      >
                        {t(text)}
                        {items && items.length ? (
                          <ChevronDownIcon className="stroke-white w-6 h-6 md:!hidden" />
                        ) : undefined}
                      </Link>
                    )}

                    {items && items.length && (
                      <div className="flex-col md:absolute h-full top-0 left-[395px] hidden md:peer-hover:!flex pl-4 md:pl-0 submenu">
                        {items.map(({text, href}) => {
                          return href ? (
                            <Link
                              className={clsx(
                                'block rounded-none box-border pt-1 pb-1 text-base md:pt-4 md:pb-2 xs:text-2xl md:text-[32px] leading-7 text-white border-b border-b-transparent hover:border-b-slate-400 max-w-[395px]',
                                isMenuItemActive(href) &&
                                  'text-white border-b-slate-400',
                              )}
                              key={`${href}-${text}`}
                              to={href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                              }}
                            >
                              {t(text)}
                            </Link>
                          ) : (
                            <span
                              className={clsx(
                                'block rounded-none box-border pt-2 pb-1 text-base md:pt-4 md:pb-2 xs:text-2xl md:text-[32px] leading-7 text-white border-b border-b-transparent hover:border-b-slate-400 max-w-[395px]',
                              )}
                              key={`${href}-${text}`}
                            >
                              {t(text)}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-y-4 flex-col text-xs text-white border-t border-t-gray-500 md:bottom-10 pt-2 md:pt-6 md:hidden w-[calc(100%-32px)]">
              <Link
                to="tel:0123456789"
                externalLink
                className={clsx(
                  'flex gap-3 items-center relative',
                  "after:absolute after:content-[''] after:w-[2px] after:h-5",
                )}
              >
                <Phone className="w-4 h-4 stroke-white invert brightness-0" />
                (0824) 948533
              </Link>
              <Link
                externalLink
                to="https://www.google.com/maps/place/Via+Volturno,+11,+82030+San+Salvatore+Telesino+BN,+%C3%9D/@41.2338572,14.4944365,17z/data=!3m1!4b1!4m6!3m5!1s0x133a449f754d3625:0xe78f82b5f51c1467!8m2!3d41.2338532!4d14.4970114!16s%2Fg%2F11c5m20g6r?hl=vi-VN&entry=ttu"
                target="_blank"
                className={clsx(
                  'flex gap-3 items-center relative',
                  "after:absolute after:content-[''] after:w-[2px] after:h-5",
                )}
              >
                <Location className="w-4 h-4 stroke-white" />
                {t('contacts.address.address')}
              </Link>
              <div
                className={clsx(
                  'flex gap-3 items-center relative',
                  "after:absolute after:content-[''] after:w-[2px] after:h-5",
                )}
              >
                {t('contacts.open.open')}
              </div>
              <div className={clsx('flex gap-3 items-center relative')}>
                <Link
                  externalLink
                  to="https://www.facebook.com/arredamentipacelli/?locale=it_IT"
                  target="_blank"
                  className="w-8 h-8 p-2 bg-secondary rounded-full object-contain"
                >
                  <Facebook className="w-4 h-4 stroke-white invert brightness-0" />
                </Link>
                <Link
                  externalLink
                  to="https://www.instagram.com/pacelliarredamenti"
                  target="_blank"
                  className="w-8 h-8 p-2 bg-secondary rounded-full object-contain"
                >
                  <Instagram className="w-4 h-4 stroke-white invert brightness-0" />
                </Link>
                <Link
                  externalLink
                  to="https://www.youtube.com/@arredamentipacelli4456/featured"
                  target="_blank"
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
  href?: string;
  items?: MenuItem[];
}

const mainMenuItems: MenuItem[] = [
  {
    text: 'menu.about',
    href: '/about',
  },
  {
    text: 'menu.showroom',
    href: '/showroom',
  },
  {
    text: 'menu.brand',
    href: '/brand',
  },
  {
    text: 'menu.services',
    items: [
      {
        text: 'menu.services_professional',
        href: '/services/professional',
      },
      {
        text: 'menu.services_private',
        href: '/services/private',
      },
    ],
  },
  {
    text: 'menu.blog',
    href: '/blogs',
  },
  {
    text: 'menu.gallery',
    href: '/gallery',
  },
  {
    text: 'menu.contact_us',
    href: '/contact',
  },
  {
    text: 'menu.faqs',
    href: '/faqs',
  },
];
