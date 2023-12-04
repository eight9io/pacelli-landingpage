export const HOME_CAROUSEL_QUERY = `#graphql
  query HomeCarouselQuery(
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
              id
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
