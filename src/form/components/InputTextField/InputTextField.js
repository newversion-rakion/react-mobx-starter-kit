import React from 'react'
import classNames from 'classnames'

import classes from './InputTextField.module.scss'

const InputTextField = ({
  field,
  form: { touched, errors },
  className,
  label,
  ...props
}) => (
  <div className={classes.inputTextField}>
    {label &&
      <label>{label}</label>
    }
    <input
      className={
        classNames(
          className,
          touched[field.name] && errors[field.name] ? classes.hasError : ''
        )
      }
      {...field}
      {...props}
    />
  </div>
)

export default InputTextField
