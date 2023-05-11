
const fetchData = async(id) => {

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: {revalidate: 3} }) //{cache:'no-store'} = Para SSR || {next: {revalidate: 60}} = Para ISR || Dejar vacío para SSG, por defecto
        .then(resp => resp.json())

}

const PostPage = async ({ params }) => {

    const post = await fetchData(params.id);

    return (
        <>
            {!post.id && <h1>Error 404</h1>}
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}

export default PostPage