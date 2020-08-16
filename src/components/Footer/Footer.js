import React from "react"
import { FooterDescription, FooterTitle } from "./Footer.styles"
import Logo from "../Logo/Logo"
import LinkList from "../LinkList/LinkList"
import { more, sitemap } from "../const/FooterVariables"
import SocialFeedback from "../SocialFeedback/SocialFeedback";

const Footer = () => {
  return (
    <div className={"row"}>
      <div className={"col-12 col-xl-6 row"}>
        <div className="col-12 col-lg-4 col-xl-4 justify-content-center align-items-center d-flex">
          <Logo />
        </div>
        <div className="col-12 col-lg-8 col-xl-8 justify-content-center align-items-center">
          <div className="d-flex flex-column ">
            <FooterTitle>
              Szukasz idealnej agencji <br /> dla twojego biznesu beauty?
            </FooterTitle>
            <FooterDescription>
              Jesteśmy do Twojej <br /> dyspozycji! Skontaktuj się
            </FooterDescription>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-xl-3 d-flex justify-content-around justify-content-xl-around align-items-start py-5 py-xl-0">
        <LinkList title={"Mapa"} links={sitemap} />
        <LinkList title={"Wiecej"} links={more} />
      </div>
      <div className="col-md-12 col-xl-3 d-flex justify-content-center justify-content-xl-end align-items-xl-end ">
        <SocialFeedback />
      </div>
    </div>
  )
}

export default Footer
