import React, { useEffect, useState } from "react";
import { client, GET_POST, ADD_COMMENT } from "@gql";
import { Container, PostsCards, UserCard } from "@components";
import { GetServerSideProps } from "next";
import { GET_USER_POSTS } from "@gql/queries";
import { getSession } from "next-auth/client";
import { GetUserPostsQuery } from "@graphqlTypes/__types__";

type Props = { user: any };

const User: React.FC<Props> = ({ user }) => {
  return (
    <Container>
      {/* <div>{JSON.stringify(user.posts)}</div> */}
      <UserCard user={user} />
      <PostsCards data={{ posts: user.posts }} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  //   const { id } = await getSession(context);
  const { id } = context.query;
  const { user } = await client.request(GET_USER_POSTS, { id: id });

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
  };
};

export default User;
