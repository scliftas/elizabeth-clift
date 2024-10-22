import Image from "next/image";
import styles from "./book.module.css";

export default function Book(props) {
  const { olid, title, progress } = props;

  const progressPercentage = (progress * 100).toFixed(0);
  const progressText = `${progressPercentage}% completed`;

  return (
    <article>
      <a
        className={styles.card}
        href={`https://openlibrary.org/books/${olid}`}
        target="_blank"
      >
        <Image
          alt={`Book cover for ${title}`}
          src={`https://covers.openlibrary.org/b/olid/${olid}-M.jpg`}
          width={86}
          height={128}
        />

        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.progress}>{progressText}</p>
        </div>
      </a>
    </article>
  );
}
