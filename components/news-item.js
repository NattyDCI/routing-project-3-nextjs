import Link from "next/link";
import classes from "./news-item.module.css"
import getArticle from "@/lib/articles";

export default async function NewsItem({id}) {
console.log(id, "id")
  const {title, articleId, body} = await getArticle(id);

  console.log(articleId, "its me")

  return (
    <article className={classes.article}>
      <header>
        <h1 className={classes.title}>{title}</h1>
        <p>this is the article nr. {articleId}</p>
      </header>
      <p>{body}</p>
      <Link href={`/news/${id}`}>View Details</Link>
    </article>
  )
}
