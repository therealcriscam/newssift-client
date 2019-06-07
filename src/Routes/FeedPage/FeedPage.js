import React, { Component } from 'react'
import Article from '../../components/Article/Article'
import AppContext from '../../contexts/AppContext'
import SubscriptionsApiService from '../../services/subscriptions-api-service'
import NewsApiService from '../../services/news-api-service'
import './FeedPage.css'

export default class FeedPage extends Component {
  static contextType = AppContext

  componentDidMount = () => {
    this.context.clearError()
    this.context.clearArticles()
    let subscriptions = [];
    let sources;

    SubscriptionsApiService.getUserSubscriptions()
      .then(subs => {
        subs.map(sub => subscriptions.push(sub.source_id))
        sources = subscriptions.join()

        return NewsApiService.getTopHeadlines(sources)
          .then(res => this.context.setArticles(res.articles))
          .catch(this.context.setError)
      })
      .catch(this.context.setError)
  }

  handleCheckNews = () => {}

  renderArticles = (index) => {
    const {articles = []} = this.context
    return articles.map(article => 
      <Article 
        keyValue={index}
        article={article}
      />
    )
  }

  render() {
    const {error} = this.context
    return (
      <div>
        <h1>Your Feed</h1>
        <button className='check-news-btn' type='button' onClick={this.handleCheckNews} >
          Check the news!
        </button>
        <ul className='article-list'>
          {error
            ? <p className='red'>There was an error, try again</p>
            : this.renderArticles()
          }  
        </ul>
      </div>
    )
  }
}