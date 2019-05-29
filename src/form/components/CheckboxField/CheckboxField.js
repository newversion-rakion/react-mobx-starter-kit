import React from 'react'
import { Field } from 'formik'

import classes from './CheckboxField.module.scss'

const CheckboxField = (props) => {
  return (
    <Field name={props.name}>
      {({ field, form: { setFieldValue, setFieldTouched } }) => {
        return (
          <div className={classes.checkBoxField}>
            <label>
              <input
                type="checkbox"
                {...props}
                checked={field.value && field.value.includes(props.value)}
                onChange={() => {
                  if (field.value.includes(props.value)) {
                    const nextValue = field.value.filter(
                      value => value !== props.value
                    )
                    setFieldValue(props.name, nextValue)
                  } else {
                    const nextValue = field.value.concat(props.value)
                    setFieldValue(props.name, nextValue)
                  }
                }}
                onBlur={() => setFieldTouched(field.name)}
              />
              {props.label}
            </label>
          </div>
        )
      }}
    </Field>
  )
}
export default CheckboxField
