import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import project1 from '~/assets/gallery/project-1.png';
import project2 from '~/assets/gallery/project-2.png';
import project3 from '~/assets/gallery/project-3.png';
import CardImg from '../CardImg';
import { useState } from 'react';
interface ContactProps {
  className?: string;
  projects: any[];
  pageInfo: any;
}

const PROJECTS_PER_PAGE = 6;
/* eslint-disable */
const OutProjects: React.FC<ContactProps> = ({
  className = '',
  projects,
  pageInfo,
}) => {
  const { t } = useTranslation('home');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalProjects = projects.length;
  const lastProjectIndex = currentPage * PROJECTS_PER_PAGE;
  const firstProjectIndex = 0;

  let pages = [];
  const nextPage = () => {
    if (currentPage === pages.length) return;

    setCurrentPage(currentPage + 1);
  };

  if (totalProjects)
    for (let i = 1; i <= Math.ceil(totalProjects / PROJECTS_PER_PAGE); i++) {
      pages.push(i);
    }
  return (
    <section
      className={clsx(
        ' py-[30px] lg:pt-[90px] base-container mt-12',
        className,
      )}
    >
      <h2 className="text-[40px] md:text-[64px] font-semibold leading-[50px] md:leading-[78px] text-[#142423] lg:w-1/2">
        Our projects <br />
        100+ <br />
        completed projects
      </h2>
      <div className="grid grid-cols-12 gap-y-8 lg:gap-8 mt-11 ">
        {projects
          .slice(firstProjectIndex, lastProjectIndex)
          .map((item, index) => (
            <div className="col-span-12 lg:col-span-6" key={item.id}>
              <CardImg item={item} />
            </div>
          ))}
      </div>
      {pageInfo.hasNextPage === true && (
        <div className="text-center">
          <button
            disabled={currentPage === pages.length}
            onClick={nextPage}
            className={clsx(
              'text-secondary cursor-pointer font-normal my-8 mx-auto text-4xl leading-10 underline',
              {
                hidden: currentPage === pages.length,
                block: currentPage !== pages.length,
              },
            )}
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
};

export default OutProjects;
