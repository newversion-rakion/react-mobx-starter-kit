import React from 'react'
import classNames from 'classnames'

import classes from './RadioField.module.scss'

const RadioField = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return(
    <div className={classes.radioField}>
      <input
        name={name}
        id={id}
        type="radio"
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames("radio-button")}
        {...props}
      />
      {label &&
        <label htmlFor={id}>{label}</label>
      }
    </div>
  )
}

export default RadioField
