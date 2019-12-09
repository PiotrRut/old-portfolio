import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const Policy = props => (
  <Layout>
    <Helmet>
      <title>Privacy Policy</title>
      <meta name="description" content="Privacy Policy" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Privacy Policy</h1>
          </header>
          <p>
          </p>
          <a href="/" className="button special">
            Back home
          </a>
        </div>
      </section>
    </div>

  </Layout>
)

export default Policy
