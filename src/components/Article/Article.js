import React, { Component } from 'react'
import './Article.css'

export default class Article extends Component {
  render() {
    const {article, keyValue} = this.props

    return (
      <div>
        <li key={keyValue} className='article'>
          <h3><a href={article.url}>{article.title}</a></h3>
          <p>{article.source.name}</p>
          {article.author !== null && 
            <p>{article.author}</p>
          }
          <p>{article.description}<br/>
            <span><a href={article.url}>Read More</a></span>
          </p>
          {article.urlToImage !== null && 
            <a href={article.url}><img src={article.urlToImage} alt='Article'/></a>
          }
        </li>
        <hr/>
      </div>
    )
  }
}