import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Formik, Field, Form, ErrorMessage } from 'formik'

import { UserEditForm as validate } from 'formik/validators'
import classes from './UserEdit.module.scss'

import EditUserStore from './UserEditStore'

@observer
class UserEdit extends Component {
  constructor() {
    super()
    this.EditUserStore = new EditUserStore()
  }

  componentDidMount() {
    this.EditUserStore.getUserInfo(this.props.match.params.id)
  }
  render() {
    const { userInfo, editUserInfo } = this.EditUserStore
    return(
      <div className={classes.userEditPage}>
        <div className='container'>
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
                {({ values, isSubmitting }) => (
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
      </div>
    )
  }
}

export default UserEdit
