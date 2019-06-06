import React, { Component } from 'react'
import './Article.css'

export default class Article extends Component {
  render() {
    return (
      <li className='article'>
        <h3><a href="https://www.wired.com/story/moon-photo-gallery/">The Photographs That Paved the Way for Apollo 11</a></h3>
        <p>Wired</p>
        <p>By Laura Mallonee</p>
        <p>A new exhibition charts the history of moon photography—just in time for the 50th anniversary of the NASA mission.</p>
        <img src='https://media.wired.com/photos/5ccb37f0dd05f045b7113b9b/191:100/pass/PHOTOGRAM%20(1).jpg' alt='Article' />
      </li>
    )
  }
}