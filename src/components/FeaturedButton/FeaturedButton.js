import React from "react"
import { FeaturedButtonContainer } from "./FeaturedButton.styles"

const FeaturedButton = ({ children, to }) => {
  return <FeaturedButtonContainer to={to}>{children}</FeaturedButtonContainer>
}

export default FeaturedButton
