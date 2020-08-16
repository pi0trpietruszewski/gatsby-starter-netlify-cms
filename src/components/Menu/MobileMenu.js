import React, { useEffect, useState } from "react"
import { useTransition, animated, config } from "react-spring"
import { MdClose, MdMenu } from "react-icons/md"
import { colors } from "../../theme/Colors"
import MenuItem from "./MenuItem"

const styleToggleButton = {
  fontSize: "4rem",
  color: "rgb(36,36,36)",
  padding: 0,
  border: "none",
  background: "none",
}

const MobileMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)
  const fullscreenMenu = useTransition(isOpen, null, {
    from: {
      opacity: 0,
      transform: "scale(0.80)",
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
      backgroundImage: `linear-gradient(120deg,${colors.secondary}  0%, ${colors.primary} 100%)`,
      position: "fixed",
      maxHeight: "100vh",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    leave: { opacity: 0, transform: "scale(0.80)" },
    config: config.gentle,
  })

  const toggleMenu = () => {
    alert(isOpen)
    !isOpen == true &&
      document.getElementsByTagName("body")[0].classList.add("modalOpen")
    !isOpen == false &&
      document.getElementsByTagName("body")[0].classList.remove("modalOpen")

    setIsOpen(!isOpen)
  }

  useEffect(() => {
    return () => {
      document.getElementsByTagName("body")[0].classList.remove("modalOpen")
    }
  }, [])
  return (
    <>
      <div
        style={{
          alignItems: "center",
          position: "relative",
          zIndex: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {!isOpen ? (
          <div>
            <div
              style={{ ...styleToggleButton, cursor: "pointer" }}
              onClick={toggleMenu}
            >
              <MdMenu />
            </div>
          </div>
        ) : (
          <div>
            <div
              style={{ ...styleToggleButton, cursor: "pointer" }}
              onClick={toggleMenu}
            >
              <MdClose />
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: 19,
        }}
      >
        {fullscreenMenu.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                <div
                  style={{
                    height: "100%",
                    flexDirection: "column",
                    fontSize: "8vw",
                    padding: 0,
                    margin: 0,
                    listStyle: "none",
                    overflowY: "auto",
                    textAlign: "left",
                  }}
                >
                  {links.map(({ to, title }) => (
                    <div onClick={toggleMenu}>
                      <MenuItem mobile to={to} title={title} />
                    </div>
                  ))}
                </div>
              </animated.div>
            )
        )}
      </div>
    </>
  )
}

export default MobileMenu
