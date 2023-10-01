import { gql } from "@apollo/client";

const ADD_SIGN = gql`
  mutation InsertNewSign($id: String!, $name: Sting!, $description: String) {
    insert_sign(objects: { id: $id, name: $name, description: $description }) {
      returning {
        id
      }
    }
  }
`;

export default ADD_SIGN;
