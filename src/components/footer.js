import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Footer = () => (
  <StaticQuery
    query={footerQuery}
    render={data => {
      const { git } = data.site.siteMetadata
      return (
        <footer
          className="secondColor"
          style={{
            marginTop: rhythm(2),
          }}
        >
          <p>Исходный код на <a className="secondColor" href={git}>GitHub</a></p>
        </footer>
      )
    }}
  />
)

const footerQuery = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        git
      }
    }
  }
`

export default Footer
