import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { UserEditForm as validate } from 'formik/validators'
import classes from './UserEdit.module.scss'

class UserEdit extends Component {

  render() {
    const { userInfo, editUserInfo } = this.props
    console.log(validate)

    return(
      <div className={classes.userEditForm}>
        <div className='row'>
          <div className='col-md-4'>
            <Formik
              enableReinitialize
              initialValues={userInfo}
              validate={validate}
              onSubmit={(values, { setSubmitting  }) => {
                editUserInfo(userInfo.id, values)
                setSubmitting(false)
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>First name</label>
                    <Field className='form-control' type='text' name='first_name' />
                    <ErrorMessage name='first_name'>
                      {errorMessage => <div className='error'>{errorMessage}</div>}
                    </ErrorMessage>
                  </div>

                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Last name</label>
                    <Field className='form-control' type='text' name='last_name' />
                    <ErrorMessage name='last_name'>
                      {errorMessage => <div className='error'>{errorMessage}</div>}
                    </ErrorMessage>
                  </div>

                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Email</label>
                    <Field className='form-control' type='email' name='email' />
                    <ErrorMessage name='email'>
                      {errorMessage => <div className='error'>{errorMessage}</div>}
                    </ErrorMessage>
                  </div>

                  <button
                    type='submit'
                    className='btn btn-primary'
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    )
  }
}

export default UserEdit
