import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className='Header-logged-in'>
        <Link to='/feed'>Feed</Link>
        <Link to='/search'>Search</Link>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header-not-logged-in'>
        <Link
          to='/register'>
          Sign Up
        </Link>
        <Link
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  render() {
    return <>
      <nav className='Header'>
        <h1>
          <Link to='/'>
            News Sift
          </Link>
        </h1>
        <span className='Header-tagline--wide'>the news you need from the sources you want.</span>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>

      <span className='Header-tagline--narrow'>the news you need from the sources you want.</span>
    </>
  }
}
