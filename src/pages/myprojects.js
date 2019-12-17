import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import { GoCode } from 'react-icons/go'

class MyProjects extends React.Component {
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

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Projects</title>
          <meta name="description" content="My Projects" />
        </Helmet>
        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <h1>My Projects</h1>
              <p>
                Here you will find some of the programming projects that I have
                made in the past. To learn more about them, go
                through the code or even run some of them on your own machine, you can
                visit their GitHub repositories by clicking on them!
              </p>
              <p>
                This page is automatically updated via calls to the GitHub API.
              </p>

              <div className="grid-wrapper">
                {this.state.repos.map(repo => (
                  <div className="col-4">
                    <div className="box">
                      <h3>
                        <a href={repo.html_url}>{repo.name}</a>
                      </h3>
                      <p>{repo.description}</p>
                      <p>
                        <GoCode /> {repo.language}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/" className="button special">
                Back home
              </a>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
export default MyProjects
