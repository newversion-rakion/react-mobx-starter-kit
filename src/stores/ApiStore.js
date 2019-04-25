import { observable, action } from 'mobx'

class ApiStore {
  @observable loading = false
  @observable numberOfApiCall = 0
  @observable notification = null

  @action setLoading = ({ loading }) => {
    loading ? this.numberOfApiCall += 1 : this.numberOfApiCall -= 1

    if(loading && this.numberOfApiCall === 1) {
      this.loading = true
    } else if(this.numberOfApiCall === 0) {
      this.loading = false
    }
  }

  @action setNotification = ({ notification, timer = 3000 }) => {
    this.notification = notification

    setTimeout(() => {
      this.notification = null
    }, timer)
  }
}

export default new ApiStore()
