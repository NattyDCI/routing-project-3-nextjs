import Link from "next/link";


export default function MainHeader() {
  return (
    <>
        <header>
            <ul>
                <li>
                    <Link href="/" alt="home">Home</Link>
                </li>
                <li>
                    <Link href="/news" alt="news Articles">The latest News</Link>
                </li>   
            </ul>
        </header>
    </>
  )
}
