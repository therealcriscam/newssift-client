import React, { Component } from 'react'
import Article from '../Article/Article'

export default class ArticleList extends Component {
  render() {
    return (
      <div>
        <ul>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </ul>
        <button type='button'>See More</button>
      </div>
    )
  }
}