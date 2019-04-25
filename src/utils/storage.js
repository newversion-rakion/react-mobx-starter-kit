export const setItem = (key, value) => sessionStorage.setItem(key, JSON.stringify(value))

export const getItem = (key) => JSON.parse(sessionStorage.getItem(key))

export const setToken = async (token) => sessionStorage.setItem('accessToken', token)

export const getToken = () => sessionStorage.getItem('accessToken')

export const clearAllItems = () => sessionStorage.clear()
