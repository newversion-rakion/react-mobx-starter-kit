import React from "react"
import pageNotFoundImg from "asssets/images/page_not_found.jpg"

import classes from "./PageNotFound.module.scss"

const PageNotFound = () =>
  <div className="container">
    <div className={classes.pageNotFound}>
      <img src={pageNotFoundImg} alt="page not found" />
    </div>
  </div>

export default PageNotFound
