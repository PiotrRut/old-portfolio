import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import qcCp9QNURpuz15jBSRoKSA_thumb_8f from '../assets/images/qcCp9QNURpuz15jBSRoKSA_thumb_8f.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Peter Rutkowski"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${qcCp9QNURpuz15jBSRoKSA_thumb_8f})`}}>
                            <header className="major">
                                <h3>About Me</h3>
                                <p>Learn something about me</p>
                            </header>
                            <Link to="/aboutme" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Projects</h3>
                                <p>See some of my programming projects and go in depth with them</p>
                            </header>
                            <Link to="/projects" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Blog</h3>
                                <p>Read what's on my mind</p>
                            </header>
                            <Link to="/blog" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Art gallery</h3>
                                <p>See some of my favourite shots done by me</p>
                            </header>
                            <Link to="/gallery" className="link primary"></Link>
                        </article>
                    </section>

                  {/*  <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Placeholder</h2>
                            </header>
                            <p>Placeholder</p>
                            <ul className="actions">
                                <li><Link to="/404" className="button next">Placeholder</Link></li>
                            </ul>
                        </div>
                    </section> */}

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
