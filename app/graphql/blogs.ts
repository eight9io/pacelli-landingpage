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
    content(truncateAt: 200)
  }
` as const;
