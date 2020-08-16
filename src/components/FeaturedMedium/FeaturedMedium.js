import React from "react"
import facebook from "./assets/facebook.svg" // Tell webpack this JS file uses this image
import {
  MediumContainer,
  MediumIcon,
  MediumIconContainer,
  MediumTitle,
} from "./FeaturedMedium.styles"

const FeaturedMedium = ({ icon, title }) => {
  return (
    <MediumContainer className="d-flex flex-column mx-4 mb-3">
      <MediumIconContainer>
        <MediumIcon src={facebook} />
      </MediumIconContainer>
      <MediumTitle>{title}</MediumTitle>
    </MediumContainer>
  )
}

export default FeaturedMedium
