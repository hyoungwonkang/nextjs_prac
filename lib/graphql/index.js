import { GraphQLClient } from "graphql-request";

const HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;
const HYGRAPH_API_KEY = process.env.HYGRAPH_API_KEY;

const authorization = `Bearer ${HYGRAPH_API_KEY}`

export default new GraphQLClient(HYGRAPH_ENDPOINT, {
    headers: {
        ...(HYGRAPH_API_KEY && { authorization }),
    },
})