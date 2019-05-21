import React from 'react'
import classNames from 'classnames'

import classes from './InputTextField.module.scss'

const InputTextField = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  const { className, label, ...rest } = props
  return (
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
        {...field} {...rest}
      />
    </div>
  )
}

export default InputTextField
