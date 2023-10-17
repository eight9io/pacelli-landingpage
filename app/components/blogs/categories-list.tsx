import {Blog} from '@shopify/hydrogen/storefront-api-types';
import Heading from '../common/heading';
import Link from '../Link';
import clsx from 'clsx';
import {useTranslation} from 'react-i18next';

interface CategoriesListProps {
  className?: string;
  blogs?: Blog[];
}

const CategoriesList: React.FC<CategoriesListProps> = ({
  className = '',
  blogs,
}) => {
  const {t} = useTranslation('blogs');
  return (
    <div className={clsx(className)}>
      <Heading variant="h4" className="text-primary mb-6 !font-normal">
        {t('categories')}
      </Heading>
      <ul className="flex flex-col gap-6">
        {blogs?.map((blog) => (
          <Link
            key={blog.id}
            to={`/blogs/${blog.handle}`}
            className="text-gray-900 hover:font-semibold border-b py-2 whitespace-pre"
          >
            {blog.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
