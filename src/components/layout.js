import React from "react"

import Header from "./header"
import Footer from "./footer"
import { rhythm } from "../utils/typography"

const Layout = ({ children }) =>
  <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }}
  >
    <Header />
    <main>{children}</main>
    <Footer />
  </div>

export default Layout
