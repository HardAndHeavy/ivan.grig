import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO
          title="Все статьи"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `блог`, `grig`, `grig.top`, `григ`, `григорьев`]}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small className="secondColor">{node.frontmatter.date}</small>
              <p>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </Link>
              </p>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY", locale: "ru")
            title
            description
          }
        }
      }
    }
  }
`
