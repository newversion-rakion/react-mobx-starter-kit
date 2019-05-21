import React, { Component } from 'react'
import Select from 'react-select'

import classes from './SelectField.module.scss'

class SelectField extends Component {
  constructor(props) {
    super(props)

    this.state = {
      valueObj: {
        label: '',
        value: undefined,
      }
    }
  }

  handleChange = valueObj => {
    const { form, field } = this.props
    form.setFieldValue(field.name, valueObj.value)

    this.setState({
      valueObj,
    })
  }

  handleClearValue = () => {
    const { form, field } = this.props
    form.setFieldValue(field.name, undefined)

    this.setState({
      valueObj: {
        label: '',
        value: undefined,
      }
    })
  }
  render() {
    const { valueObj } = this.state

    const { label, options, form, ...props } = this.props

    return(
      <div>
        {label &&
          <label>{label}</label>
        }
        <div className={classes.selectFieldWrap}>
          <button
            type="button"
            onClick={this.handleClearValue}
            className={classes.removeValueBtn}
          >
            x
          </button>
          <Select
            value={valueObj}
            onChange={this.handleChange}
            options={options}
            {...props}
          />
        </div>
      </div>
    )
  }
}

export default SelectField
