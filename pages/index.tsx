import React, { useEffect, useState } from "react";
import { Container, PostsCards, Pagination, NewPost, Alert } from "@components";
import { client, GET_POSTS, ADD_POST } from "@gql";
import { GetPostsQuery, PostInput } from "@graphqlTypes/__types__";
import { GetStaticProps, GetServerSideProps } from "next";
import Router from "next/router";
import { getSession } from "next-auth/client";

type Props = { data: GetPostsQuery; page: number };

const Home: React.FC<Props> = ({ data, page }) => {
  const [loading, setloading] = useState(false);
  const [authModalVisible, setauthModalVisible] = useState(false);
  const onPost = async (
    title: PostInput["title"],
    content: PostInput["content"]
  ) => {
    const session = await getSession();
    if (session) {
      setloading(true);
      client
        .request(
          ADD_POST,
          {
            title,
            content,
            user: session?.id,
          },
          { authorization: `Bearer ${session?.jwt}` }
        )
        .then(({ createPost: { post } }) => {
          setloading(false);
          Router.push(`post/${post.id}`);
        });
      // .finally(() => Router.reload());
    } else {
      setauthModalVisible(true);
    }
  };
  return (
    <Container
      auth={authModalVisible}
      onAuthCancel={() => setauthModalVisible(false)}
    >
      {/* <Alert type={"success"} importantText="hello" text="hello" /> */}
      <NewPost loading={loading} onPost={onPost} />
      <PostsCards data={data} />
      <Pagination page={page} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = parseInt(query?.page) || 1;
  const limit = 10;
  const data = await client.request(GET_POSTS, {
    limit,
    start: (page - 1) * limit,
  });

  return {
    props: {
      data,
      page,
    },
  };
};

export default Home;
