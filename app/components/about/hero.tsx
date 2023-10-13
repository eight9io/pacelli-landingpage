import clsx from 'clsx';
import Carousel from '~/components/common/carousel';

import {useTranslation} from 'react-i18next';
import Link from '~/components/Link';
import arrowRight from '~/assets/icons/arrow-right.svg';
import Quote from '../common/icons/quote';
import {Video} from '@shopify/hydrogen';
// import ReactPlayer from 'react-player/lazy';
import ReactPlayer from 'react-player/youtube';

interface HeroProps {
  className?: string;
}

const VIDEO_SRC = 'https://www.youtube.com/watch?v=L8BzYFjHJDU';

const Hero: React.FC<HeroProps> = ({className = ''}) => {
  return (
    <section className={clsx('overflow-hidden relative', className)}>
      <div className="mb-20 h-[calc(100vh-40px)]">
        <ReactPlayer url={VIDEO_SRC} width="full" height={800} playing />
      </div>
    </section>
  );
};

export default Hero;
