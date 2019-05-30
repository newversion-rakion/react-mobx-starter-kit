import React from "react"
import classes from "./Notification.module.scss"

const Notification = ({ notification }) =>
  <div className={classes.notificationBox}>
    {notification}
  </div>

export default Notification
