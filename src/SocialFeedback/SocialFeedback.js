import React from "react"
import SocialIcons from "../components/SocialIcons/SocialIcons"
import fb from "./assets/facebook-outline.svg"
import star from "./assets/star.svg"
import {
  FBIcon,
  FeedbackText,
  SocialFeedbackContainer,
  StarIcon,
} from "./SocialFeedback.styles"

const SocialFeedback = () => {
  return (
    <div>
      <SocialFeedbackContainer className="d-flex">
        <FBIcon src={fb} />
        <div className="d-flex flex-column justify-content-between">
          <div className="d-flex">
            <StarIcon src={star} />
            <StarIcon src={star} />
            <StarIcon src={star} />
            <StarIcon src={star} />
            <StarIcon src={star} />
          </div>
          <FeedbackText>
            5.0 na podstawie <br /> opinii klientów
          </FeedbackText>
        </div>
      </SocialFeedbackContainer>
      <SocialIcons />
    </div>
  )
}

export default SocialFeedback
