"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
    {
        pathname: "/",
        name: "Home",
    },
    {
        pathname: "/lets-draw",
        name: "Let's draw",
    },
    {
        pathname: "/blog",
        name: "Blog",
    },
    {
        pathname: "/about",
        name: "About",
    },
    {
        pathname: "/contact",
        name: "Contact",
    },
]

const Menu = () => {
    const path = usePathname();

  return (
    <div className="py-8 flex flex-row items-center justify-center gap-6">
      {menuItems.map((item, i) =>
      <Link
        className={`${path === item.pathname && "text-cyan-700 font-bold underline underline-offset-8 decoration-2"}`}
        key={i}
        href={item.pathname}
      >
        {item.name}
      </Link>
    )}
    </div>
  )
}

export default Menu
