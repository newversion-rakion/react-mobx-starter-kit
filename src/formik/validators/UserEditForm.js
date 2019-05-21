const UserEditForm = values => {
  console.log(values)
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
    console.log('error is coming')
    errors.foods = 'Food cannot be blank';
  }

  return errors
}

export default UserEditForm
