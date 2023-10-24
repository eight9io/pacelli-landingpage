import clsx from 'clsx';
import {useState} from 'react';
import ProjectCard from './project-card';
import {useTranslation} from 'react-i18next';
import {Skeleton} from '../Skeleton';
interface ContactProps {
  className?: string;
  projects: any[];
  pageInfo: any;
}

const OwnProjects: React.FC<ContactProps> = (props) => {
  const [projects, setProjects] = useState(props.projects);
  const [pageInfo, setPageInfo] = useState(props.pageInfo);
  const {t, ready, i18n} = useTranslation('gallery');

  const onLoadMore = async () => {
    const data = await fetch(
      `/api/projects?after=${
        pageInfo.endCursor
      }&language=${i18n.language.toUpperCase()}`,
    );
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
      {ready ? (
        <h2 className="text-[40px] md:text-[64px] font-semibold leading-[50px] md:leading-[78px] text-[#142423] lg:w-1/2">
          {t('gallery:title', '1000+ progetti realizzati')}
        </h2>
      ) : (
        <Skeleton count={2} />
      )}
      <div className="grid grid-cols-12 gap-y-8 lg:gap-8 mt-11">
        {projects && projects.length
          ? projects.map((item, index) => (
              <div className="col-span-12 lg:col-span-6" key={item.id}>
                <ProjectCard item={item} />
              </div>
            ))
          : null}
      </div>
      {pageInfo.hasNextPage === true && (
        <div className="text-center">
          <button
            onClick={onLoadMore}
            className={clsx(
              'text-secondary cursor-pointer font-normal my-8 mx-auto text-[24px] md:text-[32px] leading-[48px]  underline',
            )}
          >
            {t('load_more', 'Carica ancora')}
          </button>
        </div>
      )}
    </section>
  );
};

export default OwnProjects;
