import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const AboutMe = (props) => (
    <Layout>
        <Helmet>
            <title>About me</title>
            <meta name="description" content="Page about me" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About me</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>SOME TEXT</p>
                    <p>SOME TEXT</p>
                    <p>SOME TEXT</p>  
                </div>
            </section>
        </div>

    </Layout>
)

export default AboutMe
