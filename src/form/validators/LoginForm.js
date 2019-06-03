const LoginForm = (values) => {
  let errors = {}

  if (!values.email) {
    errors.email = "loginPage.form.validator.email"
  }

  if (!values.password) {
    errors.password = "loginPage.form.validator.password"
  }

  return errors
}

export default LoginForm
