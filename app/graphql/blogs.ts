export const FEATURED_BLOG_QUERY = `#graphql
  query Articles(
    $language: LanguageCode,
    $first: Int = 10,
  ) @inContext( language: $language) {
    articles(first: $first) {
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
      nodes {
        ...Article
      }
    }
  }

  fragment Article on Article {
    id
    handle
    onlineStoreUrl
    publishedAt
    tags
    title
    trackingParameters
    seo {
      description
      title
    }
    image {
      altText
      height
      id
      width
      url(transform: {})
    }
    blog {
      id
      handle
      title
    }
    content(truncateAt: 200)
  }
` as const;

export const ARTICLE_BY_ID_QUERY = `#graphql
  query Article(
    $language: LanguageCode,
    $id: ID!,
  ) @inContext( language: $language) {
    article(id: $id) {
      ...Article
    }
  }

  fragment Article on Article {
    trackingParameters
    title
    tags
    publishedAt
    onlineStoreUrl
    id
    handle
    contentHtml
    excerptHtml
    excerpt
    content
    seo {
      description
      title
    }
    image {
      url(transform: {})
    }
    blog {
      id
      handle
      title
    }
    excerptHtml
    excerpt
  }
` as const;

export const ARTICLES_PAGINATION_QUERY = `#graphql
  query ArticlesPagination(
    $language: LanguageCode,
    $first: Int = 10,
    $after: String
  ) @inContext( language: $language) {
    articles(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
      nodes {
        ...Article
      }
    }
  }

  fragment Article on Article {
    id
    handle
    onlineStoreUrl
    publishedAt
    tags
    title
    trackingParameters
    seo {
      description
      title
    }
    image {
      altText
      height
      id
      width
      url(transform: {})
    }
    blog {
      id
      handle
      title
    }
    content(truncateAt: 200)
  }
` as const;

export const BLOG_LIST_QUERY = `#graphql
  query BlogsList {
      blogs(first: 10) {
      nodes {
        title
        seo {
          description
          title
        }
        onlineStoreUrl
        id
        handle
      }
    }
  }
` as const;

export const BLOG_QUERY = `#graphql
  query BlogQuery(
    $language: LanguageCode,
    $handle: String,
    $id: ID,
    $articlesFirst: Int = 8,
    $articlesAfter: String
  ) @inContext( language: $language){
    blog(handle: $handle, id: $id) {
      ...Blog
    }
  }

  fragment Blog on Blog {
    title
    seo {
      description
      title
    }
    onlineStoreUrl
    id
    handle
    articles(first: $articlesFirst, after: $articlesAfter) {
      nodes {
        ...Article
      }
    }
  }

  fragment Article on Article {
    id
    handle
    onlineStoreUrl
    publishedAt
    tags
    title
    trackingParameters
    seo {
      description
      title
    }
    image {
      altText
      height
      id
      width
      url(transform: {})
    }
    blog {
      id
      handle
      title
    }
    content(truncateAt: 200)
  }
` as const;

export const BLOG_ARTICLE_DETAIL_QUERY = `#graphql
  query BlogArticleDetailQuery(
    $language: LanguageCode,
    $handle: String,
    $id: ID,
    $articleHandle: String!,
  ) @inContext( language: $language){
    blog(handle: $handle, id: $id) {
      ...Blog
    }
  }

  fragment Blog on Blog {
    title
    seo {
      description
      title
    }
    onlineStoreUrl
    id
    handle
    articleByHandle(handle: $articleHandle) {
      ...Article
    }
  }

  fragment Article on Article {
    trackingParameters
    title
    tags
    publishedAt
    onlineStoreUrl
    id
    handle
    contentHtml
    excerptHtml
    excerpt
    content
    seo {
      description
      title
    }
    image {
      url(transform: {})
    }
    blog {
      id
      handle
      title
    }
    excerptHtml
    excerpt
  }
` as const;
