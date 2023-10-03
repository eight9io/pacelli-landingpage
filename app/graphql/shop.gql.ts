import {gql} from '@apollo/client';

export const GET_SHOP_INFO = gql`
  query Shop($cursor: String) {
    shop {
      name
      description
      id
      brand {
        logo {
          alt
          id
          image {
            altText
            url(transform: {maxHeight: 100})
          }
          mediaContentType
        }
        colors {
          primary {
            background
            foreground
          }
          secondary {
            background
            foreground
          }
        }
        shortDescription
      }
    }
  }
`;
