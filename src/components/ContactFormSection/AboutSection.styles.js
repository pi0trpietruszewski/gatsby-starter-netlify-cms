import styled from "styled-components"

import { Title } from "../Title"
import { Description } from "../Description"
import { colors } from "../../theme/Colors"

export const FormTitle = styled(Title)`
  margin-bottom: 45px;
  position: relative;
  }
`
export const OfferTitleAnd = styled.span`
  position: relative;
  &:before {
    position: absolute;
    top: -10px;
    right: 10px;
    content: "&";
    color: ${colors.primary};
    font-size: 25rem;
    z-index: -1;
    opacity: 0.21;
    @media (max-width: 884px) {
      right: 0;
      font-size: 20rem;
    }
  }
`

export const OfferDescription = styled(Description)`
  margin-bottom: 45px;
`
