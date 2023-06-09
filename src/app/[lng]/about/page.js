import { useTranslation } from '../../i18n';


const AboutPage = async({params: {lng}}) => {
  const { t } = await useTranslation(lng, 'about');

  return (
    <>
        <h1>{t('title')}</h1>
        <p>Proyecto usando la carpeta app de Next.js junto a sus nuevas funcionalidades: </p>
        <ul>
            <li>React Server Components.</li>
            <li>Nuevo fetching de data.</li>
            <li>Componentes del lado del cliente.</li>
            <li>Nueva arquitectura de carpetas.</li>
            <li>Etc.</li>
        </ul>
    </>
  )
}

export default AboutPage