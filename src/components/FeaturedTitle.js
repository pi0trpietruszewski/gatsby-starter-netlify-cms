import styled from "styled-components"
import { FontFamilies, FontSizes } from "../theme/Typography"
import { colors } from "../theme/Colors"

export const FeaturedTitle = styled.h3`
  font-family: ${FontFamilies.default};
  font-size: ${FontSizes.featuredTitle};
  color: ${colors.accent};
  width: 100%;
`
