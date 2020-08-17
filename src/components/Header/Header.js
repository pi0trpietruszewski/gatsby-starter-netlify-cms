import React from "react"
import { HeaderContainer } from "./Header.styles"
import Menu from "../Menu/Menu"
import Logo from "../Logo/Logo"

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Menu />
    </HeaderContainer>
  )
}

export default Header
