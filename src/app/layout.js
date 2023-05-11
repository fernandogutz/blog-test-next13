import Header from '@/components/Header';
import '../styles/globals.css';

export const metadata = {
  title: 'Nex13App',
  description: 'My first project in Next.js 13',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>Blog con Next v13</h1>
          <Header></Header>
          {children}
        </div>
      </body>
    </html>
  )
}
