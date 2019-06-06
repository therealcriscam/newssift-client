import React, {Component} from 'react'
import './DetailsStep.css'

export default class DetailsStep extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null
    }

    //add validation for inputs

    return (
      <div className='form-group'>
        <div className='field'>
          <label htmlFor='name'>Name: </label>
          <input 
            className='form-control'
            id='name'
            name='name'
            type='text'
            placeholder='Jimi Hendrix'
            value={this.props.name}
            onChange={this.props.handleDetailsChange}
            required
          />
        </div>

        <div className='field'>
          <label htmlFor='username'>Username: </label>
          <input 
            className='form-control'
            id='username'
            name='username'
            type='text'
            placeholder='voodoochild27'
            value={this.props.username}
            onChange={this.props.handleDetailsChange}
            required
          />
        </div>

        <div className='field'>
          <label htmlFor='password'>Password: </label>
          <input 
            className='form-control'
            id='password'
            name='password'
            type='password'
            placeholder='Purple_hazE1969'
            value={this.props.password}
            onChange={this.props.handleDetailsChange}
            required
          />
        </div>
      </div>
    )
  }
}