import Link from "next/link";
import NewsSlug from "./[slug]/page";


export default function NewsPage() {

  return (
    <div>
    <h1>The news</h1>
    <Link href={`/news/${NewsSlug}`}></Link>
    </div>
  )
}
