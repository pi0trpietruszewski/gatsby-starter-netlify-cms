import React from "react"
import facebook from "../SocialIcons/assets/facebook.svg"
import {
  DescriptionCardContainer,
  DescriptionCardDescription,
  DescriptionCardImgContainer,
  DescriptionCardTitle,
} from "./DescriptionCard.styles"
import { Img } from "../Img"

const DescriptionCard = ({ title, description, image }) => {
  return (
    <div className="d-flex align-items-stretch px-3 col-12 col-xl-4 mb-3 mb-xl-0 ">
      <DescriptionCardContainer>
        <DescriptionCardImgContainer>
          <Img src={facebook} />
        </DescriptionCardImgContainer>
        <DescriptionCardTitle>{title}</DescriptionCardTitle>
        <DescriptionCardDescription>{description}</DescriptionCardDescription>
      </DescriptionCardContainer>
    </div>
  )
}

export default DescriptionCard
