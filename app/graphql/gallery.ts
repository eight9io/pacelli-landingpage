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
      }
      title: field(key: "title") {
        key
        value
      }
      cover_images: field(key: "cover_images") {
        key
        value
      }
      challenge_description: field(key: "challenge_description") {
        key
        value
      }
      challenge_images: field(key: "challenge_images") {
        key
        value
      }
      client: field(key: "client") {
        key
        value
      }
      description: field(key: "description") {
        key
        value
      }
      excerpt: field(key: "excerpt") {
        key
        value
      }
      result_description: field(key: "result_description") {
        key
        value
      }
      result_images: field(key: "result_images") {
        key
        value
      }
      solution_description: field(key: "solution_description") {
        key
        value
      }
      solution_images: field(key: "solution_images") {
        key
        value
      }
    }
  }
` as const;

export const PROJECT_GALERRY_QUERY = `#graphql
  query ProjectGalleryQuery(
    $language: LanguageCode,
    $first: Int = 8,
  ) @inContext( language: $language) {
    metaobjects(type: "project", first: $first) {
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
        }
        title: field(key: "title") {
          key
          value
        }
        cover_images: field(key: "cover_images") {
          key
          value
        }
        challenge_description: field(key: "challenge_description") {
          key
          value
        }
        challenge_images: field(key: "challenge_images") {
          key
          value
        }
        client: field(key: "client") {
          key
          value
        }
        description: field(key: "description") {
          key
          value
        }
        excerpt: field(key: "excerpt") {
          key
          value
        }
        result_description: field(key: "result_description") {
          key
          value
        }
        result_images: field(key: "result_images") {
          key
          value
        }
        solution_description: field(key: "solution_description") {
          key
          value
        }
        solution_images: field(key: "solution_images") {
          key
          value
        }
      }
    }
  }
` as const;
