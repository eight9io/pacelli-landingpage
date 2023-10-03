import Facebook from '~/components/common/icons/facebook';
import Instagram from '~/components/common/icons/instagram';
import {Link} from '~/components/Link';
import Logo from '~/components/common/logo';
import clsx from 'clsx';
import Youtube from '~/components/common/icons/youtube';

const FooterSection = () => {
  return (
    <footer className="bg-primary-950">
      <div className="base-container py-0 flex justify-between">
        <div className="grid grid-cols-12 py-16 gap-y-8">
          <div className="col-span-12 md:col-span-3">
            <Logo className="invert-[1] brightness-0" />
          </div>
          <div className="col-span-12 md:col-span-3">
            <ul className="flex flex-col gap-4">
              {footerMenus1.map((menu) => (
                <li key={`footer_${menu.href}`}>
                  <Link to={menu.href} className="uppercase text-white">
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3">
            <ul className="flex flex-col gap-4">
              {footerMenus2.map((menu) => (
                <li key={`footer_${menu.href}`}>
                  <Link to={menu.href} className="uppercase text-white">
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="text-white text-base font-normal">
              CONTACT WITH US
            </div>
            <p className="text-white text-xs md:text-sm font-normal leading-[21px] mt-6">
              Hotline:{' '}
              <Link to="tel:0824948533" className="">
                (0824) 948533
              </Link>
            </p>
            <p className="text-white text-xs md:text-sm font-normal leading-[21px] mt-6">
              Address: Via Volturno, 11, San Salvatore Telesino (BN)
            </p>
          </div>
        </div>
      </div>
      <div className="md:border-t-2 border-t-gray-400">
        <div className="base-container flex flex-col-reverse md:flex-row justify-between py-2 gap-y-2">
          <ul className="text-xs md:text-sm text-white flex">
            {/* © {new Date().getFullYear()},{' '}
              <Link href="/" className="hover:underline">
                Pacelli
              </Link>{' '}
              Powered by{' '}
              <Link href="/" className="hover:underline">
                E9 Digital
              </Link> */}
            {footerMenus3.map((menu) => (
              <Link
                key={menu.href}
                to={menu.href}
                className="text-gray-400 font-normal px-3 leading-[32px] hover:text-white first:pl-0 last:after:!hidden relative after:content-[''] after:absolute after:bg-gray-400 after:w-[1px] after:h-4 after:top-[6px] after:-right-0"
              >
                {menu.text}
              </Link>
            ))}
          </ul>
          <div
            className={clsx(
              'flex gap-3 items-center relative order-0 md:order-1',
            )}
          >
            <Link
              to=""
              className="w-8 h-8 p-2 bg-white rounded-full object-contain"
            >
              <Facebook className="text-secondary w-4 h-4 stroke-secondary" />
            </Link>
            <Link
              to=""
              className="w-8 h-8 p-2 bg-white rounded-full object-contain"
            >
              <Instagram className="text-secondary w-4 h-4 stroke-secondary" />
            </Link>
            <Link
              to=""
              className="w-8 h-8 p-2 bg-white rounded-full object-contain"
            >
              <Youtube className="text-secondary w-4 h-4 " />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

const footerMenus1 = [
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
    text: 'Professional Services',
    href: '/services/professional',
  },
  {
    text: 'Private Services',
    href: '/services/private',
  },
];
const footerMenus2 = [
  {
    text: 'Gallery',
    href: '/gallery',
  },
  {
    text: 'Blog',
    href: '/blog',
  },
  {
    text: 'FAQs',
    href: '/faqs',
  },
  {
    text: 'Contacts',
    href: '/contacts',
  },
];

const footerMenus3 = [
  {
    text: 'Privacy Policy',
    href: '/policy',
  },
  {
    text: 'Terms & Conditions',
    href: '/terms',
  },
  {
    text: 'Cookies Policy',
    href: '/cookies',
  },
];
