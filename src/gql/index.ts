import { GraphQLClient } from "graphql-request";

const endpoint = process.env.ENDPOINT || "http://localhost:1337/graphql";

export { GET_POSTS, GET_POST } from "./queries";
export { ADD_COMMENT, ADD_POST } from "./mutations";

export const client = new GraphQLClient(endpoint, {
  headers: {},
});
