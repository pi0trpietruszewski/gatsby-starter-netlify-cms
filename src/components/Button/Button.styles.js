import styled from "styled-components"
import { FontFamilies, FontSizes } from "../../theme/Typography"
import { colors } from "../../theme/Colors"
import { Link } from "../Link"

export const ButtonContainer = styled("button").attrs({ type: "submit" })`
  background: ${colors.primary};
  position: relative;
  font-size: ${FontSizes.featuredButton};
  font-family: ${FontFamilies.default};
  padding: 19px 50px;
  border: none;
  text-align: center;
  border-radius: 39px;
  transition: 0.3s;
  display: inline-block;
  margin-top: 5px;
  text-align: center;
  width: 100%;

  &:before {
    z-index: 1;
    right: 0;
    top: -7px;
    width: 100%;
    height: 100%;
    border-radius: 39px;
    border: 1px solid ${colors.primaryBorder};
    position: absolute;
    content: "";
    transition: 0.4s;
  }
  &:hover {
    background: ${colors.secondary};
  }
  &:hover {
    text-decoration: none;
  }
`
