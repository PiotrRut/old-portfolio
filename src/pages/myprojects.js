import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import { GoCode } from 'react-icons/go'
import { MdGrade } from "react-icons/md";
import { CopyToClipboard } from 'react-copy-to-clipboard'


class MyProjects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      copied: false,
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

  onChange = ({target: {value}}) => {
    this.setState({value, copied: false});
  };

  onCopy = () => {
    this.setState({copied: true});
  };


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
                Here is a list of all my public projects' repositories. To learn more about them, go
                through the code or even run some of them on your own machine, you can
                visit their GitHub repositories by clicking on them! <b>You
                can also click the 'Clone' button, which will copy the clone link
                to your clipboard!</b>
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
                        <MdGrade /> {repo.stargazers_count} &nbsp;
                        <GoCode /> {repo.language} -
                        <CopyToClipboard onCopy={this.onCopy} text={repo.clone_url}>
                          <a href="javascript:;"> Clone</a>
                        </CopyToClipboard>
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
