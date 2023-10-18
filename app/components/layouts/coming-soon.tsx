import Heading from '~/components/common/heading';
import comming_soon from '~/assets/images/image_coming_soon.png';
import logo from '~/assets/images/logo-4x.png';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';


interface Props {
  children: ReactNode;
}

export function Layout(props: Props) {
  const { t } = useTranslation('common');
  return (
    <section className="p-0 bg-white">
      <div className="base-container flex flex-col justify-center items-center min-h-screen">
        <img
          src={logo}
          className="mb-8 md:w-[500px]"
          alt="Coming soon"
          width={608}
        />
        <Heading className="text-primary mb-2 !text-[32px] md:!text-[40px] font-semibold">
          {t('coming_soon.title')}
        </Heading>
        <p className="text-center text-gray-600 text-base font-normal leading-7">
          {t('coming_soon.desc')}
        </p>
      </div>
    </section>
  );
}

export default Layout;
