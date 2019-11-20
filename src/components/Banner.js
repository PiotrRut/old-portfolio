import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Hi, my name is Piotr</h1>
            </header>
            <div className="content">
                <p>Welcome to my personal website! Scroll down and discover more about me. </p>
                <ul className="actions">
                    <li><button onClick={() => scrollTo('#one')}>Get Started</button></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
