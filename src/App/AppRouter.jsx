import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Loader } from '../components/Loader'
import { Header } from '../components/Header'
import { Login } from '../pages/Login'
import { AdminPage } from '../pages/AdminPage'
import { WorkPage } from '../pages/WorkPage'
import { AdminTable } from '../pages/AdminTable'
import { WorkTable } from '../pages/WorkTable'

export default function () {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/admin_table" component={AdminTable} />
          <Route exact path="/work_table" component={WorkTable} />
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
      </Suspense>
    </Router>
  )
}
