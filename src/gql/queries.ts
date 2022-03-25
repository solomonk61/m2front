import { gql } from "graphql-request";

export const GET_POSTS = gql`
  query GetPosts($limit: Int, $start: Int) {
    posts(limit: $limit, start: $start) {
      id
      slug
      title
      content
      created_at
      upvotes
      downvotes
      users_permissions_user {
        name
        username
        avatar {
          url
        }
        birthday
        created_at
      }
      topics {
        name
      }
      comments {
        id
        content
        created_at
        upvotes
        downvotes
      }
    }
  }
`;

export const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      slug
      title
      content
      created_at
      upvotes
      downvotes
      users_permissions_user {
        name
        username
        avatar {
          url
        }
        birthday
        created_at
      }
      topics {
        name
      }
      comments {
        id
        content
        created_at
        upvotes
        downvotes
      }
    }
  }
`;
