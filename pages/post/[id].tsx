import React, { useEffect } from "react";
import {
  Container,
  Header,
  Main,
  Footer,
  PostCard,
  NewPost,
  NewComment,
  CommentsCards,
} from "@components";
import { client, GET_POST } from "@gql";
import { GetPostQuery } from "@graphqlTypcaes/__types__";
import { GetServerSideProps } from "next";

type Props = { post: GetPostQuery["post"] };

const Post: React.FC<Props> = ({ post }) => {
  return (
    <Container>
      <PostCard post={post} />
      <NewComment />
      <CommentsCards data={post.comments} />
      {/* <p>{JSON.stringify(post?.comments)}</p> */}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const { post } = await client.request(GET_POST, { id });

  return {
    props: {
      post,
    },
  };
};

export default Post;
