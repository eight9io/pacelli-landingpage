export const CAROUSEL_QUERY = `#graphql
  query CarouselQuery(
    $language: LanguageCode,
    $handle: String!,
    $firstItems: Int = 10,
  ) @inContext( language: $language) {
    metaobject(handle: {type: "carousel", handle: $handle}) {
      handle
      id
      type
      updatedAt
      fields {
        key
        value
        type
        references(first: $firstItems) {
          nodes {
            ... on Metaobject {
              handle
              fields {
                key
                value
                type
                reference {
                  ... on MediaImage {
                    image {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
` as const;
