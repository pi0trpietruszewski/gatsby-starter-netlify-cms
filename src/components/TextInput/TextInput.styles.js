import styled from "styled-components"
import { FontFamilies, FontSizes } from "../../theme/Typography"
import { colors } from "../../theme/Colors"

export const InputC = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px -1px 64px #0000000f;
  font-size: ${FontSizes.input};
  font-family: ${FontFamilies.subtitle};
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 32px;
  outline: none;
  transition: all 0.7s;
  color: ${colors.textTransparent};
  &:focus {
    color: ${colors.text};
    border: 2px solid ${colors.secondary};
    outline: none;
  }
`

export const ErrorLabel = styled.span`
  color: red;
`
