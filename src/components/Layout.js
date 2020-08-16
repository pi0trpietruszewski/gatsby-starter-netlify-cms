import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  // if (location.pathname === rootPath) {
  //   header = (
  //     <h1
  //       style={{
  //         ...scale(1.5),
  //         marginBottom: rhythm(1.5),
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // }
  return (
      <>
          <button
              style={{ cursor: "pointer" }}
              onClick={() => {
                  alert("x")
              }}
          >
              Click
          </button>
          <input
              style={{ cursor: "pointer" }}
              type="button"
              value={"Click"}
              onClick={() => {
                  alert("x")
              }}
          />
          <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                  alert("x")
              }}
          >
              Div
          </div>
          <a
              style={{ cursor: "pointer" }}
              onClick={() => {
                  alert("x")
              }}
          >
              Div
          </a>
          <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                  alert("x")
              }}
          >
              Div
          </span>
          <p
              style={{ cursor: "pointer" }}
              onClick={() => {
                  alert("x")
              }}
          >
              Div
          </p>
      </>
  )
}

export default Layout
