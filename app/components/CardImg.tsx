import React from 'react'
import { Button } from './Button';
import ArrowRight from '~/components/common/icons/arrow-right';
/* eslint-disable */
interface ICard {
    item: {
        id: string;
        image: string;
        name: string;
        subtitle: string;

    }

}
const CardImg = ({ item }: ICard) => {
    return (
        <div className=" overflow-hidden shadow-lg">
            <img className="w-full" src={item.image} alt={item.name} />
            <div className="px-8 py-5">
                <h3 className="text-primary text-[40px] font-semibold leading-[50px]">
                    {item.name}
                </h3>
                <p className=" text-gray-900 text-base font-normal leading-7 mt-3">
                    {item.subtitle}
                </p>
                <Button
                    className="uppercase mt-8 flex gap-3  bg-secondary-900 font-bold text-center py-2.5 px-4 text-white my-4 hover:bg-secondary-800  "
                    size="md"
                >
                    VIEW more
                    <ArrowRight className="text-secondary w-5 h-5 stroke-secondary origin-center stroke-2" />
                </Button>
            </div>

        </div>
    )
}

export default CardImg
