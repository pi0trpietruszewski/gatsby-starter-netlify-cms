import styled from "styled-components"
import { FontFamilies, FontSizes } from "../../theme/Typography"

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 0 50px;
`

export const FooterLogoContainer = styled.div`
  margin-right: 50px;
`
const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LeftFooterContainer = styled(FooterContent)`
  flex-basis: 40%;
  flex: 1;
`

export const RightFooterContainer = styled(FooterContent)`
  flex-basis: 60%;
  flex: 1;
`
export const FooterTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const FooterTitle = styled.p`
  font-family: ${FontFamilies.default};
  font-size: ${FontSizes.footerTitle};
  margin-bottom: 21px;
  @media (max-width: 1615px) and (min-width: 1200px) {
    font-size: ${FontSizes.footerTitleSmaller};
  }
  @media (max-width: 991px) {
    text-align: center;
  }
`
export const FooterDescription = styled.span`
  font-family: ${FontFamilies.subtitle};
  font-size: ${FontSizes.footerSubtitle};
  @media (max-width: 1615px) and (min-width: 1200px) {
    font-size: ${FontSizes.footerSubtitleSmaller};
  }
  @media (max-width: 991px) {
    text-align: center;
  }
`
