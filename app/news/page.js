import Link from "next/link";
import { getArticles } from "@/lib/articles";
import NewsarticlesGrid from "@/components/news-articles-grid";


// Helper function to format articles
function generateData(posts) {
  if (!posts) {
    throw new Error("No Posts available");
  }

  return posts.map((article) => ({
    body: article.body,
    id: article.id,
    title: article.title,
    slug: article.id,
  }));
}


export default async function NewsPage() {

let posts = await getArticles();
  

generateData(posts);

 

  return (
   <>
    <h1>The news</h1>
    <p></p>
        <NewsarticlesGrid news={posts} />
          
      </>
       
    
    
  )
}
