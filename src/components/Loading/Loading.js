import React from "react"
import classes from "./Loading.module.scss"

const Loading = () =>
  <div className={classes.loadingShadow}>
    <div className={classes.loadingIcon} />
  </div>

export default Loading
