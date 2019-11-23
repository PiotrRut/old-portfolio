import React from 'react'
import Layout from '../components/layout'


class Blog extends React.Component {
render() {
  return (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1>Blog</h1>
          <p>
            Here you can find my recent blog posts about topics I'm interested
            in, or just my thiughts in general! Enjoy!
          </p>

          <div className="grid-wrapper">
            <div className="col-4">
              <div className="box">
                <h3>
                  <a href="/blog/first-blogpost">Welcome to my new blog</a>
                </h3>
                <p>Tuesday, 19 November 2019</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  </Layout>
    )
  }
}
export default Blog
