import clsx from 'clsx';
import Heading from '../common/heading';
import {Text} from '../Text';
import history from '~/assets/images/image_about_history.png';

interface HistoryProps {
  className?: string;
}

const History: React.FC<HistoryProps> = ({className = ''}) => {
  return (
    <section className={clsx('py-[60px] md:py-[90px]', className)}>
      <div className="base-container py-0">
        <Heading className="mb-6">La nostra storia</Heading>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <img
              src={history}
              alt="History"
              width={500}
              height={870}
              className="object-cover w-full md:h-[870px]"
            />
          </div>
          <div className="col-span-12 md:col-span-7">
            <Text as="p" className="text-gray-900 mb-8 max-w-auto leading-7">
              La progettazione di interni per Pacelli è una testimonianza di
              dedizione e passione che ha attraversato più di tre generazioni.
              Fin dal dopoguerra, questa famiglia ha contribuito in modo
              significativo all&apos;evoluzione di questo settore in continua
              trasformazione. Il capitolo iniziale di questa affascinante storia
              si apre nel lontano 1968, quando il visionario Ivo Pacelli compie
              una mossa audace e rivoluzionaria. Da un&apos;attività di vendita
              che abbracciava una vasta gamma di prodotti, tra cui alimentari e
              mangimi, Ivo decide di concentrarsi su qualcosa di diverso: i
              mobili. Inizialmente, i locali in cui operavano rimasero gli
              stessi, ma il suo spirito intraprendente, unito alla crescente
              richiesta di arredi di qualità, spinse la famiglia Pacelli a
              sognare in grande. Alla fine degli anni &apos;70, il bisogno di
              spazio divenne evidente, e fu in questo momento cruciale che
              nacque la sede &quot;storica&quot; dell&apos;azienda.
              L&apos;edificio consisteva in una struttura in muratura
              sottostante a un grande spazio agibile in prefabbricato, uno dei
              primi di tutta la zona.
            </Text>
            <Text as="p" className="text-gray-900 mb-8 max-w-auto leading-7">
              Questa sede rappresentava l&apos;impegno e la determinazione della
              famiglia Pacelli nel settore dell&apos;arredamento. I risultati di
              tanta dedizione e impegno non si fecero attendere, e appena dieci
              anni dopo il primo ampliamento, l&apos;azienda si trovò nella
              necessità di abbattere nuovamente lo stabile originario per
              costruirne uno nuovo, questa volta con tre piani. Al cuore di
              questa azienda c&apos;è una squadra eccezionale di professionisti
              altamente qualificati, guidati dalla visione e dalla leadership di
              Paolo Pacelli, il figlio di Ivo, che con dedizione e passione
              guida l&apos;azienda da ormai 30 anni. Questo impegno per
              l&apos;eccellenza si traduce in un&apos;offerta senza pari di
              servizi e prodotti per l&apos;arredamento, dalla progettazione di
              interni ed esterni all&apos;arredamento per il bagno, dai prodotti
              tessili all&apos;illuminazione, dall’ oggettistica alla carta da
              parati. La sede storica rappresenta ancora oggi il cuore pulsante
              di questa azienda. Qui, le tradizioni di famiglia vengono
              custodite gelosamente, mentre la passione per l&apos;arredamento
              di alta qualità continua a guidare l&apos;azienda verso nuovi
              orizzonti di successo. In sintesi, la sede storica di Pacelli è
              molto più di un luogo fisico: qui le radici familiari si
              intrecciano con la creatività contemporanea, dove
              l&apos;arredamento di alta qualità è una forma d&apos;arte che si
              evolve costantemente. È il fulcro in cui il passato e il futuro si
              abbracciano, dando vita a un&apos;azienda che incarna
              l&apos;essenza del design senza tempo.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
