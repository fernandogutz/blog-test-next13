import Header from '@/components/Header';
import '../styles/globals.css';
import Providers from './Providers';
import ThemeSwitch from '@/components/ThemeSwitch';


export const metadata = {
  title: 'Nex13App',
  description: 'My first project in Next.js 13',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
        <body>
          <Providers attribute='class'>
          <div>
            <h1 className="text-3xl font-bold">Blog con Next v13</h1>
            <ThemeSwitch></ThemeSwitch>
            <Header></Header>
            {children}
          </div>
          </Providers>
        </body>
    </html>
  )
}
