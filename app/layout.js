import styles from './styles.module.css'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const interFont = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFont.className}>
      <body className={styles.container}>
        <Header/>
        <main>{children}</main>
       <Footer/>
      </body>
    </html>
  );
}
