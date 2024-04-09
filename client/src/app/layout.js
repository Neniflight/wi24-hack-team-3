import NavBar from '@/components/navbar-component/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'cultivate',
//   description: 'Journaling app designed to make happiness a habit',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
      </head>
    </html>
  )
}
