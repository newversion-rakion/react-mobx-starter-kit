const LoginForm = (values) => {
  let errors = {}

  if (!values.email) {
    errors.email = "Required";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors
}

export default LoginForm
