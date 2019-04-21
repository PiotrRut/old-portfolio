import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ProjectsBanner from '../components/ProjectsBanner'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Projects = (props) => (
    <Layout>
        <Helmet>
            <title>My Projects</title>
            <meta name="description" content="Projects Page" />
        </Helmet>

        <ProjectsBanner />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Welcome to my projects page!</h2>
                    </header>
                    <p>Here you will find a selection of some of the programming projects that I've made in the past, along with
                    descriptions and my own thoughts and reflections on them. There are also links to GitHub repositories for all
                    of the projects, where you can look throught the code, read the readme or even run the code yourself
                    to see how it works.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                  <Link to="/generic" className="image">
                      <img src={pic08} alt="" />
                  </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>CityEngine Game</h3>
                            </header>
                            <p>A simple 2D game written in Java using a wrapper to the JBOX2D engine provided by City, University of London. It is a simple Mario-like game, where the objective is to collect the coins, avoid enemies and obstacles, and progress to next levels.</p>
                            <p>You can find a link to the GitHub repository down below, along with a JavaDoc documentation for the code, and a brief description of the functions of the game.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/PiotrRut/CityEngineGame" className="button">View on GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Rhoncus magna</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sed nunc ligula</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Projects
