import Layout from '../../components/layout';
import Head from 'next/head';

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Layout>
    );
  }

import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  // ...
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}