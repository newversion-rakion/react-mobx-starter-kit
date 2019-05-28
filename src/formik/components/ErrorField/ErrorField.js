import React from 'react'

import classes from './ErrorField.module.scss'

const ErrorField = ({
  ...props
}) => {
  return (
    <div className={classes.errorText}>
      {props.children}
    </div>
  )
}

export default ErrorField