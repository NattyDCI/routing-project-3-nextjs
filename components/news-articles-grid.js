import classes from "./news-articles-grid.module.css";
import NewsItem from "./news-item";

export default function NewsarticlesGrid({news}) {

  console.log(news, "what the hell")
  return (
    <div className={classes.grid}>
      {news.map((article) => (

        <li key={article.id}>
       <NewsItem {...article}/>
     </li>
      )
      )};
    </div>
  );
}
