import clsx from 'clsx';
import Heading from '../common/heading';
import {Text} from '../Text';
import history from '~/assets/images/image_about_history.png';
import {useTranslation} from 'react-i18next';

interface HistoryProps {
  className?: string;
}

const History: React.FC<HistoryProps> = ({className = ''}) => {
  const {t} = useTranslation('about');
  return (
    <section className={clsx('py-[60px] md:py-[90px]', className)}>
      <div className="base-container py-0">
        <Heading className="mb-6">{t('about:history.title')}</Heading>
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
              {t(
                'about:history.description1',
                "Interior design for Pacelli is a testament to dedication and passion that has spanned more than three generations. Since the post-war period, this family has contributed significantly to the evolution of this ever-changing sector. The initial chapter of this fascinating story opens way back in 1968, when the visionary Ivo Pacelli makes a bold and revolutionary move. From a sales business that spanned a wide range of products, including food and feed, Ivo decided to focus on something different: furniture. Initially, the premises in which they operated remained the same, but his enterprising spirit, combined with the growing demand for quality furnishings, pushed the Pacelli family to dream big. At the end of the 1970s, the need for space became evident, and it was at this crucial moment that the company's historic headquarters was born. The building consisted of a masonry structure beneath a large prefabricated usable space, one of the first in the entire area.",
              )}
            </Text>
            <Text as="p" className="text-gray-900 mb-8 max-w-auto leading-7">
              {t(
                'about:history.description2',
                "This headquarters represented the commitment and determination of the Pacelli family in the furniture sector. The results of such dedication and commitment were not long in coming, and just ten years after the first expansion, the company found itself having to demolish the original building again to build a new one, this time with three floors. At the heart of this company is an exceptional team of highly qualified professionals, guided by the vision and leadership of Paolo Pacelli, Ivo's son, who has led the company with dedication and passion for 30 years now. This commitment to excellence translates into an unparalleled offering of furnishing services and products, from interior and exterior design to bathroom furnishings, from textile products to lighting, from objects to wallpaper . The historic headquarters still represents the beating heart of this company today. Here, family traditions are jealously guarded, while the passion for high-quality furniture continues to guide the company towards new horizons of success. In summary, Pacelli's historic headquarters is much more than a physical place: here family roots are intertwined with contemporary creativity, where high-quality furniture is an art form that constantly evolves. It is the hub where the past and future embrace each other, creating a company that embodies the essence of timeless design.",
              )}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
