import React from "react"
import { injectIntl, FormattedMessage } from "react-intl"

import classes from "./ErrorField.module.scss"

const ErrorField = ({
  ...props
}) => (
  <div className={classes.errorText}>
    <FormattedMessage id={props.children} />
  </div>
)

export default injectIntl(ErrorField)
