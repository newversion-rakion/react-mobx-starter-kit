import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage } from "react-intl"

import { Formik, Field, Form, ErrorMessage } from 'formik'
import { UserEditForm as validate } from 'form/validators'
import {
  InputTextField,
  SelectField,
  RadioField,
  CheckboxField,
  ErrorField
} from 'form/components'
import classes from './UserEdit.module.scss'

import EditUserStore from './UserEditStore'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

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
                  setSubmitting(false)
                  editUserInfo(userInfo.id, values)
                }}
              >
                {({ ...props }) => {
                  console.log(props)
                  return(
                    <Form>
                      <div className='form-group'>
                        <Field
                          className='form-control'
                          label='First_name'
                          component={InputTextField}
                          type='text'
                          name='first_name' />
                        <ErrorMessage name='first_name' component={ErrorField} />
                      </div>

                      <div className='form-group'>
                        <Field
                          className='form-control'
                          label='Last_name'
                          component={InputTextField}
                          type='text'
                          name='last_name' />
                        <ErrorMessage name='last_name' component={ErrorField} />
                      </div>

                      <div className='form-group'>
                        <Field
                          label='Test select'
                          placeholder='Select one...'
                          options={options}
                          component={SelectField}
                          type='text'
                          name='foods' />
                        <ErrorMessage name='foods' component={ErrorField} />
                      </div>

                      <div className="form-group">
                        <CheckboxField name="checkboxGroup" value="1" label="hihi" />
                        <CheckboxField name="checkboxGroup" value="2" label="ahihi" />
                        <CheckboxField name="checkboxGroup" value="3" label="ưhihi"/>
                        <ErrorMessage name='checkboxGroup' component={ErrorField} />
                      </div>

                      <div className='form-group'>
                        <Field
                          component={RadioField}
                          name="radioGroup"
                          id="radioOption1"
                          label="option 1"
                        />
                        <Field
                          component={RadioField}
                          name="radioGroup"
                          id="radioOption2"
                          label="option 2"
                        />
                      </div>

                      <div className='form-group'>
                        <Field
                          className='form-control'
                          label='Email'
                          component={InputTextField}
                          type='text'
                          name='email' />
                        <ErrorMessage name='email' component={ErrorField} />
                      </div>

                      <button
                        type='submit'
                        className='btn btn-primary'
                        disabled={props.isSubmitting || !props.isValid}
                      >
                        <FormattedMessage id="userEdit.form.submitBtn" />
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

export default UserEdit
