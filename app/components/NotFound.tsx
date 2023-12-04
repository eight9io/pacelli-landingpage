import {Button} from './Button';
import {PageHeader, Text} from './Text';
import background from '~/assets/images/image_background_notfound.png';
import Heading from './common/heading';
import Link from './Link';
import clsx from 'clsx';
import {ArrowLeftIcon} from '@heroicons/react/24/outline';

export function NotFound({type = 'page'}: {type?: string}) {
  return (
    <section className="relative pt-24 min-h-screen">
      <img
        src={background}
        alt="Not found"
        className="absolute inset-0 top-20 w-screen h-[calc(100%-80px)] object-cover object-center"
      />
      <div className="absolute w-full md:w-[500px] max-w-[500px] top-3/4 md:top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <Heading
          variant="h2"
          className="text-white text-xl md:!text-2xl font-bold md:!leading-9 mb-2"
        >
          I&rsquo;m sorry...! The page couldn&apos;t be found.
        </Heading>
        <p className="!text-center text-white text-base font-normal leading-7">
          The page you are looking for may be temporarily
          <br /> removed or does not exist.
        </p>
        <div className="flex justify-center">
          <Link
            to="/"
            className={clsx(
              'uppercase btn btn-secondary bg-white text-secondary rounded-none mt-6 hover:bg-white hover:text-secondary flex gap-2 w-[224px]',
            )}
          >
            <ArrowLeftIcon className="w-6 h-6 fill-secodnary" />
            back to home page
          </Link>
        </div>
      </div>
    </section>
  );
}
