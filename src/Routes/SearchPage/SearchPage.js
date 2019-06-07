import React, { Component } from 'react'
import Article from '../../components/Article/Article'
import AppContext from '../../contexts/AppContext'
import SubscriptionsApiService from '../../services/subscriptions-api-service'
import NewsApiService from '../../services/news-api-service'
import './SearchPage.css'

export default class SearchPage extends Component {
  static contextType = AppContext

  state = {
    searchTerm: '',
    sources: '',
  }

  componentDidMount = () => {
    this.context.clearError()
    this.context.clearArticles()
    let subscriptions = [];
    let sources;

    SubscriptionsApiService.getUserSubscriptions()
      .then(subs => {
        subs.map(sub => subscriptions.push(sub.source_id))
        sources = subscriptions.join()
        this.setState({sources})
      })
      .catch(this.context.setError)
  }

  setSearchTerm = (searchTerm) => {
    this.setState({searchTerm})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {searchTerm, sources} = this.state
    
    NewsApiService.getSearchResults(searchTerm, sources)
      .then(res => this.context.setArticles(res.articles))
      .catch(this.context.setError)
  }

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
        <h1>Search for news</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-term">Search for articles:</label>
          <input onChange={e => this.setSearchTerm(e.target.value)} placeholder="nasa" type="text" name="search-term" id="search-term"/>
          <button type='submit'>Search</button>
        </form>
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