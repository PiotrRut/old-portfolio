import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ProjectsBanner from '../components/ProjectsBanner'

const Projects = props => (
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
          <p>
            Here you will find some of the programming projects
            that I've made in the past, along with short descriptions and my own
            thoughts and reflections on them. To learn more about them, go through
            the code or even run some of them on your own machine, click on any
            of the links that will take you straight to their GitHub repositories.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>CityEngine Game</h3>
              </header>
              <p>
                A simple 2D game written in Java using a wrapper to the JBOX2D
                engine provided by City, University of London. It is a simple
                Mario-like game, where the objective is to collect the coins,
                avoid enemies and obstacles, and progress to next levels.
              </p>
              <p>
                You can find a link to the GitHub repository down below, along
                with a JavaDoc documentation for the code, and a brief
                description of the functions of the game.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/PiotrRut/CityEngineGame"
                    className="button"
                  >
                    View on GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Personal website</h3>
              </header>
              <p>
                The website you are currently visiting! It doubles as a
                portfolio for my programming projects and the photographs taken
                by me. Feel free to look around!
              </p>
              <p>
                It is written using React and Gatsby, with Netlify being
                responsible for the hosting. For more information about how its
                made, visit its GitHub repository.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/PiotrRut/piotr-rutkowski.com"
                    className="button"
                  >
                    View on GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Golden Clouds Website</h3>
              </header>
              <p>
                Golden Clouds is my submission for the 1st Year final project in
                the Business Systems module at City, University of London. Our
                task was to make a fully functional database-driven website.
                This particular project is a website for a tanning studio, where
                users can register and make an account, check available time
                slots for available appointments, book them and contact the
                studio directly using the form provided on this website
              </p>
              <p>
                For this particular project I have developed both the fron tend,
                built on ReactJS, as well as a back end for handling requests,
                where I used MongoDB as my database, and based everything on
                NodeJS and the Express.js server framework For that reason there
                are two repositories available for this project on my GitHub.
                Both are linked down below.
              </p>
              <ul className="actions">
                  <li><a href="https://github.com/PiotrRut/Golden-Clouds-Frontend"
                   className="button">Front end</a></li>
                  <li><a href="https://github.com/PiotrRut/Golden-Clouds-Backend"
                   className="button">Back end</a></li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>iOS Stopwatch App</h3>
              </header>
              <p>
                A very simple app I wrote in Swift, as one of my first iOS
                projects. It is a clean stopwatch app that lets you start and
                pause a timer, and relies on Apple provided NSTimer interface.
                This app is meant to be a little fun side project for me to
                practice Swift, and is not intended for the AppStore. There is
                haptic feedback inmplemented on each button that is activated
                when the button is pressed, as well as haptic feedback to
                indicate every minute passed.
              </p>
              <p>
                It is compatible with all iPhone models running iOS version 11
                or newer.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/PiotrRut/iOS-Stopwatch-App"
                    className="button"
                  >
                    View on GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="grid-wrapper">
        </div>
      </section>
    </div>
  </Layout>
)

export default Projects
