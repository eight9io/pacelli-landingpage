import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import project1 from '~/assets/gallery/project-1.png';
import project2 from '~/assets/gallery/project-2.png';
import project3 from '~/assets/gallery/project-3.png';
import CardImg from '../CardImg';
interface ContactProps {
  className?: string;
}
/* eslint-disable */
const mockData = [
  {
    id: 'project-1',
    image: project1,
    name: 'Lakefront Retreat',
    subtitle: 'Nunc cum aliquet sagittis duis ipsum tincidunt sed scelerisque. Viverra tortor, sit risus bibendum faucibus vitae metus, in. Sit id dictum aliquam at cras eu.'
  },
  {
    id: 'project-2',
    image: project2,
    name: 'Lakefront Retreat',
    subtitle: 'Nunc cum aliquet sagittis duis ipsum tincidunt sed scelerisque. Viverra tortor, sit risus bibendum faucibus vitae metus, in. Sit id dictum aliquam at cras eu.'
  },
  {
    id: 'project-3',
    image: project3,
    name: 'Lakefront Retreat',
    subtitle: 'Nunc cum aliquet sagittis duis ipsum tincidunt sed scelerisque. Viverra tortor, sit risus bibendum faucibus vitae metus, in. Sit id dictum aliquam at cras eu.'
  },
  {
    id: 'project-4',
    image: project3,
    name: 'Lakefront Retreat',
    subtitle: 'Nunc cum aliquet sagittis duis ipsum tincidunt sed scelerisque. Viverra tortor, sit risus bibendum faucibus vitae metus, in. Sit id dictum aliquam at cras eu.'
  },
  {
    id: 'project-5',
    image: project3,
    name: 'Lakefront Retreat',
    subtitle: 'Nunc cum aliquet sagittis duis ipsum tincidunt sed scelerisque. Viverra tortor, sit risus bibendum faucibus vitae metus, in. Sit id dictum aliquam at cras eu.'
  },
  {
    id: 'project-6',
    image: project3,
    name: 'Lakefront Retreat',
    subtitle: 'Nunc cum aliquet sagittis duis ipsum tincidunt sed scelerisque. Viverra tortor, sit risus bibendum faucibus vitae metus, in. Sit id dictum aliquam at cras eu.'
  },
]
const OutProjects: React.FC<ContactProps> = ({ className = '' }) => {
  const { t } = useTranslation('home');

  return (
    <section
      className={clsx('  py-24 md:py-32 lg:pt-[90px] base-container mt-12', className)}
    >
      <h2 className="text-[40px] md:text-[64px] font-semibold leading-[50px] md:leading-[78px] text-[#142423] lg:w-1/2">
        Our projects <br />
        100+ <br />
        completed projects
      </h2>
      <div className="grid grid-cols-12 gap-y-8 lg:gap-8 mt-11 ">
        {mockData.map((item, index) => <div className="col-span-12 lg:col-span-6   " key={item.id}>
          <CardImg item={item} />
        </div>)}
      </div>
      <p className=" cursor-pointer text-center text-secondary font-normal my-8  mx-auto text-4xl leading-10  underline">
        Load more
      </p>
    </section>
  );
};

export default OutProjects;
