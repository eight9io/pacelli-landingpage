import clsx from 'clsx';
import Carousel from '~/components/common/carousel';

import {useTranslation} from 'react-i18next';
import Link from '~/components/Link';
import arrowRight from '~/assets/icons/arrow-right.svg';
import Quote from '../common/icons/quote';
import {Video} from '@shopify/hydrogen';
import ReactPlayer from 'react-player/lazy';

interface HeroProps {
  className?: string;
}

const VIDEO_SRC = '';

const Hero: React.FC<HeroProps> = ({className = ''}) => {
  return (
    <section className={clsx('overflow-hidden relative', className)}>
      <div className="mb-20 h-[calc(100vh-40px)]">
        {VIDEO_SRC ? (
          <ReactPlayer url={VIDEO_SRC} />
        ) : (
          <img
            src="https://cdn.shopify.com/s/files/1/0816/1971/4346/files/image_about_video_bg.png?v=1695267515"
            alt="About us"
            width={1140}
            height={800}
            className="object-cover w-full h-full"
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
