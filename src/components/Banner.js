import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Piotr Rutkowski</h1>
            </header>
            <div className="content">
                <p>Welcome to my website! Scroll down and discover more about me. </p>
                <ul className="actions">
                    <li><button onClick={() => scrollTo('#one')}>Get Started</button></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
