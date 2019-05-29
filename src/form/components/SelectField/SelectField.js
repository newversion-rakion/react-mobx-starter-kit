import React from 'react'
import Select from 'react-select'

import classes from './SelectField.module.scss'

const SelectField = ({
  form: {
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
  },
  field,
  label,
  options,
  ...props
}) => (
  <div>
    {label &&
      <label>{label}</label>
    }
    <div className={classes.selectFieldWrap}>
      <button
        type="button"
        onClick={() => setFieldValue(field.name, '')}
        className={classes.removeValueBtn}
      >
        x
      </button>
      <Select
        value={(options && field.value) ? options.find(option => option.value === field.value) : ''}
        onChange={(selectedOption) => setFieldValue(field.name, selectedOption.value)}
        options={options}
        onBlur={() => setFieldTouched(field.name)}
        className={errors[field.name] && touched[field.name] ? classes.hasError : ''}
        {...props}
      />
    </div>
  </div>
)

export default SelectField
