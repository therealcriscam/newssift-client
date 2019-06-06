import React, { Component } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import ArticleList from '../../components/ArticleList/ArticleList'

export default class SearchPage extends Component {
  render() {
    return (
      <div>
        <h1>Search for news</h1>
        <SearchBar />
        <ArticleList />
      </div>
    )
  }
}