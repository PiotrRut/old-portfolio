import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ProjectsBanner from '../components/ProjectsBanner'
import { GoCode } from 'react-icons/go'

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/PiotrRut/repos')
      .then(res => res.json())
      .then(data => {
        this.setState({
          repos: data,
        })
        console.log(data)
      })
      .catch(console.log)
  }


  render(){
    return (
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
            Here you will find some of the programming projects that I've
            made in the past, along with short descriptions and my own
            thoughts and reflections on them. To learn more about them, go
            through the code or even run some of them on your own machine by
            clicking on any of them.
          </p>
        </div>
      </section>

      <section id="two" className="spotlights">
        {this.state.repos.map(repo => (
        <section>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>{repo.name}</h3>
              </header>
              <p>
                {repo.description}
              </p>
              <p><GoCode /> {repo.language}</p>
              <ul className="actions">
                <li>
                  <a
                    href={repo.html_url}
                    className="button"
                  >
                    View on GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        ))}
      </section>
    </div>
  </Layout>
)
}
}

export default Projects
