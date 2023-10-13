import Heading from '~/components/common/heading';
import comming_soon from '~/assets/images/image_coming_soon.png';
import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

export function Layout(props: Props) {
  return (
    <section className="p-0 bg-secondary">
      <div className="base-container flex flex-col justify-center items-center min-h-screen">
        <img src={comming_soon} className="mb-8" alt="Coming soon" />
        <Heading className="text-white mb-2">Coming soon!!!</Heading>
        <p className="text-center text-gray-400 text-base font-normal leading-7">
          We will soon be launching our website.
        </p>
      </div>
    </section>
  );
}

export default Layout;
