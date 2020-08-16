import React from "react"
import { SocialIconsContainer, LogoImage } from "./SocialIcons.styles"
import facebook from "./assets/facebook.svg" // Tell webpack this JS file uses this image
import instagram from "./assets/instagram.svg" // Tell webpack this JS file uses this image
import tiktok from "./assets/tiktok.svg" // Tell webpack this JS file uses this image
import youtube from "./assets/youtube.svg" // Tell webpack this JS file uses this image
import { Link } from "../Link"

const SocialIcons = () => {
  return (
    <SocialIconsContainer>
      <Link to={"/"}>
        <LogoImage src={facebook} alt="Logo" />
      </Link>
      <Link to={"/"}>
        <LogoImage src={instagram} alt="Logo" />
      </Link>
      <Link to={"/"}>
        <LogoImage src={tiktok} alt="Logo" />
      </Link>
      <Link to={"/"}>
        <LogoImage src={youtube} alt="Logo" />
      </Link>
    </SocialIconsContainer>
  )
}

export default SocialIcons
