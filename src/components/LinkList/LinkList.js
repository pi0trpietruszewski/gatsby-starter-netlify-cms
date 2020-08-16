import React from "react"
import {
  LinkListContainer,
  LinkListItem,
  LinkListTitle,
} from "./LinkList.styles"
import { Link } from "../Link"

const LinkList = ({ links = [], title }) => {
  return (
    <div>
      {title && <LinkListTitle>{title}</LinkListTitle>}
      <LinkListContainer>
        {links.map(({ title, to }) => (
          <Link to={to}>
            <LinkListItem>{title}</LinkListItem>
          </Link>
        ))}
      </LinkListContainer>
    </div>
  )
}

export default LinkList
