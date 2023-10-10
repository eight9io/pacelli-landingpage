export const PROJECT_DETAIL_QUERY = `#graphql
  query ProjectDetailQuery(
    $language: LanguageCode,
    $handle: String!,
  ) @inContext( language: $language) {
    metaobject(handle: {type: "project", handle: $handle}) {
      handle
      id
      type
      updatedAt
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
            ... on Video {
              previewImage {
                url
              }
              sources {
                url
                mimeType
                width
                height
                format
              }
            }
        }
        references(first: 10) {
          nodes {
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
` as const;

export const PROJECT_GALLERY_QUERY = `#graphql
  query ProjectGalleryQuery(
    $language: LanguageCode,
    $first: Int = 6,
    $after: String,
  ) @inContext( language: $language) {
    metaobjects(type: "project", first: $first, after: $after, reverse: true) {
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
      nodes {
        handle
        id
        type
        updatedAt
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
              ... on Video {
                previewImage {
                  url
                }
                sources {
                  url
                  mimeType
                  width
                  height
                  format
                }
              }
          }
          references(first: 10) {
            nodes {
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
` as const;
