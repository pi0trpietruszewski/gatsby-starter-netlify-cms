import React, { useState } from "react"
import { Link } from "gatsby"
import WindowSizeListener from "react-window-size-listener"

// import { rhythm, scale } from "../utils/typography"
import { Helmet } from "react-helmet/es/Helmet"
// import Header from "./Header/Header"
// import Footer from "./Footer/Footer"
import { WindowSizeContext } from "../contexts/windowSizeContext"

const Layout = ({ location, title, children }) => {
  const [windowSize, setWindowSize] = useState({ width: null, height: null })

  const rootPath = `${__PATH_PREFIX__}/`
  // let header = (
  //   <>
  //     <Helmet>
  //       <link
  //         href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap"
  //         rel="stylesheet"
  //       />
  //     </Helmet>
  //     <Header />
  //   </>
  // )
  // let footer = <Footer />

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

    <div
      className="container"
      style={
        {
          // marginLeft: `auto`,
          // marginRight: `auto`,
          // maxWidth: 1920,
          // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }
      }
    >
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
      <WindowSizeContext.Provider value={windowSize}>
        <WindowSizeListener
          onResize={({ windowHeight, windowWidth }) => {
            setWindowSize({ width: windowWidth, height: windowHeight })
          }}
        />
        {header}

        <main>{children}</main>
        {footer}
        {/*<footer>*/}
        {/*  © {new Date().getFullYear()}, Built with*/}
        {/*  {` `}*/}
        {/*  <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
        {/*</footer>*/}
      </WindowSizeContext.Provider>
    </div>
  )
}

export default Layout
