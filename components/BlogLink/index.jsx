import Link from "next/link";
import Date from "../Date";
import utilStyles from "../../styles/utils.module.css";

export default function (props) {
  const { id, title, date } = props;

  return (
    <article>
      <Link href={`/posts/${id}`}>{title}</Link>

      <br />

      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
    </article>
  );
}
