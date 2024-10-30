import Link from "next/link";
import { getArticles } from "@/lib/articles";


export default async function NewsPage() {

let posts = await getArticles();
  
  let ArrayOfArticles = [];

  if (!posts) {
    throw new Error("No Posts available")
  }



    posts.map((article) => {
    ArrayOfArticles.push({
      ...ArrayOfArticles,
      body: article.body,
      id: article.id,
      title: article.title,
      slug: `news/${article.id}`,
    });
  });

 

  return (
    <div>
    <h1>The news</h1>
    return {
        <>
        <div>
        {ArrayOfArticles.map((article)=>
        <>
            <Link href={article.slug}>
                {article.id}
            </Link>
            
           
        </>
        )}
        </div>
      </>
    }
    </div>
  )
}
