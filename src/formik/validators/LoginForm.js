const LoginForm = (values) => {
  let errors = {}

  if (!values.email) {
    errors.email = 'Required';
  }

  return errors
}

export default LoginForm
