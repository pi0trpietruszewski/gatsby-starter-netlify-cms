import React from "react"
import { MenuItemContainer, MenuItemLink } from "./MenuItem.styles"
import "./Menu.css"

const MenuItem = ({ active, mobile, title, to }) => {
  return (
    <MenuItemContainer>
      <MenuItemLink
        activeClassName={mobile ? "activeMobile" : "activeLink"}
        mobile={mobile}
        active={active}
        to={to}
      >
        {title}
      </MenuItemLink>
    </MenuItemContainer>
  )
}

export default MenuItem
