import axios from "axios"

import { navigateTo } from "./routing"
import * as storage from "./storage"
import { SERVER_URL, API_TIMEOUT } from "./constants"
import apiStore from "stores/ApiStore"

const instance = axios.create({
  baseURL: SERVER_URL,
  timeout: API_TIMEOUT,
})

const handleError = error => {
  const notification = {
    type: 'ERROR',
    message: 'Something went wrong'
  }

  if(error.message) notification.message = error.message

  apiStore.setNotification({ notification })

  if(error.response && error.response.code === 403) {
    storage.clearAllItems()
    navigateTo('/')
  }

  return Promise.reject()
}

const sendRequest = ({ url, method, params, data, loading = false }) => {
  if(loading) apiStore.setLoading({loading: true})

  return instance({
    url,
    method,
    params,
    data,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': storage.getToken() || ''
    },
  }).then((response) => {
    if (loading) {
      apiStore.setLoading({ loading: false })
    }
    return response.data
  }).catch((error) => {
    if (loading && error.errorMessage) {
      apiStore.setLoading({ loading: false })
    }

    return handleError(error)
  })
}

export const get = ({ url, params, loading }) => (
  sendRequest({ url, params, method: 'GET', loading })
)

export const post = ({ url, params, data, loading }) => (
  sendRequest({ url, params, data, method: 'POST', loading })
)

export const put = ({ url, params, data, loading }) => (
  sendRequest({ url, params, data, method: 'PUT', loading })
)

export const deleteData = ({ url, params, data, loading }) => (
  sendRequest({ url, params, data, method: 'DELETE', loading })
)
