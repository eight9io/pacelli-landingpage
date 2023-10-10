import clsx from 'clsx';
import CardImg from '../CardImg';
import {useState} from 'react';
interface ContactProps {
  className?: string;
  projects: any[];
  pageInfo: any;
}

const OwnProjects: React.FC<ContactProps> = (props) => {
  // const {t} = useTranslation('home');
  // const [currentPage, setCurrentPage] = useState<number>(1);

  // const totalProjects = projects.length;
  // const lastProjectIndex = currentPage * PROJECTS_PER_PAGE;
  // const firstProjectIndex = 0;

  // let pages = [];
  // const nextPage = () => {
  //   if (currentPage === pages.length) return;

  //   setCurrentPage(currentPage + 1);
  // };

  // if (totalProjects)
  //   for (let i = 1; i <= Math.ceil(totalProjects / PROJECTS_PER_PAGE); i++) {
  //     pages.push(i);
  //   }

  const [projects, setProjects] = useState(props.projects);
  const [pageInfo, setPageInfo] = useState(props.pageInfo);

  const onLoadMore = async () => {
    const data = await fetch('/api/projects?after=' + pageInfo.endCursor);
    const {projects: newProjects, pageInfo: newPageInfo} =
      (await data.json()) as any;
    setProjects([...projects, ...newProjects]);
    setPageInfo(newPageInfo);
  };

  return (
    <section
      className={clsx(
        ' py-[30px] lg:pt-[90px] base-container mt-12',
        props.className,
      )}
    >
      <h2 className="text-[40px] md:text-[64px] font-semibold leading-[50px] md:leading-[78px] text-[#142423] lg:w-1/2">
        Our projects <br />
        100+ <br />
        completed projects
      </h2>
      <div className="grid grid-cols-12 gap-y-8 lg:gap-8 mt-11 ">
        {projects && projects.length
          ? projects.map((item, index) => (
              <div className="col-span-12 lg:col-span-6" key={item.id}>
                <CardImg item={item} />
              </div>
            ))
          : null}
      </div>
      {pageInfo.hasNextPage === true && (
        <div className="text-center">
          <button
            onClick={onLoadMore}
            className={clsx(
              'text-secondary cursor-pointer font-normal my-8 mx-auto text-4xl leading-10 underline',
            )}
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
};

export default OwnProjects;
