import React, {Component} from 'react'
import SOURCES from '../../STORE'
import Select from 'react-select'
import './SourcesStep.css'


export default class SourcesStep extends Component {

  handleChange = (sources) => this.props.handleSourcesChange(sources)

  render() {
    if (this.props.currentStep !== 2) {
      return null
    }

    const sources = SOURCES.sources
    const options = []

    sources.map(source => options.push({value: source.id, label: source.name}))

    return (
      <div className='form-group'>
        <Select
          onChange={this.handleChange}
          options={options}
          isMulti={true}
          isSearchable={true}
          placeholder='Select up to 20 sources'
          closeMenuOnSelect={false}
          defaultMenuIsOpen={true}
          delimiter=','
        />
      </div>
    )
  }
}