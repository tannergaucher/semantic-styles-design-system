import { Navlink } from "."
import React from "react"

const Navlinks = ({ location }) => (
  <nav className="nav">
    <Navlink text="Classes" to="/classes" location={location} title />
    <Navlink text="Variables" to="/variables" location={location} />
  </nav>
)

export default Navlinks
