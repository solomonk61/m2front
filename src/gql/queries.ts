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
        users_permissions_user {
          avatar {
            url
          }
          username
        }
      }
    }
  }
`;

export const GET_COMMENTS = gql`
  query GetComments {
    comments(sort: "upvotes:desc") {
      id
      content
      created_at
      upvotes
      users_permissions_user {
        username
        avatar {
          url
        }
      }
    }
  }
`;
export const GET_COMMENT = gql`
  query GetComment($id: ID!) {
    comment(id: $id) {
      id
      content
      created_at
      upvotes
      users_permissions_user {
        username
        avatar {
          url
        }
      }
    }
  }
`;
