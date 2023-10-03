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
