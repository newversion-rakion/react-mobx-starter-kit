import { observable, action } from 'mobx'
import * as Api from "utils/api"
import { navigateTo } from "utils/routing"

class LoginStore {
  @observable initialLoginForm = {
    email: '',
    password: ''
  }

  @observable accessToken = ''

  @action handleLogin = async (values) => {
    try {
      const result = await Api.post({
        url: 'login',
        data: values,
        loading: true,
      })

      this.accessToken = result.token
      sessionStorage.setItem('accessToken', this.accessToken)
      sessionStorage.setItem('userName', 'ahihi')

      navigateTo('/user-management')
    } catch(e) {
    }
  }
}

export default LoginStore
