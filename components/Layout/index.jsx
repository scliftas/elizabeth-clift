import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "../Nav";
import styles from "./layout.module.css";
import utilStyles from "../../styles/utils.module.css";

const name = "Elizabeth Clift";
export const siteTitle = "Elizabeth Clift | Software Engineer";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Senior Full-Stack Engineer with 7+ years of experience working on serverless
          JavaScript applications using Node, React, and AWS."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/portrait.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />

            <h1 className={`${utilStyles.heading2Xl} ${styles.name}`}>
              {name}
            </h1>
            <p
              className={`${utilStyles.headingLg} ${utilStyles.lightText} ${styles.pronouns}`}
            >
              she/her
            </p>

            <Nav />
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/portrait.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>

            <h2 className={`${utilStyles.headingLg} ${styles.name}`}>
              <Link
                href="/"
                className={`${utilStyles.colorInherit} ${utilStyles.headingLg}`}
              >
                {name}
              </Link>
            </h2>

            <p
              className={`${utilStyles.headingMd} ${utilStyles.lightText} ${styles.pronouns}`}
            >
              she/her
            </p>

            <Nav />
          </>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}

      <footer className={`${styles.footer} ${utilStyles.lightText}`}>
        Built by me. Powered by Next.js and Notion. Photography by{" "}
        <a href="https://www.instagram.com/louis.takes.photos/" target="_blank">
          Louis Painter
        </a>
        .
      </footer>
    </div>
  );
}
