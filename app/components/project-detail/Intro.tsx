import clsx from 'clsx';

interface IntroProps {
  className?: string;
  title: string;
  excerpt: string;
  client: string;
  imageCover: Array<string>;
}

const Intro: React.FC<IntroProps> = ({
  className = '',
  title,
  excerpt,
  client,
  imageCover,
}) => {
  return (
    <section
      className={clsx(' md:py-24 lg:py-[90px] base-container ', className)}
    >
      <h2 className="text-[40px] md:text-[64px] font-semibold leading-[50px] md:leading-[78px] text-primary-950 my-12 lg:mb-[138px]">
        {title}
      </h2>
      <div className="grid grid-cols-12 md:gap-6 lg:gap-11 gap-y-8">
        <div className="col-span-12 md:col-span-5 lg:col-span-3  flex flex-col justify-end">
          <div>
            <p className="text-base font-normal leading-7 text-neutral-800 mb-8">
              {excerpt}
            </p>
            {client ? (
              <>
                <p className="text-base font-normal leading-7 text-neutral-600">
                  Client
                </p>
                <h3 className="text-secondary-900 text-[40px]  leading-[50px]">
                  {client}
                </h3>
              </>
            ) : null}
          </div>
        </div>
        {imageCover && imageCover.length > 0 && (
          <div className="col-span-12 md:col-span-7 lg:col-span-9 space-y-6">
            <img
              src={imageCover[0]}
              alt="Mission"
              width={927}
              height={600}
              className="h-[600px] object-cover"
            />
          </div>
        )}
      </div>
      <div className="grid grid-cols-12 md:gap-6 lg:gap-8 gap-y-8 py-14  border-b  border-neutral-300">
        <div className="col-span-12 md:col-span-6  flex flex-col justify-end">
          {imageCover && imageCover.length > 1 && (
            <img
              src={imageCover[1]}
              alt="Mission"
              width={607}
              height={350}
              className="h-[350px] object-cover"
            />
          )}
        </div>
        <div className="col-span-12 md:col-span-6 space-y-6">
          {imageCover && imageCover.length > 2 && (
            <img
              src={imageCover[2]}
              alt="Mission"
              width={607}
              height={600}
              className="h-[600px] object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
