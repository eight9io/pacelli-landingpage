import Heading from '~/components/common/heading';
import comming_soon from '~/assets/images/image_coming_soon.png';

export default function ComingSoonPage() {
  return (
    <>
      <section className="p-0 bg-secondary">
        <div className="base-container flex flex-col justify-center items-center min-h-screen">
          <img src={comming_soon} alt="pacelli" />
          <Heading className="mb-2 text-white">Prossimamente!!!</Heading>
          <p className="text-center text-gray-400 text-base font-normal leading-7">
            Presto lanceremo il nostro sito web.
          </p>
        </div>
      </section>
    </>
  );
}
