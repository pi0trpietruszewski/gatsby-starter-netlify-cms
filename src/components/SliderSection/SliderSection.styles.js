import styled from "styled-components"

import { Title } from "../Title"
import { Description } from "../Description"
import { FontFamilies, FontSizes } from "../../theme/Typography"

export const SlideTitle = styled(Title)`
  margin-bottom: 45px;
  font-size:100px;
  position: relative;
   @media (max-width: 884px) {
  font-size:${FontSizes.title};
    }
  }
`
export const SlideSubtitle = styled.h2`
  margin-bottom: 45px;
  font-family:${FontFamilies.subtitle};
  font-weight:100;
  letter-spacing:3px;
  line-height:1.2;
  font-size:${FontSizes.big};
  position: relative;
     @media (max-width: 884px) {
  font-size:${FontSizes.default};
    }
  }
`

export const OfferDescription = styled(Description)`
  margin-bottom: 45px;
`
