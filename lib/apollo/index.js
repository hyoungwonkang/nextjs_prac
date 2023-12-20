import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let uri = "https://flyby-router-demo.herokuapp.com/";
let apolloClient;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({ uri }),
    cache: new InMemoryCache(),
  });
}