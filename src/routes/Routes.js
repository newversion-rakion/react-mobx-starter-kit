import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import { BASENAME } from 'utils/constants'
const LandingPage  = lazy(() => import('pages/LandingPage'))
const Login  = lazy(() => import('pages/Login'))
const UserManagement  = lazy(() => import('pages/UserManagement'))
const UserHomePage = lazy(() => import('pages/UserHomePage'))
const PageNotFound = lazy(() => import('pages/PageNotFound'))
const SomethingWentWrong = lazy(() => import('pages/SomethingWentWrong'))

const Routes = () => (
  <Suspense fallback={<div className='container'>Loading...</div>}>
    <Switch>
      <Route path={`${BASENAME}/login`} component={Login} exact />
      <Route path={`${BASENAME}/user-management`} component={UserManagement} exact />
      <Route path={`${BASENAME}/user-management/:id`} component={UserHomePage} exact />
      <Route path={`${BASENAME}/something-went-wrong`} component={SomethingWentWrong} exact />
      <Route path={`${BASENAME}/page-not-found`} component={PageNotFound} exact />
      <Route component={LandingPage} />
    </Switch>
  </Suspense>
)

export default Routes
