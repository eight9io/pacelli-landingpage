import FooterSection from './footer';
import {HeaderSection} from '~/components/layouts/header';
import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

export function Layout(props: Props) {
  return (
    <>
      <HeaderSection />
      <main className="md:pt-[40px] min-h-screen">{props.children}</main>
      <FooterSection />
    </>
  );
}

export default Layout;
