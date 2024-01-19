import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <ul className={utilStyles.horizontalList}>
      <li
        className={`${utilStyles.listItem} ${utilStyles.headingMd} ${utilStyles.lightText}`}
      >
        <Link href="/elizabeth-clift_cv.pdf" target="_blank">
          CV
        </Link>
      </li>

      <li
        className={`${utilStyles.listItem} ${utilStyles.headingMd} ${utilStyles.lightText}`}
      >
        <a href="https://www.linkedin.com/in/elizabeth-clift/" target="_blank">
          LinkedIn
        </a>
      </li>

      <li
        className={`${utilStyles.listItem} ${utilStyles.headingMd} ${utilStyles.lightText}`}
      >
        <a href="https://github.com/scliftas" target="_blank">
          GitHub
        </a>
      </li>

      <li
        className={`${utilStyles.listItem} ${utilStyles.headingMd} ${utilStyles.lightText}`}
      >
        <a href="mailto:contact@elizabeth-clift.com" target="_blank">
          Email
        </a>
      </li>
    </ul>
  );
}
