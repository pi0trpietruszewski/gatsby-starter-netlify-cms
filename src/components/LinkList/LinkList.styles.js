import styled from "styled-components"
import { FontFamilies, FontSizes } from "../../theme/Typography"

export const LinkListContainer = styled.ul`
  margin: 0;
  list-style-type: none;
`

export const LinkListItem = styled.li`
  font-size: ${FontSizes.small};
  font-family: ${FontFamilies.subtitle};
  margin-bottom: 5px;
  @media (max-width: 1615px) and (min-width: 1200px) {
    font-size: ${FontSizes.superSmall};
  }
`
export const LinkListTitle = styled.div`
  font-size: ${FontSizes.small};
  font-family: ${FontFamilies.subtitle};
  margin-bottom: 40px;
  font-weight: bold;
  @media (max-width: 1615px) and (min-width: 1200px) {
    font-size: ${FontSizes.superSmall};
  }
`
