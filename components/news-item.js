import Link from "next/link";
import classes from "./news-item.module.css"
import getArticle from "@/lib/articles";

export default async function NewsItem({title, body, id, slug}) {
console.log(id, "id")
  const articlenumber = await getArticle(id);

  return (
    <article className={classes.article}>
      <header>
        <h1 className={classes.title}>{title}</h1>
        <p>this is the article nr. {id}</p>
      </header>
      <p>{body}</p>
      <Link href={`/news/${id}`}>View Details</Link>
    </article>
  )
}
