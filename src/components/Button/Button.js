import React from "react"
import { ButtonContainer } from "./Button.styles"

const Button = ({ children, onPress, type }) => {
  return (
    <ButtonContainer type={type} onClick={onPress}>
      {children}
    </ButtonContainer>
  )
}

export default Button
