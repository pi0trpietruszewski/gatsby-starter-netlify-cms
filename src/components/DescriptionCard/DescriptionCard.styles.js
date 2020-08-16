import styled from "styled-components"
import { FontFamilies, FontSizes } from "../../theme/Typography"
import { colors } from "../../theme/Colors"

export const DescriptionCardContainer = styled.div`
  position: relative;
  display: flex;
  font-size: ${FontSizes.featuredButton};
  box-shadow: 0px -1px 64px #0000000f;
  font-family: ${FontFamilies.default};
  padding: 50px 25px;
  background: white;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 2px solid transparent;
  transition: all 0.7s;
  &:before {
    z-index: -1;
    right: -14px;
    top: -14px;
    width: 100%;
    height: 100%;
    border-radius: 70px;
    border: 1px solid ${colors.primaryBorder};
    position: absolute;
    content: "";
  }
  &:hover {
    border: 2px solid ${colors.secondary};
  }
`
export const DescriptionCardTitle = styled.h3`
  margin-top: 20px;
  font-family: ${FontFamilies.subtitle};
  font-size: ${FontSizes.cardTitle};
  font-weight: bold;
`
export const DescriptionCardDescription = styled.span`
  margin-top: 20px;
  letter-spacing: 2px;
  line-height: 1.4;
  font-family: ${FontFamilies.subtitle};
  font-size: ${FontSizes.cardText};
`
export const DescriptionCardImgContainer = styled.div`
  display: flex;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  padding: 10px;
  background: ${colors.secondaryAccent};
`
