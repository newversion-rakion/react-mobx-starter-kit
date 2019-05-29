const UserEditForm = values => {
  let errors = {}

  if (!values.first_name) {
    errors.first_name = 'First name cannot be blank';
  }

  if (!values.last_name) {
    errors.last_name = 'Last name cannot be blank';
  }

  if (!values.email) {
    errors.email = 'Email cannot be blank';
  }

  if (!values.foods) {
    errors.foods = 'Food cannot be blank';
  }

  if (!values.radioGroup) {
    errors.foods = 'Radio group cannot be blank';
  }

  if (values.checkboxGroup.length === 0) {
    errors.checkboxGroup = 'Checkbox group cannot be blank';
  }

  return errors
}

export default UserEditForm