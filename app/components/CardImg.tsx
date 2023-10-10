import ArrowRight from '~/components/common/icons/arrow-right';
import Link from './Link';

interface ICard {
  item: {
    id: string;
    title: string;
    description: string;
    cover: string[];
    handle: string;
  };
}
const CardImg = ({item}: ICard) => {
  return (
    <div className=" overflow-hidden shadow-lg h-full">
      <img
        className="w-full h-[225px] md:h-[400px] object-cover"
        src={item.cover && item.cover.length ? item.cover[0] : ''}
        alt={item.title}
      />

      <div className="px-8 py-5">
        <h3 className="text-primary text-[40px] line-clamp-1 font-semibold leading-[50px]">
          {item.title}
        </h3>
        <p className=" text-gray-900 text-base font-normal line-clamp-3 leading-7 mt-3">
          {item.description}
        </p>
        <Link
          className="uppercase mt-8 inline-flex gap-3 bg-secondary-900 font-bold text-center py-2.5 px-4 text-white my-4 hover:bg-secondary-800  "
          to={`/project/${item.handle}`}
        >
          view more
          <ArrowRight className="text-secondary w-5 h-5 stroke-secondary origin-center stroke-2" />
        </Link>
      </div>
    </div>
  );
};

export default CardImg;
