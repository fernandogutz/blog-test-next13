import Link from "next/link";
import { useTranslation } from '../i18n';
import { Footer } from "@/components/Footer";

const HomePage = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, 'translation');

  return (
    <>
      <h1>{t('translation:title')}</h1>
      <Link href={`/${lng}/posts/`}>Ver posts</Link>
      <br></br>
      <br></br>
      <Link href={`/${lng}/posts/invalid`}>Forzar error 404</Link>
      <hr></hr>
      <hr></hr>
    </>
  );
};

export default HomePage;
