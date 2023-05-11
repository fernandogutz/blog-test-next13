import LikeButton from "@/components/LikeButton";
import Link from "next/link";

const fetchData = () => {
    return fetch('https://blog.fernandogutz.com/wp-json/wp/v2/posts', {cache: 'no-store'}) //{cache:'no-store'} = Para SSR || {next: {revalidate: 60}} = Para ISR || Dejar vacío para SSG, por defecto
        .then(resp => resp.json())

}

const PostsPage = async () => {
    const posts = await fetchData();
    console.log('FETCH DATA');

    return (
        <>
            <h1>Posts</h1>
            {
                posts.map(post => ( // no olvidar de usar paréntesis en vez de llaves jajajja siempre hago lo mismo xd
                    <article key={post.id}>
                        <h3>{post.title.rendered}</h3>
                        <p>{post.excerpt.rendered.slice(3, 120)}...</p>
                        <Link href={`/posts/${post.id}`}>Leer más</Link>
                        <LikeButton id={post.id}></LikeButton>
                    </article>
                ))
            }
        </>
    )
}

export default PostsPage