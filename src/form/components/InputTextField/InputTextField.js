import React from "react"
import classNames from "classnames"
import { injectIntl, FormattedMessage } from "react-intl"

import classes from "./InputTextField.module.scss"

const InputTextField = ({
  field,
  form: { touched, errors },
  className,
  label,
  ...props
}) => (
  <div className={classes.inputTextField}>
    {label &&
      <label><FormattedMessage id={label} /></label>
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

export default injectIntl(InputTextField)
