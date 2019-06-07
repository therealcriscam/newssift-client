import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import FeedCapture from '../../media/feedcapture.png'
import SearchCapture from '../../media/searchcapture.png'
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <div>
          <h1>Customize your news experience.</h1>
          <p>These days, a quick Google search reveals thousands of articles from thousands of sources on a single topic. *insert cliche about having too much of a good thing*. But who has time to sift through all those results? We do.</p>
        </div>

        <div>
          <h2>How it Works</h2>

          <div className="landing-page-feature">
            <h3>Tailored search.</h3>
            <p> Tailor your searches to return articles and posts from the sources you trust. Select your favorite sources from a list of over 100 of the top news publishers and blogs. Save your settings for use on all your searches. </p>
            <img className="feature-example" src={SearchCapture} alt="Example of feature" />
          </div>

          <div className="landing-page-feature">
            <h3>Personalized Feed</h3>
            <p>A personalized news feed is created using your favorite sources. Keep up with your favorite sources by seeing their latest posts or just see their top headlines.</p>
            <img className="feature-example" src={FeedCapture} alt="Example of feature" />

          </div>
        </div>

        <div>
          <Link
            to="/register">
            <h2>Get Started</h2>
          </Link>
        </div>
      </div>
    )
  }
}