import clsx from 'clsx';

interface HeroProps {
  className?: string;
}

const VIDEO_SRC =
  'https://cdn.shopify.com/videos/c/o/v/59e5273c2f174a02a1326acc0a7c34e7.mp4';

const Hero: React.FC<HeroProps> = ({className = ''}) => {
  return (
    <section
      className={clsx('base-container overflow-hidden relative', className)}
    >
      <div className="mb-20 w-full md:h-[800px]">
        <video
          width="1030"
          height="580"
          controls
          muted
          // autoPlay
          playsInline
          loop
          className="mx-auto h-[800px] w-full"
        >
          <source type="video/mp4" src={VIDEO_SRC} />
        </video>
      </div>
    </section>
  );
};

export default Hero;
