export const setItem = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key) => {
  return JSON.parse(sessionStorage.getItem(key))
}

export const setToken = async (token) => {
  sessionStorage.setItem('accessToken', token)
}

export const getToken = () => {
  return sessionStorage.getItem('accessToken')
}

export const clearAllItems = () => {
  sessionStorage.clear()
}
