import { dir } from 'i18next';
import { languages } from '../i18n/settings'

import Providers from './Providers';
import ThemeSwitch from '@/components/ThemeSwitch';
import Header from '@/components/Header';

import '../../styles/globals.css';
import { Footer } from '@/components/Footer';


export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata = {
  title: 'Nex13App',
  description: 'My first project in Next.js 13',
}

export default function RootLayout({ children, params: {lng} }) {


  return (
    <html lng={lng} dir={dir(lng)}>
        <body>
          <Providers attribute='class'>
          <div>
            <h1 className="text-3xl font-bold">Blog con Next v13</h1>
            <ThemeSwitch></ThemeSwitch>
            <Header lng={lng}></Header>
            {children}
            <Footer lng={lng}></Footer>
          </div>
          </Providers>
        </body>
    </html>
  )
}
