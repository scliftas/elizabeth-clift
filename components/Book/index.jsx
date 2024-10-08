import Image from "next/image";
import styles from "./book.module.css";

export default function Book(props) {
  const { olid, title, progress } = props;

  return (
    <article>
      <a
        className={styles.card}
        href={`https://openlibrary.org/books/${olid}`}
        target="_blank"
        aria-label={`View ${title} on Open Library (opens in a new tab)`}
      >
        <Image
          src={`https://covers.openlibrary.org/b/olid/${olid}-M.jpg`}
          width={86}
          height={128}
        />

        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.progress}>{progress * 100}% completed</p>
        </div>
      </a>
    </article>
  );
}
