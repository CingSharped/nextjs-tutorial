import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, my names Chris and I am trying to create something to make working out and being healthier more fun</p>
        <br></br>
        <h3><a href='/timer'>Check out my Timer</a></h3>
        <br></br>
        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="christopher-sharpe-4b653980" data-version="v1">
          <h1>My LinkedIn</h1>
          <br></br>
          <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
          <a class="badge-base__link LI-simple-link" href="https://uk.linkedin.com/in/christopher-sharpe-4b653980?trk=profile-badge"></a>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}