import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = ({ author, title }) => (
  <div className="footer">
    <div className="container">
      <hr className="border-primary" />
      <div className="service-box">
        <a href="https://github.com/vertedinde">
          <i className="fa fa-github wow bounceIn" data-wow-duration="2.0s" />
        </a>
        <a href="https://twitter.com/keeleyhammond">
          <i
            className="fa fa fa-twitter wow bounceIn"
            data-wow-duration="2.0s"
          />
        </a>
        <a href="https://www.linkedin.com/in/keeleyhammond">
          <i
            className="fa fa fa-linkedin wow bounceIn"
            data-wow-duration="2.0s"
          />
        </a>
        <a href="https://codepen.io/VerteDinde/">
          <i
            className="fa fa fa-codepen wow bounceIn"
            data-wow-duration="2.0s"
          />
        </a>
      </div>
    </div>
  </div>
)

export default Footer
