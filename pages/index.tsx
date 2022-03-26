import React, { useEffect } from "react";
import { Container, PostsCards, Pagination } from "@components";
import { client, GET_POSTS } from "@gql";
import { GetPostsQuery } from "@graphqlTypes/__types__";
import { GetStaticProps, GetServerSideProps } from "next";
import { useRouter } from "next/router";

type Props = { data: GetPostsQuery; page: number };

const Home: React.FC<Props> = ({ data, page }) => {
  return (
    <Container>
      {/* <NewPost /> */}
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
