import { createBrowserHistory } from 'history'
import { BASENAME } from './constants'

const history = createBrowserHistory()

export const navigateTo = path => history.push(`${BASENAME}${path}`)

export const navigateBack = () => history.goBack()

export default history