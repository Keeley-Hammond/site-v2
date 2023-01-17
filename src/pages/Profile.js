import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from 'gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Icon from 'components/Icon'

class Profile extends React.Component {
  render() {
    const { location, data } = this.props
    const profile = get(data, 'profile.childImageSharp.fixed')
    const work1 = get(data, 'work1.childImageSharp.sizes')
    const work2 = get(data, 'work2.childImageSharp.sizes')
    const back1 = get(data, 'back1.childImageSharp.sizes')
    const back2 = get(data, 'back2.childImageSharp.sizes')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="profile" />
        <div>
          <section className="text-center">
            <div className="container">
              <Img fixed={profile} className="rounded-circle" />
              <h1>Hi, I'm Keeley.</h1>
              <p className="lead text-muted text-left">
                <a href="https://github.com/VerteDinde">
                  I'm a software engineer currently living in Portland, Oregon
                </a>
                . I serve on the leadership team for the Portland chapter of
                Women Who Code, where I focus on creating and teaching
                programming curriculum that helps beginners start contributing
                to OSS.
              </p>
              <p className="lead text-muted text-left">
                I enjoy developing on the server side, speaking at conferences,
                baking, long-distance running, and hacking away on interesting
                problems. I primarily work with JavaScript (Node & React) and
                Golang.
              </p>
              <p className="lead text-muted text-left">
                When not coding, I enjoy{' '}
                <a href="https://www.strava.com/athletes/3855756">
                  running through the mountains of the Columbia Gorge
                </a>
                ,{' '}
                <a href="https://blogs.oracle.com/ksplice/hijacking-http-traffic-on-your-home-subnet-using-arp-and-iptables">
                  experimenting and learning new ways to route Internet traffic
                </a>
                , and listening to podcasts about American history.
              </p>
              <div className="service-box">
                <a href="https://github.com/vertedinde">
                  <i
                    className="fa fa-github fa-lg wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </a>
                <a href="https://twitter.com/keeleyhammond">
                  <i
                    className="fa fa fa-twitter fa-lg wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </a>
                <a href="https://www.linkedin.com/in/keeleyhammond">
                  <i
                    className="fa fa fa-linkedin fa-lg wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </a>
                <a href="https://codepen.io/VerteDinde/">
                  <i
                    className="fa fa fa-codepen fa-lg wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </a>
              </div>
            </div>
          </section>

          <section className="bg-primary text-white text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section-heading">Skills</h2>
                  <hr className="border-white" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                  <Icon title="HTML" name="html5" />
                </div>
                <div className="col-lg-3 col-6">
                  <Icon title="JavaScript" name="js" />
                </div>
                <div className="col-lg-3 col-6">
                  <Icon title="React.js" name="react" />
                </div>
                <div className="col-lg-3 col-6">
                  <Icon title="Vue.js" name="vuejs" />
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                  <Icon title="Node.js" name="node" />
                </div>
                <div className="col-lg-3 col-6 ">
                  <Icon title="Python" name="python" />
                </div>
                <div className="col-lg-3 col-6 ">
                  <Icon title="AWS" name="aws" />
                </div>
                <div className="col-lg-3 col-6 ">
                  <Icon title="Docker" name="docker" />
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="text-center jumboimage">
            <Img sizes={back1} className="cover-image" />
            <div className="container">
              <div className="row cover-over">
                <div className="col-md-12 text-left">
                  <h2 className="section-heading">Work</h2>
                  <p>
                    I'm currently a front-end engineer for InVision, working on
                    InVision Studio.
                    <br />
                    Used to be a stop-motion animator and an accounts director
                    at Think Shift, a creative agency.
                    <br />
                  </p>
                  <li>2017 ~ Present: InVision, Studio team</li>
                  <li>2016 ~ 2014: Think Shift</li>
                </div>
              </div>
            </div>
          </section>

          <section
            className="bg-primary text-white text-center color-inverse"
            id="concept"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section-heading">Community</h2>
                  <hr className="border-white" />
                </div>
              </div>
            </div>
            <div className="container">
              <div>
                <p>
                  I'm on the leadership team for Women Who Code's Portland
                  chapter. We host meetups every month around algorithms/data
                  structures, Javascript, design, React and open source
                  contributions. We always welcome new members. Join us!
                </p>
              </div>
              <div className="row">
                <div className="col-md-6" data-wow-duration="1.0s">
                  <p className="text-white">
                    <a
                      className="text-white"
                      href="https://www.meetup.com/Women-Who-Code-Portland/"
                    >
                      View Upcoming Meetups{' '}
                    </a>
                    <i
                      className="fa fa-meetup fa-lg wow bounceIn"
                      data-wow-duration="2.0s"
                    />
                  </p>
                </div>
                <div className="col-md-6" data-wow-duration="1.0s">
                  <p className="text-white">
                    <a
                      className="text-white"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSc7nw_7AD050b8vXM35_9fyxf-pkBek9iK11wWImgIV80ZiOQ/viewform?usp=sf_link"
                    >
                      Join Our Slack{' '}
                    </a>
                    <i
                      className="fa fa-slack fa-lg wow bounceIn"
                      data-wow-duration="2.0s"
                    />
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="repos">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 text-left">
                  <h2 className="section-heading">Contact</h2>
                  <div className="container">
                    <p className="text-muted">
                      If you’re ever in the Portland, OR area, or would just
                      like to chat, you can reach me a few different ways.
                    </p>
                    <p className="text-muted">
                      I like{' '}
                      <a href="mailto:keeleyhammond@gmail.com">reading email</a>
                      . I also like{' '}
                      <a href="https://twitter.com/keeleyhammond">tweets</a>.
                      You can find me as @keeley in the Women in Tech Slack.
                    </p>
                    <p className="text-muted">
                      And if you happen to be running or biking somewhere in
                      Portland, hit me up on{' '}
                      <a href="https://www.strava.com/athletes/3855756">
                        Strava
                      </a>
                      ! I’m always open to a new running buddy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Profile

export const query = graphql`
  query ProfilePageQuery {
    profile: file(name: { eq: "profile" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    work1: file(name: { eq: "work1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work2: file(name: { eq: "work2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work3: file(name: { eq: "work3" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back1: file(name: { eq: "back1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back2: file(name: { eq: "back2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`
