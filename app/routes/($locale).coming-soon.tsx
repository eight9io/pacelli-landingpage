import Heading from '~/components/common/heading';
import logo from '~/assets/images/logo-4x.png';

export default function ComingSoonPage() {
  return (
    <>
      <section className="p-0 bg-secondary">
        <div className="base-container flex flex-col justify-center items-center min-h-screen">
          <img
            src={logo}
            className="mb-8 md:w-[500px]"
            alt="Coming soon"
            width={608}
          />
          <Heading className="text-primary mb-2 !text-[32px] md:!text-[40px] font-semibold">
            Prossimamente!!!
          </Heading>
          <p className="text-center text-gray-600 text-base font-normal leading-7">
            Presto lanceremo il nostro sito web.
          </p>
        </div>
      </section>
    </>
  );
}
