import styled from "styled-components"
import { colors } from "../../theme/Colors"
import { FontSizes } from "../../theme/Typography"
import { Link } from "gatsby"

export const MenuItemContainer = styled.div`
  padding: 5px;
  margin-right: 54px;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
`
export const MenuItemLink = styled(Link)`
  ${props =>
    props.active
      ? `&:before{  
  transform: translateX(-50%);
  border-radius: 100%;
  position: absolute;
  background:${props.mobile ? "white" : colors.primary};
  bottom: ${props.mobile ? "-10px" : "-4px"};;
  content: '';
  height: ${props.mobile ? "31px" : "11px"};
  width: ${props.mobile ? "31px" : "11px"};
  left: 50%;
  }`
      : ""}

  &:active {
    color: ${props => (props.mobile ? "white" : colors.accent)};
  }
  &:focused {
    color: ${props => (props.mobile ? "white" : colors.accent)};
  }
  &:hover {
    color: ${props => (props.mobile ? "white" : colors.accent)};
  }

  position: relative;
  box-shadow: none;
  text-decoration: none;
  text-align: left;
  font-family: "DM Serif Display", serif;
  letter-spacing: 0px;
  font-size: ${props => (props.mobile ? "5rem" : FontSizes.menuItem)};
  margin-bottom: ${props => (props.mobile ? "15px" : 0)};
  color: ${colors.text};
  transition: all 0.5s;
`
