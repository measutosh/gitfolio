import './globals.css'
import { Oxygen_Mono } from 'next/font/google' 
import Header from './components/Header'


const oxy = Oxygen_Mono({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Gitfolio | Asutosh Panda',
  description: 'Portfolio of Asutosh Panda to showcase the work from GitHub',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oxy.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
