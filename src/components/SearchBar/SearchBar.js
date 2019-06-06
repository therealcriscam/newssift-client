import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  render() {
    return (
      <form>
        <label htmlFor="search-term">Search for articles:</label>
        <input placeholder="nasa" type="text" name="search-term" id="search-term"/>
        <button type='submit'>Search</button>
      </form>
    )
  }
}