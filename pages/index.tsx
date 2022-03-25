import React, { useEffect } from "react";
import { Container, Header, Main, Footer, Cards, NewPost } from "@components";
import { client, GET_POSTS } from "@gql";
import { GetPostsQuery } from "@graphqlTypes/__types__";
import { GetStaticProps } from "next";

type Props = { data: GetPostsQuery };

const Home: React.FC<Props> = ({ data }) => {
  useEffect(() => {
    console.log(data);
  });

  return (
    <Container>
      <Header />
      {/* <Main /> */}
      <div className="container mx-auto px-60">
        {/* <NewPost /> */}
        <Cards data={data} />
      </div>
      <Footer />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.request(GET_POSTS);

  return {
    props: {
      data,
    },
  };
};

export default Home;
