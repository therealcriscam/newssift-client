import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import './LoginForm.css'

export default class Article extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = {
    error: null,
  }

  handleSubmitJwtAuth = (event) => {
    event.preventDefault()
    this.setState({error: null})
    const {username, password} = event.target

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({error: res.error})
      })

  };

  render() {
    // const { error } = this.state 

    return (
      <form 
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        {/* <div className='alert' role="alert">
          {error && <p>{error}</p>}
        </div> */}
        <div className="username">
          <label htmlFor='LoginForm-username'>
            Username: 
          </label>
          <input required name='username' id='LoginForm-username' />
        </div>
        <div className='password'>
          <label htmlFor='LoginForm-password'>
            Password: 
          </label>
          <input required type='password' name='password' id='LoginForm-password' />
        </div>
        <button type='submit'>
          Login
        </button>
      </form>
    )
  }
}