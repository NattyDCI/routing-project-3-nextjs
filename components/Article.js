
export default async function Article() {

    const post = await fetch("https://jsonplaceholder.typicode.com/posts/1")

  return (
    <>
    <div>{post}</div>
    
    </>
  )
}
