import LikeButton from "@/components/LikeButton";
import Link from "next/link";

const fetchData = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {next: {revalidate: 60}}) //{cache:'no-store'} = Para SSR || {next: {revalidate: 60}} = Para ISR || Dejar vacío para SSG, por defecto
        .then(resp => resp.json())

}

const PostsPage = async ({params: {lng}}) => {
    const posts = await fetchData();
    console.log('FETCH DATA');

    return (
        <>
            <h1>Posts</h1>
            {
                posts.map(post => ( // no olvidar de usar paréntesis en vez de llaves jajajja siempre hago lo mismo xd
                    <article key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body.slice(3, 120)}...</p>
                        <Link href={`/${lng}/posts/${post.id}`}>Leer más</Link>
                        <LikeButton id={post.id}></LikeButton>
                    </article>
                ))
            }
        </>
    )
}

export default PostsPage