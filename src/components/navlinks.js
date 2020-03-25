import React from "react"

import { Navlink } from "."

const Navlinks = ({ location }) => (
  <nav className="nav">
    <Navlink text="Classes" to="/classes" location={location} title />
    <Navlink text="Variables" to="/variables" location={location} />
  </nav>
)

export default Navlinks
