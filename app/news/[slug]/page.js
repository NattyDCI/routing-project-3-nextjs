import getArticle from "@/lib/articles";

export default async function NewsSlug({params}) {
    console.log(params.slug,"paramsobject");

    const data = await getArticle(params.slug);
    console.log(data)

  return (
    <>
    <h1>{data.title}</h1>
    <p>{data.body}</p>
    </>
      
  )
}
