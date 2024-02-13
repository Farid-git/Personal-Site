import Link from "next/link";

export default function Header({activeLink}) {

  function HeaderLink({href, title}) {
    return (

      <Link
        href={href}
        className={activeLink === href ?
          "font-bold text-pastel-cream bg-pastel-dark-blue p-2 pointer-events-none" :
          "hover:text-pastel-cream hover:bg-pastel-dark-blue p-2"}
      >{title}</Link>)
  }

  return (
    <header>
      <nav>
        <div className="p-1 justify-center items-center bg-pastel-cream border-4 border-pastel-dark-blue">
            <ul
              className="flex flex-row space-x-1 md:space-x-2  justify-center w-fit flex-wrap">

              <HeaderLink href="about" title="О Себе"/>
              <HeaderLink href="contacts" title="Контакты"/>

            </ul>
        </div>
      </nav>
    </header>)
}
