import styled from "styled-components"
import { FontSizes } from "../theme/Typography"

export const SocialFeedbackContainer = styled.div`
  margin-bottom: 40px;
  padding: 0 5px;
`
export const FBIcon = styled.img`
  width: 31px;
  height: auto;
  margin-bottom: 0;
  margin-right: 17px;
`
export const StarIcon = styled.img`
  width: 16;
  // height: auto;
  margin-bottom: 0;
`
export const FeedbackText = styled.span`
  font-size: ${FontSizes.extraSmall};
  letter-spacing: 1.5px;
  line-height: 1.2;
  font-weight: bold;
`
