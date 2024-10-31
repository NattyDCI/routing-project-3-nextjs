import Link from "next/link";

export default function HomePage() {
  return (
    <div id="home">
      <h1>The News</h1>
      <Link href={"/news"}></Link>      
      </div>
  );
}
