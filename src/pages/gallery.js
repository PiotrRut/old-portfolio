import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const Gallery = () => (
  <Layout>
    <Helmet>
      <title>Gallery</title>
      <meta name="description" content="Gallery page" />
    </Helmet>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>In progress...</h1>
                <p>The gallery will be up and live soon! Stay tuned!</p>
            </div>
        </section>
    </div>
  </Layout>
)

export default Gallery
