import React from "react"
import { LogoContainer, LogoImage } from "./Logo.styles"
import logo from "./logo.svg" // Tell webpack this JS file uses this image
import { Link } from "../Link"

const Logo = () => {
  return (
    <LogoContainer>
      <Link to={"/"}>
        <LogoImage src={logo} alt="Logo" />
      </Link>
    </LogoContainer>
  )
}

export default Logo
