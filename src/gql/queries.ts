import { gql } from "graphql-request";

export const GET_POSTS = gql`
  query GetPosts($limit: Int, $start: Int) {
    posts(limit: $limit, start: $start, sort: "created_at:desc") {
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
    post(id: $id, publicationState: PREVIEW) {
      id
      title
      content
      created_at
      published_at
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

export const GET_USER_POSTS = gql`
  query GetUserPosts($id: ID!) {
    user(id: $id) {
      id
      username
      name
      avatar {
        url
      }
      posts {
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
      }
    }
  }
`;
