import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const Blog = props => {
  const posts = props.data.allMarkdownRemark.edges
  return (
    <Layout>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Blog" />
      </Helmet>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <h1>Blog</h1>
            <p>
              Here you can find my recent blog posts about topics I'm interested
              in, or just my thoughts in general! Enjoy!
            </p>

            <div className="grid-wrapper">
              {posts.map(post => (
                <div className="col-4">
                  <div className="box">
                    <h3>
                      <a href={post.node.frontmatter.path}>
                        {post.node.frontmatter.title}
                      </a>
                    </h3>
                    <p>{post.node.frontmatter.date}</p>
                  </div>
                </div>
            ))}
            </div>
            <a href="/" className="button special">Return home</a>
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default Blog

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "D MMMM YYYY")
            title
            path
          }
        }
      }
    }
  }
`
