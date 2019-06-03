import * as storage from './storage'
import { navigateTo } from './routing'

export const isAuthenticated = () => (
  !!storage.getToken()
)

export const handleLogout = () => {
  sessionStorage.removeItem('accessToken')
  sessionStorage.removeItem('userName')
  navigateTo('/login')
  window.location.reload()
}
