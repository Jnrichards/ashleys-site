
import React from "react"
import PropTypes from "prop-types"

import "./bootstrap.min.css";
import "./layout.css"
import { FaGulp } from "react-icons/fa"

const Layout = ({ children }) => {
  return(
  <div>
      {children}

  </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
