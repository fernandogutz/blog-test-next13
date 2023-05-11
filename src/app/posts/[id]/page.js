
const fetchData = async(id) => {

    return fetch(`https://blog.fernandogutz.com/wp-json/wp/v2/posts/${id}`, { next: {revalidate: 3} }) //{cache:'no-store'} = Para SSR || {next: {revalidate: 60}} = Para ISR || Dejar vacío para SSG, por defecto
        .then(resp => resp.json())

}

const PostPage = async ({ params }) => {

    const post = await fetchData(params.id);

    return (
        <>
            <h1>{post.title.rendered}</h1>
            <p>{post.content.rendered}</p>
        </>
    )
}

export default PostPage