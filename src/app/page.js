import Link from "next/link"

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Link href={'/posts/'}>Ver todos los posts</Link>
      <br></br>
      <br></br>
      <Link href={'/posts/err123'}>Forzar error 404 en Posts</Link>
    </>
  )
}

export default HomePage