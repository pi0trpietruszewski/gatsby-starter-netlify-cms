import styled from "styled-components"
import { Link as GLink } from "gatsby"
import { colors } from "../theme/Colors"
import { FontSizes } from "../theme/Typography"

export const Link = styled(GLink)`
  box-shadow: none;
  text-decoration: none;
  font-family: "DM Serif Display", serif;
  letter-spacing: 0px;
  font-size: ${FontSizes.menuItem};
  color: ${colors.text};
  &:hover {
    color: ${colors.text};
  }
`
