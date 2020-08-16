import React from "react"

import { Card } from "../Card"
import TextInput from "../TextInput/TextInput"
import Button from "../Button/Button"
import woman from "./womanHeader.svg"
import { Img } from "../Img"
import { FormTitle, SlideSubtitle, SlideTitle } from "./SliderSection.styles"

const SliderSection = () => {
  return (
    <section className="row py-5 d-flex justify-content-center align-items-center">
      <div className="col-12 col-xl-6 mb-5">
        <SlideTitle>Beauty Agency</SlideTitle>
        <SlideSubtitle>
          Prowadzimy Social Media firm I osób z branży Wellness & Beauty
          Tworzymy silne marki osobiste oraz dobrze prosperujące salony
          piękności
        </SlideSubtitle>
      </div>
      <div className="col-12 col-xl-6 my-5 d-flex align-items-stretch  justify-content-around flex-wrap">
        <Img src={woman} />
      </div>
    </section>
  )
}

export default SliderSection
