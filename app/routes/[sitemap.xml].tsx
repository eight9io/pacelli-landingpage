import {flattenConnection} from '@shopify/hydrogen';
import type {LoaderArgs} from '@shopify/remix-oxygen';
import invariant from 'tiny-invariant';

import type {SitemapsQuery} from 'storefrontapi.generated';
import {Article, Blog} from '@shopify/hydrogen/storefront-api-types';

const MAX_URLS = 250; // the google limit is 50K, however, SF API only allow querying for 250 resources each time

interface ProductEntry {
  url: string;
  lastMod: string;
  changeFreq: string;
  image?: {
    url: string;
    title?: string;
    caption?: string;
  };
}

export async function loader({request, context: {storefront}}: LoaderArgs) {
  const data = await storefront.query(SITEMAP_QUERY, {
    variables: {
      urlLimits: MAX_URLS,
      language: storefront.i18n.language,
    },
  });

  invariant(data, 'Sitemap data is missing');

  return new Response(
    shopSitemap({data, baseUrl: new URL(request.url).origin}),
    {
      headers: {
        'content-type': 'application/xml',
        // Cache for 24 hours
        'cache-control': `max-age=${60 * 60 * 24}`,
      },
    },
  );
}

function xmlEncode(string: string) {
  return string.replace(/[&<>'"]/g, (char) => `&#${char.charCodeAt(0)};`);
}

function shopSitemap({data, baseUrl}: {data: SitemapsQuery; baseUrl: string}) {
  const today = new Date().toISOString();

  const staticPagesRoute = [
    '',
    'about',
    'contact',
    'showroom',
    'gallery',
    'blogs',
    'services/professinal',
    'services/private',
    'faqs',
    'brands',
  ];

  const staticPagesData = staticPagesRoute.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastMod: today,
    changeFreq: 'daily',
  }));

  let articles: any[] = [];
  const blogsData = flattenConnection(data.blogs).map((blog: Blog) => {
    articles = [...articles, ...flattenConnection(blog.articles)];
    return {
      url: `${baseUrl}/blogs/${xmlEncode(blog.handle)}`,
      lastMod: today,
      changeFreq: 'daily',
    };
  });

  const articlesData = articles.map((article: Article) => ({
    url: `${baseUrl}/blog/${xmlEncode(article.blog.handle)}/${xmlEncode(
      article.handle,
    )}`,
    lastMod: article.publishedAt || today,
    changeFreq: 'daily',
  }));

  const pagesData = flattenConnection(data.pages)
    .filter((page: any) => page.onlineStoreUrl)
    .map((page: any) => {
      const url = `${baseUrl}/pages/${xmlEncode(page.handle)}`;

      return {
        url,
        lastMod: page.updatedAt,
        changeFreq: 'daily',
      };
    });

  const projectsData = flattenConnection(data.projects).map((project: any) => ({
    url: `${baseUrl}/project/${xmlEncode(project.handle)}`,
    lastMod: project.updatedAt,
    changeFreq: 'daily',
  }));

  const urlsDatas = [
    ...staticPagesData,
    ...projectsData,
    ...pagesData,
    ...blogsData,
    ...articlesData,
  ];

  return `
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    >
      ${urlsDatas.map((url) => renderUrlTag(url)).join('')}
    </urlset>`;
}

function renderUrlTag({
  url,
  lastMod,
  changeFreq,
  image,
}: {
  url: string;
  lastMod?: string;
  changeFreq?: string;
  image?: {
    url: string;
    title?: string;
    caption?: string;
  };
}) {
  return `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastMod}</lastmod>
      <changefreq>${changeFreq}</changefreq>
      ${
        image
          ? `
        <image:image>
          <image:loc>${image.url}</image:loc>
          <image:title>${image.title ?? ''}</image:title>
          <image:caption>${image.caption ?? ''}</image:caption>
        </image:image>`
          : ''
      }

    </url>
  `;
}

const SITEMAP_QUERY = `#graphql
  query sitemaps($urlLimits: Int, $language: LanguageCode)
  @inContext(language: $language) {
    pages(first: $urlLimits, query: "published_status:'published'") {
      nodes {
        updatedAt
        handle
        onlineStoreUrl
      }
    }
    blogs(first: $urlLimits, query: "published_status:'published'") {
      nodes {
        handle
        onlineStoreUrl
        articles(first: $urlLimits, query: "tag:'__pacelli'") {
          nodes {
            handle
            onlineStoreUrl
            publishedAt
            blog {
              handle
            }
          }
        }
      }
    }
    projects: metaobjects(type: "project", first: $urlLimits, reverse: true) {
      nodes {
        handle
        id
        type
        updatedAt
      }
    }
  }
`;
