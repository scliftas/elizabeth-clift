import Head from "next/head";
import Book from "../components/Book";
import BlogLink from "../components/BlogLink";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { notionInstance, getCurrentlyReading } from "../lib/notion";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const currentlyReading = await getCurrentlyReading(notionInstance);

  return {
    props: {
      allPostsData,
      currentlyReading,
    },
    revalidate: 300,
  };
}

export default function Home(props) {
  const { allPostsData, currentlyReading } = props;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Full-stack engineer with 7+ years of experience working on serverless
          JavaScript applications using Node, React, and AWS and leading teams
          that delight customers. I&apos;m an autistic and disabled trans woman
          with a strong passion for promoting equality and constantly
          challenging the status quo.
        </p>
      </section>

      {currentlyReading.length > 0 && (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Currently Reading</h2>

          <ul className={utilStyles.list}>
            {currentlyReading.map((resource) => (
              <li className={utilStyles.listItem} key={resource.id}>
                <Book {...resource} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {allPostsData.length > 0 && (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>

          <ul className={utilStyles.list}>
            {allPostsData.map((post) => (
              <li className={utilStyles.listItem} key={post.id}>
                <BlogLink {...post} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </Layout>
  );
}
