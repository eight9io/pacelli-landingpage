import clsx from 'clsx';
import Heading from '../common/heading';

interface StrongPointProps {
  className?: string;
}

const StrongPoint: React.FC<StrongPointProps> = ({className = ''}) => {
  return (
    <section className={clsx('bg-gray-100 py-[90px]', className)}>
      <div className="base-container">
        <Heading className="mb-8">Punti di forza</Heading>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <p>
              Il nostro successo è alimentato da tre pilastri fondamentali: una
              vasta selezione di prodotti selezionati da aziende di alta
              qualità, una costante attenzione alla precisione e un forte
              impegno per la fiducia e la trasparenza.
            </p>
            <div className="grid grid-cols-2 pt-8">
              <div className="col-span-2 md:col-span-1">
                <Item
                  count={1}
                  title="Consegna ad ogni costo"
                  content="Consegna a qualsiasi piano, montaggio e installazione professionale"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Item
                  count={2}
                  title="Brand esclusivi"
                  content="Siamo i rappresentanti ufficiali di molti produttori di altissima qualità."
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Item
                  count={3}
                  title="Garanzia"
                  content="Sostituzione pezzi immediata in caso di malfunzionamento o difettosità dei prodotti"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Item
                  count={4}
                  title="Assistenza post-vendita"
                  content="Facciamo assistenza diretta con sistemazioni specialistiche tramite fabbri, falegnami ed ebanisti esperti, anche a distanza di anni"
                />
              </div>
              <div className="col-span-2 md:col-span-1 hidden md:block">
                <div className="pt-8 pb-6 border-t"></div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <Item
                  count={5}
                  title="50+ anni sul mercato del mobile"
                  content="Pacelli è un simbolo di affidabilità e supporto al Cliente anche dopo anni, garantendo assistenza e supporto continuo con i professionisti interni."
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0816/1971/4346/files/image_about_strongpoint.png?v=1695265674"
              alt="Mission"
              width={500}
              height={640}
              className="h-[640px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

type ItemProps = {
  count: number;
  title: string;
  content: string;
};

const Item: React.FC<ItemProps> = ({count, title, content}) => {
  return (
    <div className="pt-8 pb-4 md:pb-6 md:border-t">
      <Heading
        variant="h4"
        className="mb-1 !text-[22px] md:!text-2xl text-secondary flex items-center gap-2"
      >
        <span className="w-[38px] h-[38px] bg-secondary text-white flex justify-center items-center">
          {count}
        </span>
        {title}
      </Heading>
      <p className="text-gray-900 text-base font-normal leading-7">{content}</p>
    </div>
  );
};

export default StrongPoint;
