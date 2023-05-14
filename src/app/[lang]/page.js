import Link from "next/link";
import { getDictionary } from './dictionaries';

const HomePage = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <>
      <h1>{dict.homepage.title}</h1>
      <Link href={`/${lang}/posts/`}>{dict.homepage.viewAllPosts}</Link>
      <br></br>
      <br></br>
      <Link href={`/${lang}/posts/invalid`}>{dict.homepage.error404}</Link>
    </>
  );
};

export default HomePage;
