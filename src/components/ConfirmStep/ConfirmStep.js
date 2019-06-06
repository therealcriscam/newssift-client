import React, {Component} from 'react'

export default class ConfirmStep extends Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null
    }

    //add validation for inputs

    const {sources} = this.props
    const selectedSources = sources.map(selection => {
      return <li className='selected-source' key={selection.source.value}>{selection.source.label}</li>
    })

    return (
      <div className='form-group'>
        <h2>Please confirm your info.</h2>
        <p>
          Name: {this.props.name} <br/>
          Username: {this.props.username} <br/>
        </p>
        <ul>Selected Sources: {selectedSources}
        </ul>
        <button>Sign Up</button>
      </div>
    )
  }
}