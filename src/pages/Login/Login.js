import React, { Component } from "react"
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'
import { Formik, Field, Form, ErrorMessage } from "formik"

import { LoginForm as validate } from "form/validators"
import {
  InputTextField,
  ErrorField
} from "form/components"

import classes from "./Login.module.scss"
import LoginStore from './LoginStore'

@observer
class Login extends Component {
  constructor(props) {
    super(props)
    this.LoginStore = new LoginStore()
  }
  render() {
    const { initialLoginForm, handleLogin } = this.LoginStore
    return(
      <div className={classes.loginPage}>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-sm-6">
            <Formik
                enableReinitialize
                initialValues={initialLoginForm}
                validate={validate}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(false)
                  handleLogin(values)
                }}
              >
                {({ ...props }) => {
                  return(
                    <Form>
                      <div className="form-group">
                        <Field
                          className="form-control"
                          label={<FormattedMessage id="loginPage.form.label.email" />}
                          component={InputTextField}
                          type="text"
                          name="email" />
                        <ErrorMessage name="email" component={ErrorField} />
                      </div>

                      <div className="form-group">
                        <Field
                          className="form-control"
                          label={<FormattedMessage id="loginPage.form.label.password" />}
                          component={InputTextField}
                          type="password"
                          name="password" />
                        <ErrorMessage name="password" component={ErrorField} />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={props.isSubmitting || !props.isValid}
                      >
                        <FormattedMessage id="loginPage.form.label.submitBtn" />
                      </button>
                    </Form>
                )}}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
