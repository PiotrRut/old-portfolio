import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ProjectsBanner from '../components/ProjectsBanner'


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
                    of the projects, where you can look throught the code, read the information or even run the code yourself
                    to see how it works.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
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
                                                        // next projects
            </section>
        </div>

    </Layout>
)

export default Projects
