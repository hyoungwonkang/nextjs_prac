import { gql } from "@apollo/client";

const GET_LATEST_SIGNS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export default GET_LATEST_SIGNS;
