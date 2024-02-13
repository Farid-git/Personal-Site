import {Inter} from 'next/font/google'
import './globals.css'
import Link from 'next/link';
import Image from "next/image";
import bg from '/public/Tsunami.jpg'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Test Site',
  description: 'Testing Site',
}


export default function RootLayout({children}) {

  return (
    <html lang="en">
    <body className={inter.className}>

    <div
      style={{backgroundImage: `url(${bg.src})`}}
      className="min-h-screen bg-center bg-cover flex justify-center">

      <div
        className="
        w-11/12 md:w-10/12">

        <main className="mt-6">
          {children}
        </main>

      </div>

    </div>
    </body>
    </html>
  )
}
