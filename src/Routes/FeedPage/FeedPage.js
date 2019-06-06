import React, { Component } from 'react'
import ArticleList from '../../components/ArticleList/ArticleList'

export default class FeedPage extends Component {
  render() {
    return (
      <div>
        <h1>Your Feed</h1>
        <form>
          <button type='submit'>Check the news!</button>
          <div>
            <label htmlFor="sort-by">Sort by:</label>
            <input type="radio" name="sort-by" id="sort-by" value="publishedAt" defaultChecked />Latest News
            <input type="radio" name="sort-by" id="sort-by" value="popularity" />Top Headlines
          </div>
        </form>
        <ArticleList />
      </div>
    )
  }
}