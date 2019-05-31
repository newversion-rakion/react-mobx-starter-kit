import React, { lazy, Suspense } from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import PrivateRoute from "./PrivateRoute"
import { BASENAME } from "utils/constants"

const DashBoard  = lazy(() => import("pages/DashBoard"))
const Login  = lazy(() => import("pages/Login"))
const UserManagement  = lazy(() => import("pages/UserManagement"))
const UserHomePage = lazy(() => import("pages/UserHomePage"))
const UserEdit = lazy(() => import("pages/UserEdit"))
const PageNotFound = lazy(() => import("pages/PageNotFound"))
const SomethingWentWrong = lazy(() => import("pages/SomethingWentWrong"))

const Routes = () => (
  <Suspense fallback={<div className="container">Loading...</div>}>
    <Switch>
      <Route path={`${BASENAME}/(|login)`} component={Login} exact />
      <PrivateRoute path={`${BASENAME}/user-management`} component={UserManagement} exact />
      <PrivateRoute path={`${BASENAME}/user-management/:id`} component={UserHomePage} exact />
      <PrivateRoute path={`${BASENAME}/user-management/:id/edit`} component={UserEdit} exact />
      <PrivateRoute path={`${BASENAME}/dashboard`} component={DashBoard} />
      <Route path={`${BASENAME}/something-went-wrong`} component={SomethingWentWrong} exact />
      <Route path={`${BASENAME}/page-not-found`} component={PageNotFound} exact />
      <Redirect to="/page-not-found" />
    </Switch>
  </Suspense>
)

export default Routes
