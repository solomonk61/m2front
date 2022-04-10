import { gql } from "graphql-request";

export const ADD_POST = gql`
  mutation CreatePost($content: String, $title: String, $user: ID) {
    createPost(
      input: {
        data: {
          users_permissions_user: $user
          title: $title
          content: $content
          published_at: null
        }
      }
    ) {
      post {
        id
        title
        content
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation CreateComment($content: String, $user: ID, $post: ID) {
    createComment(
      input: {
        data: { post: $post, users_permissions_user: $user, content: $content }
      }
    ) {
      comment {
        id
        content
      }
    }
  }
`;
