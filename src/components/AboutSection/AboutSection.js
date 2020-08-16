import React from "react"

import { FeaturedTitle } from "../FeaturedTitle"
import { Title } from "../Title"
import DescriptionCard from "../DescriptionCard/DescriptionCard"

const AboutSection = () => {
  return (
    <section className="row py-5 ">
      <div className="col-12 mb-5 center-text">
        <FeaturedTitle className="pb-3">Poznajmy się lepiej!</FeaturedTitle>
        <Title>Jak wygląda współpraca z Beauty Agency?</Title>
      </div>
      <div className="col-12 my-5 d-flex align-items-stretch  justify-content-around flex-wrap">
        <DescriptionCard
          title={"Porozmawiajmy!"}
          description={
            "Wspólnie ustalamy cel naszej współpracy. Przez telefon, mejla, Messenger - gdzie chcesz!"
          }
        />
        <DescriptionCard
          title={"Wysłamy ofertę."}
          description={
            "Działania dopasowane do Twojego biznesu. Oferta to szczypta wiedzy i tona doświadczenia w branży."
          }
        />
        <DescriptionCard
          title={"Działamy!"}
          description={
            "Strategia jest? Dobrze się poznamy :) Codziennie jesteśmy z Tobą w kontakcie!"
          }
        />
      </div>
    </section>
  )
}

export default AboutSection
