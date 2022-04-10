import React, { useEffect, useState } from "react";
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
import { client, GET_POST, ADD_COMMENT } from "@gql";
import { CommentInput, GetPostQuery } from "@graphqlTypes/__types__";
import { GetServerSideProps } from "next";
import Router from "next/router";
import { getSession } from "next-auth/client";

type Props = { post: GetPostQuery["post"] };

const Post: React.FC<Props> = ({ post }) => {
  const [loading, setloading] = useState(false);
  const [authModalVisible, setauthModalVisible] = useState(false);

  const onPost = async (content: CommentInput["content"]) => {
    const session = await getSession();
    if (session) {
      setloading(true);
      client
        .request(
          ADD_COMMENT,
          {
            content,
            user: session?.id,
            post: post?.id,
          },
          { authorization: `Bearer ${session?.jwt}` }
        )
        .then(() => setloading(false))
        .finally(() => Router.reload());
    } else {
      setauthModalVisible(true);
    }
  };

  return (
    <Container
      auth={authModalVisible}
      onAuthCancel={() => setauthModalVisible(false)}
    >
      <PostCard post={post} />
      <NewComment
        // onContentChange={setcontent}
        loading={loading}
        onPost={onPost}
      />
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
