import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

const fetchData = async(id) => {

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: {revalidate: 3} }) //{cache:'no-store'} = Para SSR || {next: {revalidate: 60}} = Para ISR || Dejar vacío para SSG, por defecto
        .then(resp => resp.json())

}

const PostPage = async ({ children, params}) => {

    const post = await fetchData(params.id);

    return (
        <>
            {!post.id && notFound()}
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/${params.lng}/posts/${params.id}/comments`}>Ver comentarios</Link> {/* puedo acceder a params.lng aunque sea de un nivel superior */}
            {children}
        </>
    )
}

export default PostPage