import styled from "styled-components"
import { FontFamilies, FontSizes } from "../../theme/Typography"
import { colors } from "../../theme/Colors"
import { Link } from "../Link"

export const FeaturedButtonContainer = styled(Link)`
  position: relative;
  font-size: ${FontSizes.featuredButton};
  font-family: ${FontFamilies.default};
  padding: 19px 50px;
  display: table;
  border: 1px solid ${colors.primaryBorder};
  text-align: center;
  border-radius: 39px;
  transition: 0.3s;

  &:before {
    z-index: -1;
    left: -14px;
    bottom: -14px;
    width: 100%;
    height: 100%;
    border-radius: 39px;
    background: ${colors.primary};
    position: absolute;
    content: "";
    transition: 0.4s;
  }
  &:hover:before {
    background: ${colors.secondary};
  }
  &:hover {
    text-decoration: none;
  }
`
