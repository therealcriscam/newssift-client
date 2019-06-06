import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

export default class RegistrationPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  state = {
    error: null
  }

  // handleRegistrationSuccess = (user) => {
  //   const {history} = this.props
  //   history.push('/')
  // }

  handleRegistrationSuccess = (username, password) => {
    console.log('runningg')
    AuthApiService.postLogin({
      username,
      password
    })
      .then(res => {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)

        const {location, history} = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
      })
      .catch(res => {
        this.setState({error: res.error})
      })
  }

  render() {
    return (
      <div className='RegistrationPage'>
        <h2>Register</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </div>
    )
  }
}