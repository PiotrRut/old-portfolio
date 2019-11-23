import React from "react"
import Helmet from 'react-helmet'
import { graphql } from "gatsby"

import Layout from '../components/layout'

class BlogPost extends React.Component {
  render(){
      const blogText = this.props.data.markdownRemark;
      return (
    <Layout>
        <Helmet title={blogText.frontmatter.title} />
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>{blogText.frontmatter.title}</h2>
                    </header>
                    <div dangerouslySetInnerHTML={{ __html: blogText.html }}/>
                    <a href="/blog" className="button special">Back to blog posts</a>
                </div>
            </section>
        </div>
    </Layout>
    )
  }
}
export default BlogPost

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
