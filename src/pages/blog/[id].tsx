/* eslint-disable react-hooks/rules-of-hooks */
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import posts from '../../../posts.json';

const Post: NextPage = (props: any) => {
  return (
    <>
      <h1>{props.posts.title}</h1>
      <p>{props.posts.content}</p>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: { posts: (posts as any)[`${query.id}`] },
  };
};

export default Post;
