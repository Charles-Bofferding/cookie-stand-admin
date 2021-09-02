import Link from "next/link"

function Header() {

  return (

    <header>
      <h1>Cookie Stand Admin</h1>
      <Link href="/overview"><a>Overview page</a></Link>
    </header>

  )
}

export default Header