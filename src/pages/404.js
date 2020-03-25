import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404 NOT FOUND</title>
      <meta name="description" content="404" />
    </Helmet>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>404 - PAGE NOT FOUND :(</h1>
                <p>This page does not exist...how sad.</p>
                <a href="/" className="button special">Return home</a>
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
