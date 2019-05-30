import * as storage from './storage'

export const isAuthenticated = () => (
  !!storage.getToken()
)
