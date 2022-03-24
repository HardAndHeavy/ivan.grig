import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faGithub } from '@fortawesome/free-brands-svg-icons'
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

const Header = () =>
  <StaticQuery
    query={headerQuery}
    render={data => {
      const { author, social } = data.site.siteMetadata
      return (
        <div
          style={{
            display: `table`,
            marginBottom: rhythm(1),
            width: `100%`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              display: `table-cell`,
            }}
            to={`/`}>
            <div style={{ display: `table` }}>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                  display: `table-cell`,
                  verticalAlign: `middle`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
              <p
                style={{
                  paddingLeft: 10,
                  lineHeight: 1,
                  display: `table-cell`,
                  verticalAlign: `middle`,
                }}>{author}</p>
            </div>
          </Link>
          <div
            style={{
              display: `table-cell`,
              verticalAlign: `middle`,
              fontSize: 25,
              width: `60%`,
            }}
          >
            <div style={{ float: `right` }}>
              <SocialLink href={`mailto:${social.mail}`}>
                <FontAwesomeIcon icon={faEnvelope} />
              </SocialLink>
              <SocialLink href={social.vk}>
                <FontAwesomeIcon icon={faVk} />
              </SocialLink>
              <SocialLink href={social.github}>
                <FontAwesomeIcon icon={faGithub} />
              </SocialLink>
            </div>
          </div>
        </div>
      )
    }}
  />

const headerQuery = graphql`
  query HeaderQuery {
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
          github
          mail
        }
      }
    }
  }
`

export default Header
