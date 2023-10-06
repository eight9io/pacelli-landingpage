/* eslint-disable */
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

interface DetailProps {
    className?: string;
    title: string;
    subTitle: string;
    imgPosition?: 'left' | 'right';
    image: Array<string>;
}

const Detail: React.FC<DetailProps> = ({
    className = '',
    title,
    subTitle,
    image,
    imgPosition = "right",
}) => {
    const { t } = useTranslation('home');

    return (
        <section
            className={clsx(' pt-[30px] lg:pt-[60px] base-container ', className)}
        >
            <h2 className="text-[40px] md:text-[64px] font-semibold leading-[50px] md:leading-[78px] text-primary-950 ">
                {title}
            </h2>
            <div
                className={clsx('grid grid-cols-12  gap-y-8 my-8 md:gap-6 lg:gap-11')}
            >
                <div
                    className={clsx(
                        'col-span-12  lg:col-span-4',
                        imgPosition === 'right'
                            ? 'md:col-span-5 lg:col-span-4'
                            : 'md:col-span-7 lg:col-span-8 ',
                    )}
                >
                    {imgPosition === 'right' ? (
                        <p className="  text-base font-normal leading-7 text-neutral-800 mb-8">
                            {subTitle}
                        </p>
                    ) : (
                        image ?
                            <img
                                src={image[0]}
                                alt="Mission"
                                width={715}
                                height={600}
                                className="w-full h-full"
                            /> : null
                    )}
                </div>
                <div
                    className={clsx(
                        'col-span-12  ',
                        imgPosition === 'right'
                            ? ' md:col-span-7 lg:col-span-8 '
                            : 'md:col-span-5 lg:col-span-4',
                    )}
                >
                    {imgPosition === 'right' ? (
                        image ?
                            <img
                                src={image[0]}
                                alt="Mission"
                                width={715}
                                height={600}
                                className="h-[600px] w-full "
                            /> : null
                    ) : (
                        <p className="  text-base font-normal leading-7 text-neutral-800 mb-8">
                            {subTitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Detail;
