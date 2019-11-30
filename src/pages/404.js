import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>404 - PAGE NOT FOUND</h1>
                <p>You just hit a route that doesn't exist...</p>
                <a href="/" className="button special">Return home</a>
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
