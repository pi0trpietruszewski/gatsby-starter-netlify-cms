import React from "react"
import {
  OfferDescription,
  OfferTitle,
  OfferTitleAnd,
} from "./OfferSection.styles"
import FeaturedButton from "../FeaturedButton/FeaturedButton"
import { FeaturedTitle } from "../FeaturedTitle"
import FeaturedMedium from "../FeaturedMedium/FeaturedMedium"

const OfferSection = () => {
  return (
    <section className={"row py-5"}>
      <div className="col-12 col-xl-6 my-5">
        <FeaturedTitle className="pb-3">Kierunek piękno</FeaturedTitle>

        <OfferTitle>
          <OfferTitleAnd>Znamy problemy</OfferTitleAnd>
          <br />
          możliwości Branży Beauty
        </OfferTitle>
        <OfferDescription>
          Pełny grafik na kilkanaście tygodni do Przodu? Nasi klienci otrzymują
          nagrody i wyróżnienia za bycie docenionymi W branży!
        </OfferDescription>
        <div className="mt-5">
          <FeaturedButton>Pełna Oferta</FeaturedButton>
        </div>
      </div>
      <div className="col-12 col-xl-6 d-flex flex-wrap justify-content-center my-5">
        <FeaturedMedium title={"Facebook"} icon={"facebook"} />
        <FeaturedMedium title={"Facebook"} icon={"facebook"} />
        <FeaturedMedium title={"Facebook"} icon={"facebook"} />
        <FeaturedMedium title={"Facebook"} icon={"facebook"} />
        <FeaturedMedium title={"Facebook"} icon={"facebook"} />
        <FeaturedMedium title={"Facebook"} icon={"facebook"} />
        <FeaturedMedium title={"Facebook"} icon={"facebook"} />
        <FeaturedMedium title={"Facebook"} icon={"facebook"} />
      </div>
    </section>
  )
}

export default OfferSection
