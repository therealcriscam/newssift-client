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

  handleRegistrationSuccess = (username, password) => {
    return AuthApiService.postLogin({
      username,
      password
    })
      .then(res => {
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