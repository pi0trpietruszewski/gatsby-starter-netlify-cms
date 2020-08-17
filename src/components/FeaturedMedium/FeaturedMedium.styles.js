import styled from "styled-components"
import { colors } from "../../theme/Colors"
import { FontFamilies, FontSizes } from "../../theme/Typography"

export const MediumIcon = styled.img`
  margin-bottom: 0;
  width: 100%;
`
export const MediumIconContainer = styled.div`
  padding: 30px;
  border: 1px solid ${colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin-bottom: 24px;
  aspect-ratio: 1;
`
export const MediumTitle = styled.span`
  font-size: ${FontSizes.featuredTitle};
  font-family: ${FontFamilies.default};
  margin-bottom: 0;
`
export const MediumContainer = styled.div`
  margin-bottom: 0;
`
