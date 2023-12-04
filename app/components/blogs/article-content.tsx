import {Article} from '@shopify/hydrogen/storefront-api-types';
import HTMLContent from './html-content';
import Heading from '../common/heading';
import dayjs from 'dayjs';
import Tag from '~/components/common/icons/tag';
import Share from '../common/icons/share';
import {FacebookShareButton} from 'react-share';
import {useLoaderData, useNavigate} from '@remix-run/react';
import arrowRight from '~/assets/icons/arrow-right.svg';
import {Button} from '~/components/snippets';
import {useTranslation} from 'react-i18next';

interface ArticleContentProps {
  className?: string;
  article: Article;
}

const ArticleContent: React.FC<ArticleContentProps> = ({article}) => {
  const {currentUrl} = useLoaderData();
  const {t} = useTranslation('common');
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <article>
        <div className="flex flex-wrap justify-start gap-8 items-center mb-6">
          <span className="text-gray-400 block text-sm uppercase">
            {dayjs(article?.publishedAt).format('MMMM D, YYYY')}
          </span>
          {article.blog?.title ? (
            <span className="text-gray-400 flex text-sm uppercase items-center gap-2">
              <Tag className="text-gray-400" />
              {article.blog?.title}
            </span>
          ) : null}
          <FacebookShareButton url={currentUrl || ''}>
            <span className="text-gray-400 flex text-sm uppercase items-center gap-2">
              <Share className="text-gray-400 w-4 h-4 " />
              {t('button.share', 'CONDIVIDI')}
            </span>
          </FacebookShareButton>
        </div>
        <Heading
          variant="h1"
          className="text-primary !text-[40px] md:!text-[64px] !leading-[60px] md:!leading-[78px] font-semibold mb-6"
        >
          {article.title}
        </Heading>
        {article.excerptHtml ? (
          <HTMLContent
            className="w-full mb-6 text-gray-900"
            htmlString={article.excerptHtml}
          />
        ) : null}
        <HTMLContent
          className="w-full max-w-full !overflow-hidden"
          htmlString={article.contentHtml}
        />
      </article>
      <Button
        className="rounded-sm uppercase flex gap-2 items-center h-[44px] px-4 bg-secondary text-white hover:bg-secondary group mt-8"
        size="md"
        onClick={goBack}
      >
        <img
          className="duration-200 rotate-180 object-cover"
          src={arrowRight}
          alt="Back"
        />
        {t('button.back', 'Indietro')}
      </Button>
    </>
  );
};

export default ArticleContent;
