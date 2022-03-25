import React, { useEffect } from "react";
import { Container, Header, Main, Footer, Card, NewPost } from "@components";
import { client, GET_POST } from "@gql";
import { GetPostQuery } from "@graphqlTypes/__types__";
import { GetServerSideProps } from "next";

type Props = { data: GetPostQuery["post"] };

const Post: React.FC<Props> = ({ data }) => {
  useEffect(() => {
    console.log(data);
  });

  return (
    <Container>
      <Header />
      {/* <Main /> */}
      <div className="container mx-auto px-60">
        <Card post={data} />
      </div>
      <Footer />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const { post: data } = await client.request(GET_POST, { id });

  return {
    props: {
      data,
    },
  };
};

export default Post;
