import React, { Component } from 'react'
import DetailsStep from '../DetailsStep/DetailsStep'
import SourcesStep from '../SourcesStep/SourcesStep'
import ConfirmStep from '../ConfirmStep/ConfirmStep'
import AuthApiService from '../../services/auth-api-service'
import SubscriptionsApiService from '../../services/subscriptions-api-service'
import './RegistrationForm.css'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  constructor(props) {
    super(props)

    this.state = {
      currentStep: 1,
      name: '',
      username: '',
      password: '',
      sources: [],
      error: null,
    }
  }

  nextStep = () => {
    let currentStep = this.state.currentStep

    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  prevStep = () => {
    let currentStep = this.state.currentStep

    currentStep = currentStep <= 1 ? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  get prevButton() {
    let currentStep = this.state.currentStep

    if (currentStep !== 1) {
      return (
        <button className='btn back-btn' type='button' onClick={this.prevStep}>
          Back
        </button>
      )
    }

    return null
  }

  get nextButton() {
    let currentStep = this.state.currentStep

    if (currentStep < 3) {
      return (
        <button className='btn next-btn' type='button' onClick={this.nextStep}>
          Next
        </button>
      )
    }

    return null
  }

  handleDetailsChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  handleSourcesChange = (sources) => {
    const choices = []
    
    if (sources) {
      sources.map(source => {
        return choices.push({source})
      })

    }

    this.setState({
      sources: [...choices]
    })
  }

  handleSubmit = (event) => {
    console.log('running first')
    event.preventDefault()
    const {name, username, password, sources} = this.state
    sources.map(selected => {
      const {value, label} = selected.source
      console.log(value);
      console.log(label);
      return `${value} and ${label}`
    })

    // this.setState({error: null})

    AuthApiService.postUser({
      username: username,
      password: password,
      name: name,
    })
      .then(user => {
        console.log('running second')
        name.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess(username.value, password.value)
      })
      .catch(res => {
        this.setState({error: res.error})
      })
    
    // SubscriptionsApiService.postSubscription({})
  }

  render() {
    return (
      <div>
        <h3>Step {this.state.currentStep}</h3>
        <form onSubmit={this.handleSubmit}>

          {this.prevButton}
          {this.nextButton}
          
          <DetailsStep
            currentStep={this.state.currentStep}
            handleDetailsChange={this.handleDetailsChange}
            name={this.state.name}
            username={this.state.username}
            password={this.state.password}
          />

          <SourcesStep
            currentStep={this.state.currentStep}
            handleSourcesChange={this.handleSourcesChange}
            sources={this.state.sources}
          />

          <ConfirmStep
            currentStep={this.state.currentStep}
            name={this.state.name}
            username={this.state.username}
            password={this.state.password}
            sources={this.state.sources}
          />


        </form>
      </div>
    )
  }
}