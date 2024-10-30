import getArticles from "@/lib/actions";

export default async function newsarticles() {
  const Posts = await getArticles();
  
  let ArrayOfArticles = [];

    data.map((article) => {
    ArrayOfArticles.push({
      ...ArrayOfArticles,
      body: article.body,
      id: article.id,
      title: article.title,
      slug: `article/${article.id}`,
    });
  });

  if (!Posts) {
    throw new Error("No Posts available")
  }

  return ArrayOfArticles;
}

