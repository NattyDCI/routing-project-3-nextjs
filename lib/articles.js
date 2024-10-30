export async function getArticles() {
    // Fetch data from the API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
}

export default async function getArticle(slug){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    const data = await response.json();
    return data;

}