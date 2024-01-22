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

  function LayoutHeader() {
    return (
      <header className="sm:text-sm md:text-base lg:text-2xl">
        <nav>
          <div className="flex justify-center items-center">
            <div className="p-1 bg-pastel-cream border-4 border-pastel-dark-blue">
              <ul className="flex flex-row sm:space-x-1 md:space-x-2 lg:space-x-4 justify-center w-fit font-bold flex-wrap">
                <li><Link
                  href="resume"
                  className="hover:text-pastel-cream hover:bg-pastel-dark-blue p-2"
                >Резюме</Link></li>

                <li><Link
                  href="projects"
                  className="hover:text-pastel-cream hover:bg-pastel-dark-blue p-2"
                >Проекты</Link></li>

                <li><Link
                  href="about"
                  className="hover:text-pastel-cream hover:bg-pastel-dark-blue p-2"
                >О Себе</Link></li>

                <li><Link
                  href="contacts"
                  className="hover:text-pastel-cream hover:bg-pastel-dark-blue p-2"
                >Контакты</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>)
  }

  // function Title() {
  //   return (
  //
  //     <div className=" text-right">
  //     <h1 className="font-mono text-5xl font-bold ">О Себе</h1>
  //     </div>
  //
  //   )
  // }

  return (
    <html lang="en">
    <body className={inter.className}>
    <div
      style={{backgroundImage: `url(${bg.src})`}}
      className="p-6 min-h-screen bg-center bg-cover">

      <LayoutHeader/>

      <main className="mt-6">
          {children}
      </main>

    </div>
    </body>
    </html>
  )
}
