/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import { rhythm } from "../utils/typography"

const SocialLink = props => (
  <a
    className="socialLink"
    style={{
      marginRight: 10
    }}
    target="_blank"
    {...props}
  >
    {props.children}
  </a>
)

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `table`,
              marginBottom: rhythm(1),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                display: `table-cell`,
                verticalAlign: `middle`,
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p
              className="secondColor"
              style={{
                display: `table-cell`,
                verticalAlign: `middle`,
                paddingLeft: 20,
              }}
            >
              {author}
            </p>
            <p
              style={{
                display: `table-cell`,
                verticalAlign: `middle`,
                paddingLeft: 20,
                fontSize: 25,
              }}
            >
              <SocialLink href={`mailto:${social.mail}`}>
                <FontAwesomeIcon icon={faEnvelope} />
              </SocialLink>
              <SocialLink href={social.vk}>
                <FontAwesomeIcon icon={faVk} />
              </SocialLink>
              <SocialLink href={social.instagram}>
                <FontAwesomeIcon icon={faInstagram} />
              </SocialLink>
              <SocialLink href={social.github}>
                <FontAwesomeIcon icon={faGithub} />
              </SocialLink>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          vk
          instagram
          github
          mail
        }
      }
    }
  }
`

export default Bio
