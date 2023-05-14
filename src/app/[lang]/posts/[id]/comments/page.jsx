import { notFound } from 'next/navigation';

const fetchData = async(id) => {

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { next: {revalidate: 3} }) //{cache:'no-store'} = Para SSR || {next: {revalidate: 60}} = Para ISR || Dejar vacío para SSG, por defecto
        .then(resp => resp.json())

}

const PostCommentsPage = async ({ params }) => {
    
    const {id} = params;
    const comments = await fetchData(id);

    return (
        <ul>
            {comments.length < 1 && <p>Aún no hay comentarios</p>}

            {
                comments.map(comment => (
                    <li key={comment.id}>
                        <h4>{comment.name}</h4>
                        <p>{comment.body}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default PostCommentsPage