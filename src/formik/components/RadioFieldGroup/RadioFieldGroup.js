import React from 'react'
import classNames from 'classnames'

import classes from './RadioFieldGroup.module.scss'

const RadioFieldGroup = ({
  label,
  className,
  children
}) => {
  return (
    <div className={classNames(classes.radioGroup, className)}>
      <fieldset>
        {label &&
          <label>{label}</label>
        }
        {children}
      </fieldset>
    </div>
  )
}



export default RadioFieldGroup
