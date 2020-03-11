import { Link } from "gatsby"
import React from "react"

const Navlink = ({ text, to, location }) => (
  <Link data-is-active={location.pathname === to} to={to} className="nav-link">
    <h3 style={{ margin: `0` }}>{text}</h3>
  </Link>
)

export default Navlink
