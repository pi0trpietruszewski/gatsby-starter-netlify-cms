import React, { useContext } from "react"
import { MenuContainer } from "./Menu.styles"
import MenuItem from "./MenuItem"
import { WindowSizeContext } from "../../contexts/windowSizeContext"
import MobileMenu from "./MobileMenu"

const links = [
  { title: "Główna", to: "/" },
  { title: "Oferta", to: "/" },
  { title: "Wiedza", to: "/wiedza" },
  { title: "Portfolio", to: "/portfolio" },
  { title: "Opinie", to: "/opinie" },
  { title: "Kontakt", to: "/kontakt" },
]

const Menu = () => {
  const { width } = useContext(WindowSizeContext)
  return width < 1500 ? (
    // <MenuContainer>
    <MobileMenu links={links} />
  ) : (
    // </MenuContainer>
    <MenuContainer>
      {links.map(({ to, title }) => (
        <MenuItem to={to} title={title} active />
      ))}
    </MenuContainer>
  )
}

export default Menu
