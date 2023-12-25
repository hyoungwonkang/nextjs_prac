import { gql } from "graphql-request";

export default gql`
    query getProductDetailsById($ids: [ID!]) {
        products(where: { id_in: $ids }) {
            id
            name
            price
            slug
            description
            images {
                id
                url
            }
        }
    }
`;